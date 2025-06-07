import { DeliveryManager } from "../User/TypeOfUser/DeliveryManager/DeliveryManager";
import { Shipment } from "./Shipment";
import { DeliveryOption } from "./DeliveryOption/DeliveryOption";
import { DeliveryType } from "./DeliveryOption/enum/DeliveryType";
import { Role } from "../User/Enum/UserType";
import { Payment } from "../PaymentGetway/Payment";
import { ConcreteAddress } from "../User/TypeOfUser/Customer/ConcreteAddress";
import { Address } from "../AbstractPerson/Person";





// Delivery Option
const option = new DeliveryOption(DeliveryType.EXPRESS, 5.99);

// Delivery Manager
const manager = new DeliveryManager(
  "1", "Chandy", "Neat", "chandy@example.com", "123456",
  new ConcreteAddress("Admin Blvd", "Siem Reap", "13000"), "chandyDelivery", Role.DELIVERY_MANAGER
);

// Shipment
const shipment = new Shipment(
  manager,
  [],
  option,
  "TRACK123456",
   new ConcreteAddress("Admin Blvd", "Siem Reap", "13000")
);

// === Perform Tests ===
console.log(manager.toString());

manager.checkShipmentDetails(shipment);

console.log("Tracking:", shipment.track());

console.log("Delivery Status:", shipment.getDeliveryStatus());


// ts-node src/Shipment/testShipment.ts