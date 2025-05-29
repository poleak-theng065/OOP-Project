import { Customer } from "../TypeOfUser/Customer/Customer";
import { Admin } from "../TypeOfUser/Admin";

export const users = [
  new Customer(
    "u1",
    "Poleak",
    "Sok",
    "poleak@example.com",
    "123456",
    "Phnom Penh"
  ),
  new Admin(
    "a1",
    "Chandy",
    "Neat",
    "admin@example.com",
    "admin123",
    "Siem Reap"
  )
];
