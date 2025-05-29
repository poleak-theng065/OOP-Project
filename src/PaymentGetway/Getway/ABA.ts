// src/gateways/payment/ABA.ts
import { IPaymentGateway } from "./InterfacepaymentGetway";

// async is a keyword used to declare that a function is asynchronous — meaning it will return a Promise and can use the await keyword inside.

export class ABA implements IPaymentGateway {
  async process(amount: number): Promise<string> {
    console.log(`[ABA] Processing $${amount}`);
    return `aba_txn_${Date.now()}`;
  }

  async refund(transactionId: string): Promise<boolean> {
    console.log(`[ABA] Refunding ${transactionId}`);
    return true;
  }
}
