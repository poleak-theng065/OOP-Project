import { Customer } from "./Customer";
import { Role } from "../../Enum/UserType";
import { Address } from "../../../AbstractPerson/Person";

export class CustomerRegistry {
  private customers: Customer[] = [];

  /**
   * Registers a new customer if email and username are unique.
   * @param id - Unique identifier for the customer
   * @param firstName - Customer's first name
   * @param lastName - Customer's last name
   * @param email - Customer's email
   * @param password - Customer's password
   * @param address - Customer's address (Address instance)
   * @param username - Customer's username
   * @param role - Role, defaults to USER
   * @returns Status message string
   */
  public registerCustomer(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: Address,
    username: string,
    role: Role = Role.USER
  ): string {
    // Check for existing customer by email or username
    const duplicate = this.customers.find(
      customer =>
        customer.getEmail() === email || customer.getUsername() === username
    );

    if (duplicate) {
      return '❌ Email or Username already exists!';
    }

    // Create and store new Customer
    const newCustomer = new Customer(
      id,
      firstName,
      lastName,
      email,
      password,
      address,
      username,
      role
    );

    this.customers.push(newCustomer);
    return `✅ Customer "${newCustomer.getFullName()}" registered successfully.`;
  }

  /** Returns all registered customers */
  public getAllCustomers(): Customer[] {
    return this.customers;
  }
}
