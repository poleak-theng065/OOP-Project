import { PaymentStatus } from "./Enum/paymentStatus";

export class Payment {
  // Added date property
  constructor(
    public id: string,
    public totalAmount: number,
    public status: PaymentStatus = PaymentStatus.PENDING,
    public transactionId?: string,
    public date: Date | null = null // Added date property with default null
  ) {}

  complete(txnId: string) {
    this.status = PaymentStatus.COMPLETED;
    this.transactionId = txnId;
    this.date = new Date(); // Optionally set date when completing
  }

  fail() {
    this.status = PaymentStatus.FAILED;
    this.date = new Date(); // Optionally set date when failing
  }

  getDate(): Date | null {
    return this.date;
  }
}