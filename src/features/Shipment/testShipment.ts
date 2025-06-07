import { Role } from "../../core/enums/UserType";
import { ConcreteAddress } from "../../User/Customer/ConcreteAddress";
import { DeliveryManager } from "../../User/DeliveryManager/DeliveryManager";
import { DeliveryOption } from "./DeliveryOption/DeliveryOption";
import { DeliveryType } from "./DeliveryOption/enum/DeliveryType";
import { Shipment } from "./Shipment";





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