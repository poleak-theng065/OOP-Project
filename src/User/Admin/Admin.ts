import { Role } from "../../core/enums/UserType";
import { Person, Address } from "../../core/types/Person";


export class Admin extends Person {
  getEmail() : string {
    throw new Error("Method not implemented.");
  }
  getPassword() : string {
    throw new Error("Method not implemented.");
  }
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
