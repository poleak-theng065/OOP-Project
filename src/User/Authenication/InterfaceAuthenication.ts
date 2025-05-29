import { Address } from "../../AbstractPerson/Person";

export interface Authentication {
  /**
   * Log in a user with given credentials.
   * @param credentials - User login details.
   * @returns true if login successful, otherwise false.
   */
  login(credentials: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: Address;
  }): boolean;

  /**
   * Register a new user with given details.
   * Optional method.
   * @param details - User registration details.
   * @returns true if registration successful, otherwise false.
   */
  register?(details: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: Address;
  }): boolean;
}
