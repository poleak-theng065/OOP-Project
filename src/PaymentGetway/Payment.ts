import { PaymentStatus } from "./Enum/paymentStatus";
export class Payment {
  public date: Date | null; // Added to store payment creation date

  constructor(
    public id: string,
    public totalAmount: number,
    public status: PaymentStatus = PaymentStatus.PENDING,
    public transactionId?: string
  ) {
    this.date = new Date(); // Set date when payment is created
  }

  complete(txnId: string) {
    this.status = PaymentStatus.COMPLETED;
    this.transactionId = txnId;
  }

  fail() {
    this.status = PaymentStatus.FAILED;
  }
  getDate():Date|null{
    return this.date;
  }
  getAmount () :number{
    return this.totalAmount;
  }
  
}
