import { Person } from "../../../AbstractPerson/Person";
import { Role } from "../../Enum/UserType";
import { Address } from "../../../AbstractPerson/Person";

// Customer class
export class Seller extends Person {
  private username: string;
  private role: Role;

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
    super(id, firstName, lastName, email, password, address);
    this.username = username;
    this.role = role;
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


