import { Authentication } from "../../InterfaceAuthenication/InterfaceAuthenication";// adjust path as needed
import { Admin } from "./Admin";
import { Address } from "../../../AbstractPerson/Person";

export class AdminAuthentication implements Authentication {
  private admins: Admin[] = [];

  // Manually add admins (e.g., seed)
  public addAdmin(admin: Admin): void {
    this.admins.push(admin);
  }

  getAdminByEmail(email: string): Admin | undefined {
    return this.admins.find(admin => admin.getEmail() === email);
  }

  // Implement login method
  login(credentials: {
    id: string;
    email: string;
    password: string;
  }): boolean {
    const admin = this.admins.find(a => a.getEmail() === credentials.email);
    if (!admin) return false;
    if (admin.getPassword() !== credentials.password) return false;
    return true;
  }

  // No register method, because admins can't self-register
}
