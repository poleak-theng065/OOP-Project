import { AdminAuthentication } from "./TypeOfUser/Admin/AdminAuthenication";
import { Admin } from "./TypeOfUser/Admin/Admin";
import { ConcreteAddress } from "./TypeOfUser/Customer/ConcreteAddress";
import { Role } from "./Enum/UserType";
import { CustomerAuthentication } from "./TypeOfUser/Customer/CustomerAuthenication";

const adminAuth = new AdminAuthentication();
const cusAuth = new CustomerAuthentication();

const admin = new Admin(
  "a1",
  "Chandy",
  "Neat",
  "admin@example.com",
  "admin123",
  new ConcreteAddress("Admin Blvd", "Siem Reap", "13000"),
  "chandyadmin",
  Role.ADMIN
);

// Register customer using correct object format (not class instance)
const customerRegisterResult = cusAuth.register({
  id: "a2",
  firstName: "Chandy",
  lastName: "Neat",
  email: "admin@example.com", // ⚠ You might want a unique email here
  password: "admin123",
  address: new ConcreteAddress("Admin Blvd", "Siem Reap", "13000"),
});

adminAuth.addAdmin(admin);

const loginResult = adminAuth.login({
  id: "a1",
  email: "admin@example.com",
  password: "admin123",
});
console.log(cusAuth.getAllCustomers());
console.log(adminAuth.getAdminByEmail("admin@example.com"));


console.log("Admin login success:", loginResult); // true
console.log("Customer registration success:", customerRegisterResult); // true or false (if email already exists)

// Testing 
// ts-node src/User/Testing.ts