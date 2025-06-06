import { Admin } from "../../User/Admin/Admin";
import { ConcreteAddress } from "../../User/Customer/ConcreteAddress";
import { Customer } from "../../User/Customer/Customer";
import { Role } from "../enums/UserType";


// Sample users list
export const users = [
  new Customer(
    "u1",
    "Poleak",
    "Sok",
    "poleak@example.com",
    "123456",
    new ConcreteAddress("12 St", "Phnom Penh", "12000"),
    "poleaksok",
    Role.CUSTOMER
  ),
  new Admin(
    "a1",
    "Chandy",
    "Neat",
    "admin@example.com",
    "admin123",
    new ConcreteAddress("Admin Blvd", "Siem Reap", "13000"),
    "chandyadmin",
    Role.ADMIN
  )
];
