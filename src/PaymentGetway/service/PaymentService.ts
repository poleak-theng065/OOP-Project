
import { IPaymentGateway } from "../Getway/InterfacepaymentGetway";
import { Order } from "../../OrderItem/OrderItem";


// 🧾 The method process() might call a real payment API or simulate one.
// 🕓 await makes sure the order is only marked as complete after the payment actually succeeds.
// ⛔ If the payment fails (e.g. API error), it jumps to the catch block.
export class PaymentService {
  constructor(private gateway: IPaymentGateway) {}

  async checkout(order: Order): Promise<Order> {
    try {
      const txnId = await this.gateway.process(order.totalAmount);
      order.complete(txnId);
    } catch {
      order.fail();
    }
    return order;
  }
}
