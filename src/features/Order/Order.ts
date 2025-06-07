import { Address } from "../../core/types/Person";
import { Customer } from "../../User/Customer/Customer";
import { DeliveryManager } from "../../User/DeliveryManager/DeliveryManager";
import { Invoice } from "../Invoice/invice";
import { OrderItem } from "../OrderItem/OrderItem";
import { Payment } from "../PaymentGetway/Payment";
import { DeliveryOption } from "../Shipment/DeliveryOption/DeliveryOption";
import { Shipment } from "../Shipment/Shipment";


export class Order {
    private  customer: Customer;
    private items: OrderItem[] = [];
    private total: number = 0;
    private shipment: Shipment[] = [];
    private payment?: Payment;
    private invoice?: Invoice;

    constructor(customer: Customer) {
        this.customer = customer;
    }

    createOrderItems(orderItems: OrderItem[]): void{
        this.items = orderItems;
        this.updateTotal();

    }

    calculateTotal(): number {
        let sum = 0;
        for (const item of this.items) {
            sum += item.getSubTotal();
        }
        this.total = sum;
        return this.total;
    }

    createShipment(manager: DeliveryManager, option: DeliveryOption, trackingNumber: string): void {
        const address: Address = this.customer.getAddress(); 
        const shipmentItems: OrderItem[] = this.items;       

        const shipment = new Shipment(
            manager,
            shipmentItems,
            option,
            trackingNumber,
            address
        );

        this.shipment.push(shipment);
    }

    cancleItem(item: OrderItem): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1); 
            this.updateTotal();          
        }
    }

    refundItem(item: OrderItem): void {
        console.log("💰 Refunded item subtotal:", item.getSubTotal());

    }

    updateTotal(): void{
        this.total = this.calculateTotal();

    }

    getItems(): OrderItem[] {
        return this.items;
    }

    getShipments(): Shipment[] {
        return this.shipment;
    }

    getCustomer(): Customer {
        return this.customer;
    }

    getTotalAmount(): number {
        return this.total;
    }

    getOrderDetails(): string {
    return this.items.map(item => item.toString()).join(", ");
}

}
