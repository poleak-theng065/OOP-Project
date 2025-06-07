// src/gateways/payment/ACLEDA.ts
import { IPaymentGateway } from "./InterfacepaymentGetway";

export class ACLEDA implements IPaymentGateway {
  async process(amount: number): Promise<string> {
    console.log(`[ACLEDA] Processing $${amount}`);
    return `acleda_txn_${Date.now()}`;
  }

  async refund(transactionId: string): Promise<boolean> {
    console.log(`[ACLEDA] Refunding ${transactionId}`);
    return true;
  }
}
