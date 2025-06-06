import { Order } from "../Order/Order";
import { PaymentGateway } from "../PaymentGetway/PaymentGetway";

export class Invoice {
    private order: Order;
    private payment: Payment;

    constructor(order: Order, payment: Payment) {
        this.order = order;
        this.payment = payment;
    }

    generate(): void {
        console.log("=".repeat(40));
        console.log(" ".repeat(12) + "🧾 INVOICE");
        console.log("=".repeat(40));
        console.log(`👤 Customer     : ${this.order.getCustomerName()}`);
        console.log(`🛒 Order Details: ${this.order.getOrderDetails()}`);
        console.log("-".repeat(40));
        console.log(`💵 Total Amount : $${this.order.getTotalAmount().toFixed(2)}`);
        console.log(`💳 Payment Method: ${this.payment.getPaymentMethod()}`);
        console.log(`📅 Payment Date : ${this.payment.getPaymentDate()}`);
        console.log("=".repeat(40));
        console.log("📩 Thank you for your purchase!");
        console.log("=".repeat(40));
    };

    

    sendToUser(): void {

    };
}