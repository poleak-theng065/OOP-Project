import { Person } from "../../../AbstractPerson/Person";
import { Role } from "../../Enum/UserType";
import { Address } from "../../../AbstractPerson/Person";

export class Admin extends Person {
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
    role: Role = Role.ADMIN
 
  ) {
    super(id, firstName, lastName, email, password,);
    this.username = username;
    this.role = role;
  
  }

  getUsername(): string {
    return this.username;
  }

  getRole(): Role {
    return this.role;
  }



}
