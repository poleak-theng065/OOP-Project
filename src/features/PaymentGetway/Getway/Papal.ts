
import { IPaymentGateway } from "./InterfacepaymentGetway";

export class PayPal implements IPaymentGateway {
  async process(amount: number): Promise<string> {
    console.log(`[PayPal] Processing $${amount}`);
    return `paypal_txn_${Date.now()}`;
  }

  async refund(transactionId: string): Promise<boolean> {
    console.log(`[PayPal] Refunding ${transactionId}`);
    return true;
  }
}
