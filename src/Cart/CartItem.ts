import { Products } from "../Product/Products";

export class CartItem {
  constructor(public product: Products, public quantity: number) {}

  getItemTotal() :number {
    return this.quantity
  }
}