import { IPaymentGateway } from "../Getway/InterfacepaymentGetway";
import { Payment } from "../Payment";

export class PaymentService {
  constructor(private gateway: IPaymentGateway) {}

  async checkout(order: Payment): Promise<Payment> {
    try {
      const txnId = await this.gateway.process(order.totalAmount);
      order.complete(txnId);
      console.log("✅ Payment completed. Transaction ID:", txnId);
    } catch (error) {
      order.fail();
      console.error("❌ Payment failed.", error);
    }
    return order;
  }
}
