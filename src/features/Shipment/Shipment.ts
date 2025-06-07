import { Address } from "../../core/types/Person";
import { DeliveryManager } from "../../User/DeliveryManager/DeliveryManager";
import { OrderItem } from "../OrderItem/OrderItem";
import { DeliveryOption } from "./DeliveryOption/DeliveryOption";


export class Shipment {
    private manager: DeliveryManager;
    private orderItems : OrderItem[];
    private deliveryOption: DeliveryOption;
    private trackingNumber: string;
    private destination: Address;

    constructor(
        manager: DeliveryManager,
        orderItems: OrderItem[],
        deliveryOption: DeliveryOption,
        trackingNumber: string,
        destination: Address
    ) {
        this.manager = manager;
        this.orderItems = orderItems;
        this.deliveryOption = deliveryOption;
        this.trackingNumber = trackingNumber;
        this.destination = destination;
    }

    public track(): string {
        return this.manager.trackDelivery(this);
    }

    public getDeliveryStatus(): string {
        return `Tracking #${this.trackingNumber} is in progress to ${this.destination.fullAddress()}`;
    }

    // Optional: Add getters for encapsulated properties
    public getTrackingNumber(): string {
        return this.trackingNumber;
    }

    public getDeliveryOption(): DeliveryOption {
        return this.deliveryOption;
    }

    public getDestination(): Address {
        return this.destination;
    }

    public getOrderItems(): OrderItem[] {
        return this.orderItems;
    }

    public getManager(): DeliveryManager {
        return this.manager;
    }
}
