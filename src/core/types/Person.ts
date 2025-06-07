/**
 * Abstract class representing a generic Address.
 * Concrete subclasses must implement fullAddress() method.
 */
export class Address {
  fullAddress() {
      throw new Error("Method not implemented.");
  }
  protected street: string;
  protected city: string;
  protected country: string;

  constructor(street: string, city: string, country: string) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

/**
 * Abstract class representing a Person with basic personal details.
 * The address is of type Address (composition).
 */
export abstract class Person {
  getEmail(): string {
    throw new Error("Method not implemented.");
  }
  getPassword(): string {
    throw new Error("Method not implemented.");
  }
  protected id: string;
  protected firstName: string;
  protected lastName: string;
  protected email: string;
  protected password: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  /**
   * Changes the user's password if the old password matches.
   * @param oldPassword - The current password to verify.
   * @param newPassword - The new password to set.
   * @returns true if password was changed successfully; otherwise false.
   */

  changePassword(oldPassword: string, newPassword: string): boolean {
    if (this.password === oldPassword) {
      this.password = newPassword;
      return true;
    }
    return false;
  }
}
