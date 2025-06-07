import { Authentication } from "../../core/interfaces/InterfaceAuthenication";
import { Admin } from "./Admin";


export class AdminAuthentication implements Authentication {
  private admins: Admin[] = [];

  // Manually add admins (e.g., seed)
  public addAdmin(admin: Admin): void {
    this.admins.push(admin);
  }

  getAdminByEmail(email: string): Admin | undefined {
    return this.admins.find((admin) => admin.getEmail() === email);
  }

  // Implement login method
  login(credentials: { id: string; email: string; password: string }): boolean {
    const admin = this.admins.find((a) => a.getEmail() === credentials.email);
    if (!admin) return false;
    if (admin.getPassword() !== credentials.password) return false;
    return true;
  }

  // No register method, because admins can't self-register
}
