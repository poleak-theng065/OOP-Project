import { ABA } from '../PaymentGetway/Getway/ABA';
import { PayPal } from '../PaymentGetway/Getway/Papal';
import { ACLEDA } from '../PaymentGetway/Getway/Acilida';
import { PaymentService } from '../PaymentGetway/service/PaymentService';
import { Payment } from '../PaymentGetway/Payment';
import { PaymentMethod } from '../PaymentGetway/Enum/PaymentMethod';
import { PaymentStatus } from '../PaymentGetway/Enum/paymentStatus';

export class PaymentGateway {
  private paymentService: PaymentService;
  private payment: Payment | null = null;
  private paymentMethod: PaymentMethod;

  constructor(method: PaymentMethod) {
    this.paymentMethod = method;
    const gateway = this.getGateway(method);
    this.paymentService = new PaymentService(gateway);
  }

  // Selects the appropriate payment gateway based on the provided method
  private getGateway(method: PaymentMethod) {
    switch (method) {
      case PaymentMethod.ABA:
        return new ABA();
      case PaymentMethod.PAYPAL:
        return new PayPal();
      case PaymentMethod.ACLEDA:
        return new ACLEDA();
      default:
        throw new Error('Unsupported payment method');
    }
  }

  // Processes the payment for a given order
  async processPayment(orderId: string, amount: number): Promise<{ status: string; transactionId: string }> {
    this.payment = new Payment(orderId, amount);
    const result = await this.paymentService.checkout(this.payment);

    // Ensure transactionId is a string; throw error if undefined
    if (!result.transactionId) {
      throw new Error('Transaction ID is missing from payment result');
    }

    // Update payment status based on result
    if (result.status === PaymentStatus.COMPLETED.toString()) {
      this.payment.complete(result.transactionId);
    } else if (result.status === PaymentStatus.FAILED.toString()) {
      this.payment.fail();
    }

    return {
      status: result.status,
      transactionId: result.transactionId,
    };
  }

  // Gets the total amount of the payment
  getTotalAmount(): number {
    if (!this.payment) {
      throw new Error('No payment processed yet');
    }
    return this.payment.totalAmount;
  }

  // Gets the payment method
  getPaymentMethod(): PaymentMethod {
    return this.paymentMethod;
  }

  // Gets the payment date
  getPaymentDate(): Date | null {
    if (!this.payment) {
      return null;
    }
    return this.payment.date || null;
  }

  // Getter for accessing the payment service instance
  getPaymentService(): PaymentService {
    return this.paymentService;
  }
}

// Example usage
async function main() {
  try {
    const processor = new PaymentGateway(PaymentMethod.PAYPAL);
    console.log('Payment Service:', processor.getPaymentService());

    const order = new Payment("order_001", 99.99);
    console.log('Order:', order);

    const result = await processor.processPayment("order_001", 99.99);
    console.log("Order Status:", result.status);
    console.log("Transaction ID:", result.transactionId);

    console.log("Total Amount:", processor.getTotalAmount());
    console.log("Payment Method:", processor.getPaymentMethod());
    console.log("Payment Date:", processor.getPaymentDate());
  } catch (error) {
    console.error("Payment processing error:", error);
  }
}

// Run the example
main();
