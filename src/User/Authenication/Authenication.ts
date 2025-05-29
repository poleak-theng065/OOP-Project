import { User } from "../TypeOfUser/User";
import { users } from "../ExampleDatabase/Database";

export class Authenication {
  public login(username: string, password: string): User | null {
    const user = users.find((u) => u.username === username);
    //The .find() method is used to search an array and return the first item that satisfies a condition (true for a callback function).
    if (user && user.isPasswordValid(password)) {
      return user;
    }
    return null;
  }



  public isAdmin(user: User): boolean {
    return user.role === "Admin";
  }
}
