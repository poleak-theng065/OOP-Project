import { Person } from "../../../AbstractPerson/Person";
import { Role } from "../../Enum/UserType";
import { Address } from "../../../AbstractPerson/Person";

// Customer class
export class Seller extends Person {
  getEmail() {
    throw new Error("Method not implemented.");
  }
  getPassword() {
    throw new Error("Method not implemented.");
  }
  private username: string;
  private role: Role;
  private address: Address;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: Address,
    username: string,
    role: Role = Role.SELLER
  ) {
    super(id, firstName, lastName, email, password);
    this.username = username;
    this.role = role;
    this.address = address; // Assuming address is set in the Person class
  }

  getUsername(): string {
    return this.username;
  }

  getRole(): Role {
    return this.role;
  }

  buyProduct(): void {
    console.log(`${this.username} can buy products.`);
  }
}


