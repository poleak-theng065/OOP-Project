import { Order } from "../Order/Order";
import { Product } from "../Product/Products";
import { Seller } from "../User/TypeOfUser/Seller/Seller";

export class OrderItem {
    private order: Order;
    private product: Product;
    private quantity: number;
    private price: number;
    private seller: Seller;

    constructor(order: Order, product: Product, quantity: number, price: number, seller: Seller) {
        this.order = order;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
        this.seller = seller;
    }

    getSubTotal(): number{
        return this.quantity * this.price;
    }
}