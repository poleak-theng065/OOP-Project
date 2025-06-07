import { Seller } from "../../User/Seller/Seller";
import { Order } from "../Order/Order";
import { Products } from "../Product/Products";


export class OrderItem {
    private order: Order;
    private product: Products;
    private quantity: number;
    private price: number;
    private seller: Seller;

    constructor(order: Order, product: Products, quantity: number, price: number, seller: Seller) {
        this.order = order;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
        this.seller = seller;
    }

    getSubTotal(): number{
        return this.quantity * this.price;
    }

    getOrder(): Order {
        return this.order;
    }

    getProduct(): Products {
        return this.product;
    }
}
