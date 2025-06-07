import { Role } from "../core/enums/UserType";


export class User {
    name: any;
  constructor(
    public username: string,
    private password: string,
    public role: Role = Role.USER
    
  ) {}

  public isPasswordValid(input: string): boolean {
    return this.password === input;
  }

    buyProduct(): void {
    console.log(`${this.username} can buy products.`);
  }

  public getPassword ():string{
    return this.password;
  }
}
