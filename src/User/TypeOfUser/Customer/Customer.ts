import { Person } from "../../../AbstractPerson/Person";
import { Role } from "../../Enum/UserType";
import { Address } from "../../../AbstractPerson/Person";

export class Customer extends Person {
  private username: string;
  private role: Role;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: Address,  // changed from string to Address
    username: string,
    role: Role = Role.USER
  ) {
    super(id, firstName, lastName, email, password, address);
    this.username = username;
    this.role = role;
  }

  getUsername(): string {
    return this.username;
  }

  // Return the role as enum Role, not string
  getRole(): Role {
    return this.role;
  }

  buyProduct(): void {
    console.log(`${this.username} can buy products.`);
  }
}
