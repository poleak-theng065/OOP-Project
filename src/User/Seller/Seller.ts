import { Role } from "../../core/enums/UserType";
import { Person, Address } from "../../core/types/Person";
import { OrderItem } from "../../features/OrderItem/OrderItem";
import { Category } from "../../features/Product/Category";
import { Products } from "../../features/Product/Products";

export class Seller extends Person {
  private username: string;
  private address: Address;
  private roles: Role[];
  private orderItems: OrderItem[];
  private categories: Category[];
  private products: Products[];

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    username: string,
    address: Address,
    roles: Role[] = [Role.SELLER],
    orderItems: OrderItem[] = [],
    categories: Category[] = [],
    products: Products[] = []
  ) {
    super(id, firstName, lastName, email, password);
    this.username = username;
    this.address = address;
    this.roles = roles;
    this.orderItems = orderItems;
    this.categories = categories;
    this.products = products;
  }

  getEmail(): string {
    return super.getEmail();
  }

  getPassword(): string {
    return super.getPassword();
  }

  getUsername(): string {
    return this.username;
  }

  getRoles(): Role[] {
    return this.roles;
  }

  getAddress(): Address {
    return this.address;
  }

  addProduct(product: Products): void {
    this.products.push(product);
  }

  checkProductNumberInStock(productName: string): number {
    const product = this.products.find(p => p.getName() === productName);
    if (!product) throw new Error("Product not found");
    return product.getNumberInStock();
  }

  checkProductsInStock(): string[] {
    return this.products
      .filter(p => p.getNumberInStock() > 0)
      .map(p => p.getName());
  }

  checkOrderedItems(): OrderItem[] {
    return this.orderItems;
  }

  getOrdersWithMyProducts(): OrderItem[] {
    const myProductNames = this.products.map(p => p.getName());
    return this.orderItems.filter(item =>
      myProductNames.indexOf(item.getProduct().getName()) !== -1
    );
  }

  buyProduct(): void {
    console.log(`${this.username} can buy products.`);
  }
}