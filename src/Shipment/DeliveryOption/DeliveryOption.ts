import { DeliveryType } from "./enum/DeliveryType";

export class DeliveryOption {
    private type: DeliveryType;
    private fee: number;

    constructor(type: DeliveryType, fee: number) {
        this.type = type;
        this.fee = fee;
    }

    public getDeliveryFee(): number {
        return this.fee;
    }

    public getDeliveryType(): DeliveryType {
        return this.type;
    }

    public setDeliveryType(type: DeliveryType): void {
        this.type = type;
    }

    public setDeliveryFee(fee: number): void {
        this.fee = fee;
    }

    public getDetails(): string {
        return `Type: ${this.type}, Fee: $${this.fee.toFixed(2)}`;
    }
}
