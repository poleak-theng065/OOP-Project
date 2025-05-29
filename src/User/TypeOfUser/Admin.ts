import { User } from "./User";
import { Role } from "../Enum/UserType";

export class Admin extends User {
  constructor(username: string, password: string) {
    super(username, password, Role.ADMIN);
    
    
  }

  manageSystem(): void {
    console.log(`${this.username} is managing the system.`);
  }
}
