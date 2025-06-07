// testEcommerceSystem.ts
import { Customer } from "./User/Customer/Customer";
import { Admin } from "./User/Admin/Admin";
import { ConcreteAddress } from "./User/Customer/ConcreteAddress";
import { Role } from "./core/enums/UserType";
import { DeliveryManager } from "./User/DeliveryManager/DeliveryManager";
import { PaymentStatus } from "./core/enums/paymentStatus";
import { Invoice } from "./features/Invoice/invice";
import { Order } from "./features/Order/Order";
import { OrderItem } from "./features/OrderItem/OrderItem";
import { ABA } from "./features/PaymentGetway/Getway/ABA";
import { Payment } from "./features/PaymentGetway/Payment";
import { PaymentService } from "./features/PaymentGetway/service/PaymentService";
import { Category } from "./features/Product/Category";
import { Products } from "./features/Product/Products";
import { Reviews } from "./features/Review/Review";
import { DeliveryOption } from "./features/Shipment/DeliveryOption/DeliveryOption";
import { DeliveryType } from "./features/Shipment/DeliveryOption/enum/DeliveryType";
import { Shipment } from "./features/Shipment/Shipment";
import { Seller } from "./User/Seller/Seller";

// Create mock seller for OrderItems
const sellerAddress = new ConcreteAddress(
  "789 Seller St",
  "Phnom Penh",
  "Cambodia"
);
const mockSeller = new Seller(
   "seller-1",
   "Mock",
   "Seven",
   "mock2099@gmail.com",
   "mock123",
   "mockSeller",
   sellerAddress,
    [Role.SELLER]
);

// 1. Test User System
console.log("=== Testing User System ===");

const customerAddress = new ConcreteAddress(
  "123 Main St",
  "Phnom Penh",
  "Cambodia"
);
const customer = new Customer(
  "cust-1",
  "John",
  "Doe",
  "john@example.com",
  "secure123",
  customerAddress,
  "johndoe",
  Role.CUSTOMER
);

console.log("Customer created:", customer.getUsername());
console.log("Customer role:", customer.getRole());
console.log("Customer address:", customerAddress.fullAddress());

// 2. Test Product System
console.log("\n=== Testing Product System ===");

const product1 = new Products(
  "iPhone 13",
  ["Electronics", "Mobile"],
  100,
  10,
  999,
  [mockSeller], // sellers
  [] // reviews
);

const product2 = new Products(
  "MacBook Pro",
  ["Electronics", "Laptop"],
  50,
  5,
  1999,
  [mockSeller],
  []
);

console.log("Product 1:", product1.getName());
console.log("Product 2 price:", product2.getPrice());

// 3. Test Order System
console.log("\n=== Testing Order System ===");

// Create a real Order first
const order = new Order(customer);

const orderItem1 = new OrderItem(order, product1, 1, 999, mockSeller);

const orderItem2 = new OrderItem(order, product2, 2, 1999, mockSeller);

order.createOrderItems([orderItem1, orderItem2]);

console.log("Order total:", order.getTotalAmount());
console.log("Order items:", order.getItems().length);

// 4. Test Payment System
console.log("\n=== Testing Payment System ===");

const payment = new Payment(
  "pay-1",
  order.getTotalAmount(),
  PaymentStatus.PENDING
);

const abaGateway = new ABA();
const paymentService = new PaymentService(abaGateway);

(async () => {
  try {
    const completedPayment = await paymentService.checkout(payment);
    console.log("Payment status:", completedPayment.status);
    console.log("Transaction ID:", completedPayment.transactionId);

    // 5. Test Invoice Generation
    console.log("\n=== Testing Invoice System ===");
    // Use the existing paymentService instance for the invoice
    const invoice = new Invoice(order, paymentService);
    invoice.generate();
    invoice.sendToUser();

    // 6. Test Delivery System
    console.log("\n=== Testing Delivery System ===");
    const managerAddress = new ConcreteAddress(
      "456 Delivery St",
      "Phnom Penh",
      "Cambodia"
    );
    const deliveryManager = new DeliveryManager(
      "dm-1",
      "Delivery",
      "Manager",
      "dm@example.com",
      "dm123",
      managerAddress,
      "deliveryguy",
      Role.DELIVERY_MANAGER
    );

    const deliveryOption = new DeliveryOption(DeliveryType.EXPRESS, 15);
    const shipment = new Shipment(
      deliveryManager,
      order.getItems(),
      deliveryOption,
      "TRACK123",
      customerAddress
    );

    console.log("Tracking shipment:", shipment.track());
    console.log("Delivery status:", shipment.getDeliveryStatus());

    // 7. Test Review System
    console.log("\n=== Testing Review System ===");
    const review = new Reviews(
      customer,
      product1,
      5,
      "Great phone!",
      new Date()
    );

    product1.addReview(review);
    console.log("Product 1 average rating:", product1.getAverageRating());
    review.showReview();

    // 8. Test Category System
    console.log("\n=== Testing Category System ===");
    const electronicsCategory = new Category("Electronics", [
      product1,
      product2,
    ]);
    console.log(
      "Products in Electronics:",
      electronicsCategory.getProductsInCategory().length
    );
  } catch (error) {
    console.error("System test failed:", error);
  }
})();
