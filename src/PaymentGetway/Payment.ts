import { PaymentStatus } from "./Enum/paymentStatus";

export class Payment {
  constructor(

    public id: string,
    public totalAmount: number,
    public status: PaymentStatus = PaymentStatus.PENDING,
    public transactionId?: string
  ) {}

  complete(txnId: string) {
    this.status = PaymentStatus.COMPLETED;
    this.transactionId = txnId;
  }

  fail() {
    this.status = PaymentStatus.FAILED;
  }
}
