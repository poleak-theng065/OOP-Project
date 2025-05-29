import { OrderStatus } from "./orderStatus";

export class OrderItem {
  constructor(
    public id: string,
    public totalAmount: number,
    public status: OrderStatus = OrderStatus.PENDING,
    public transactionId?: string
  ) {}

  complete(txnId: string) {
    this.status = OrderStatus.COMPLETED;
    this.transactionId = txnId;
  }

  fail() {
    this.status = OrderStatus.FAILED;
  }
}
