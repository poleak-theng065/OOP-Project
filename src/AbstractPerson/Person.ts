/**
 * Abstract class representing a generic Address.
 * Concrete subclasses must implement fullAddress() method.
 */
export abstract class Address {
  protected street: string;
  protected city: string;
  protected country: string;

  constructor(street: string, city: string, country: string) {
    this.street = street;
    this.city = city;
    this.country = country;
  }

  // Getters and setters
  getStreet(): string {
    return this.street;
  }

  setStreet(street: string): void {
    this.street = street;
  }

  getCity(): string {
    return this.city;
  }

  setCity(city: string): void {
    this.city = city;
  }

  getCountry(): string {
    return this.country;
  }

  setCountry(country: string): void {
    this.country = country;
  }

  /**
   * Returns the full address formatted as a string.
   * Must be implemented by subclasses.
   */
  abstract fullAddress(): string;
}

/**
 * Abstract class representing a Person with basic personal details.
 * The address is of type Address (composition).
 */
export abstract class Person {
  protected id: string;
  protected firstName: string;
  protected lastName: string;
  protected email: string;
  protected password: string;
  protected address: Address;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: Address
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.address = address;
  }

  // Getters and setters
  getId(): string {
    return this.id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(newEmail: string): void {
    this.email = newEmail;
  }

  getAddress(): Address {
    return this.address;
  }

  setAddress(newAddress: Address): void {
    this.address = newAddress;
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

  /**
   * Returns the role of the person.
   * Must be implemented by concrete subclasses.
   */
  abstract getRole(): string;
}
