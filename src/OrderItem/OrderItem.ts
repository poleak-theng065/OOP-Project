import { Products } from "../Product/Products";

export class OrderItems {
    private product: Products;
    private quantity: number;
    private orderId: string;

    constructor(product: Products, quantity: number, orderId: string) {
        this.product = product;
        this.quantity = quantity;
        this.orderId = orderId;
    }

    getproduct(): Products {
        return this.product;
    }
}
