import { Person } from "../../../AbstractPerson/Person";
import { Role } from "../../Enum/UserType";
import { Address } from "../../../AbstractPerson/Person";
import { Shipment } from "../../../Shipment/Shipment";

// DeliveryManager class
export class DeliveryManager extends Person {
  private username: string;
  private role: Role;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: Address,
    username: string,
    role: Role = Role.DELIVERY_MANAGER
  ) {
    super(id, firstName, lastName, email, password, address);
    this.username = username;
    this.role = role;
  }

  public getUsername(): string {
    return this.username;
  }

  public getRole(): Role {
    return this.role;
  }

  public buyProduct(): void {
    console.log(`${this.username} can buy products.`);
  }

  public checkShipmentDetails(shipment: Shipment): void {
    console.log(`Checking shipment #${shipment.getTrackingNumber()}`);
    console.log(`Delivery type: ${shipment.getDeliveryOption().getDeliveryType()}`);
    console.log(`Destination: ${shipment.getDestination().fullAddress()}`);
  }

  public trackDelivery(shipment: Shipment): string {
    return `Shipment #${shipment.getTrackingNumber()} is currently being handled by ${this.username}.`;
  }

  public toString(): string {
    return `Delivery Manager: ${this.username}, Role: ${this.role}, Name: ${this.getFullName()}`;
  }
}
