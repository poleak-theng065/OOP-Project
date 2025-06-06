import { Order } from "../Order/Order";
import { PaymentGateway } from "../PaymentGetway/PaymentGetway";

export class Invoice {
    private order: Order;
    private payment: PaymentGateway;

    constructor(order: Order, payment: PaymentGateway) {
        this.order = order;
        this.payment = payment;
    }

    generate(): void {
        console.log("=".repeat(40));
        console.log(" ".repeat(12) + "🧾 INVOICE");
        console.log("=".repeat(40));
        console.log(`👤 Customer     : ${this.order.getCustomer().getFirstName()}`);
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
        let customerEmail = this.order.getCustomer().getEmail();
        console.log(`📧 Sending invoice to ${customerEmail}...`);
        this.generate(); 
        console.log("✅ Invoice sent successfully!");
    };
}

// const order = new Order(customer);
// order.createOrderItems([item1, item2]);

// const payment = new Payment("Credit Card", new Date());
// order['payment'] = payment; 

// const invoice = new Invoice(order, payment);
// invoice.generate();