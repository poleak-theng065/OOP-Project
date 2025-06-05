import { Address } from "../../../AbstractPerson/Person";

/**
 * Concrete implementation of the abstract Address class.
 */
export class ConcreteAddress extends Address {
  constructor(street: string, city: string, country: string) {
    super(street, city, country);
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
   */
  fullAddress(): string {
    return this.street, this.city, this.country;
  }
}
