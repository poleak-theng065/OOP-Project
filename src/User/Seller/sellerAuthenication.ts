import { Role } from "../../core/enums/UserType";
import { Authentication } from "../../core/interfaces/InterfaceAuthenication";
import { Address } from "../../core/types/Person";
import { Seller } from "./Seller";

export class SellerAuthentication implements Authentication {
  private customers: Seller[] = [];

  // Adapt login to receive credentials as per interface
  login(credentials: { id: string; email: string; password: string }): boolean {
    const customer = this.customers.find(
      (c) => c.getEmail() === credentials.email
    );
    if (!customer) return false;
    if (customer.getPassword() !== credentials.password) return false;
    return true;
  }

  // Optional register method
  register(details: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: Address;
  }): boolean {
    const exists = this.customers.some((c) => c.getEmail() === details.email);
    if (exists) return false;

    // Create Seller with dummy username and role SELLER by default
    const newCustomer = new Seller(
      details.id,
      details.firstName,
      details.lastName,
      details.email,
      details.password,
      details.email.split("@")[0], // generate username from email prefix
      details.address,
      [Role.SELLER]
    );

    this.customers.push(newCustomer);
    return true;
  }

  // Additional helper to get all customers (optional)
  getAllCustomers(): Seller[] {
    return this.customers;
  }
}