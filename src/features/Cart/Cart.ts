import { Products } from "../Product/Products";
import { CartItem } from "./CartItem";

class Cart {
  private items: CartItem[] = [];

  // Add item to the cart
  addItem(product: Products): void {
    const existingItem = this.items.find(item => item.product.getName() === product.getName());
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push(new CartItem(product, 1));
    }
  }

  // Remove item from the cart
  removeItem(product: Products): void {
    this.items = this.items.filter(item => item.product.getName() !== product.getName());
  }

  // Get total price
  getTotal(): number {
    return this.items.reduce((total, item) => {
      return total + item.product.getPrice() * item.quantity;
    }, 0);
  }

  // Optional: View cart items
  getItems(): CartItem[] {
    return this.items;
  }
}
