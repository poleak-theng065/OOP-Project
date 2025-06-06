import { Role } from "../../core/enums/UserType";
import { Authentication } from "../../core/interfaces/InterfaceAuthenication";
import { Address } from "../../core/types/Person";
import { Customer } from "./Customer";


export class CustomerAuthentication implements Authentication {
  private customers: Customer[] = [];

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

    // Create Customer with dummy username and role USER by default
    const newCustomer = new Customer(
      details.id,
      details.firstName,
      details.lastName,
      details.email,
      details.password,
      details.address,
      details.email.split("@")[0], // generate username from email prefix
      Role.CUSTOMER
    );

    this.customers.push(newCustomer);
    return true;
  }

  // Additional helper to get all customers (optional)
  getAllCustomers(): Customer[] {
    return this.customers;
  }
}
