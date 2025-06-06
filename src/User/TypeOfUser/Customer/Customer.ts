import { Address, Person } from "../../../AbstractPerson/Person";
import { Role } from "../../Enum/UserType";

// Customer class
export class Customer extends Person {
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
    role: Role = Role.USER
  ) {
    super(id, firstName, lastName, email, password);
    this.username = username;
    this.role = role;
    this.address = address;
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

  getFirstName(): any {
    throw new Error("Method not implemented.");
  }
  getLastName(): any {
    throw new Error("Method not implemented.");
  }
  getEmail(): any {
    throw new Error("Method not implemented.");
  }
}
