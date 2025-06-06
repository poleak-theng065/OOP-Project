import { Address, Person } from "../AbstractPerson/Person";
import { OrderItems } from "../OrderItem/OrderItem";
import { Category } from "../Product/Category";
import { Products } from "../Product/Products";
import { Role } from "../User/Enum/UserType";

export class Seller extends Person {
  getUsername(): any {
    throw new Error("Method not implemented.");
  }
  getRole(): any {
    throw new Error("Method not implemented.");
  }
  private address: Address; // Assuming Seller has an address, similar to Customer
  private roles: Role[];
  private orderItems: OrderItems[];
  private category: Category[];
  private products: Products[];

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    roles: Role[] = [Role.SELLER],
    address: Address,
    orderItems: OrderItems[] = [],
    category: Category[] = [],
    products: Products[] = [],
    // Default role for Seller
  ) {
    super(id, firstName, lastName, email, password);
    this.address = address;
    this.roles = roles;
    this.orderItems = orderItems;
    this.category = category;
    this.products = products;
  }

  checkProductNumberInStock(productName: string): number {
    const product = this.products.find(
      (product) => product.getName() === productName
    );
    if (!product) {
      throw new Error("Product not found");
    }
    return product.getNumberInStock();
  }

  addProduct(product: Products): void {
    this.products.push(product);
  }

  checkProductsInStock(): string[] {
    return this.products
      .filter((product) => product.getNumberInStock() > 0)
      .map((product) => product.getName());
  }

  checkOrderedItems(): OrderItems[] {
    return this.orderItems;
  }

  // User Story 2: As a seller, I want to view all orders that include my products
  getOrdersWithMyProducts(): OrderItems[] {
    const myProductNames = this.products.map((product) => product.getName());
    const ordersWithMyProducts: OrderItems[] = [];
    for (const orderItem of this.orderItems) {
      if (myProductNames.indexOf(orderItem.getproduct().getName()) !== -1) {
        ordersWithMyProducts.push(orderItem);
      }
    }
    return ordersWithMyProducts;
  }
}
