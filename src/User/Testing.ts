import { Authenication } from "./Authenication/Authenication";
import { User } from "./TypeOfUser/User";
import { Admin } from "./TypeOfUser/Admin";


let chandy = new Admin("admin","admin123");
console.log(chandy);
let poleak = new User("poleak","123456");
const auth = new Authenication();

function testLogin(username: string, password: string) {
  const user = auth.login(username, password);

  if (user) {
    console.log(`✅ Logged in as ${user.username} (${user.role})`);
    if (auth.isAdmin(user)) {
      chandy.manageSystem();
 
      console.log("🔐 Admin access granted.");
    } else {
      poleak.buyProduct();
      console.log("👤 Regular user access.");
    }
  } else {
    console.log("❌ Invalid username or password.");
  }
}

testLogin(poleak.username, poleak.getPassword());     // Regular user
// // testLogin("admin", "admin123");   // Admin user
// testLogin("john", "wrong");       // Invalid


// Run Testing
// ts-node ./src/User/Testing.ts