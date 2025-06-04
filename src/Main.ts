// main.ts - Test File for E-Commerce System

import { Address } from "./AbstractPerson/Person";
import { OrderItems } from "./OrderItem/OrderItem";
import { Category } from "./Product/Category";
import { Products } from "./Product/Products";
import { Reviews } from "./Review/Review";
import { Seller } from "./Seller/Seller";
import { Role } from "./User/Enum/UserType";
import { Customer } from "./User/TypeOfUser/Customer/Customer";

// Helper function to create test data
function createTestData() {
  // Create addresses
  const customerAddress = new Address("123 Main St", "New York", "USA");
  const sellerAddress = new Address("456 Market St", "San Francisco", "USA");

  // Create sellers
  // In your createTestData() function, update the seller creation:
  const seller1 = new Seller(
    "seller-12",
    "Poleak",
    "Theng",
    "leakseller012@gmail.com",
    "sellerpassword123",
    [Role.SELLER],
    sellerAddress
  );

  // Create products
  const laptop = new Products(
    "Laptop",
    ["Electronics", "Computers"],
    50,
    10, // 10% discount
    999.99,
    [seller1],
    []
  );

  const phone = new Products(
    "Smartphone",
    ["Electronics", "Mobile"],
    100,
    5, // 5% discount
    699.99,
    [seller1],
    []
  );

  // Create categories
  const electronicsCategory = new Category("Electronics", [laptop, phone]);
  const computersCategory = new Category("Computers", [laptop]);

  // Create customers
  const customer1 = new Customer(
    "cust-1",
    "Alice",
    "Smith",
    "alice@example.com",
    "password123",
    customerAddress,
    "alice_smith",
    Role.CUSTOMER
  );

  return {
    customer1,
    seller1,
    laptop,
    phone,
    electronicsCategory,
    computersCategory,
    customerAddress,
    sellerAddress,
  };
}

// Main test function
function testECommerceSystem() {
  console.log("=== Testing E-Commerce System ===");

  // Create test data
  const {
    customer1,
    seller1,
    laptop,
    phone,
    electronicsCategory,
    computersCategory,
    customerAddress,
    sellerAddress,
  } = createTestData();

  // Test Person class
  console.log("\n=== Testing Person Class ===");
  console.log(
    "Customer Full Name:",
    customer1.getFirstName(),
    customer1.getLastName()
  );
  console.log("Customer Email:", customer1.getEmail());
  console.log(
    "Password Change (wrong old password):",
    customer1.changePassword("wrong", "newpass")
  ); // false
  console.log(
    "Password Change (correct password):",
    customer1.changePassword("password123", "newpassword")
  ); // true

  // Test Customer class
  console.log("\n=== Testing Customer Class ===");
  console.log("Username:", customer1.getUsername());
  console.log("Role:", customer1.getRole());
  customer1.buyProduct(); // Should log buying capability

  // Test Address class
  console.log("\n=== Testing Address Class ===");
  console.log("Customer Address:", customerAddress);

  // Test Product class
  console.log("\n=== Testing Product Class ===");
  console.log("Product Name:", laptop.getName());
  console.log("Product Categories:", laptop.getCategories());
  console.log("Stock Quantity:", laptop.getNumberInStock());
  console.log("Discount:", laptop.getDiscount());
  console.log("Price:", laptop.getPrice());
  console.log(
    "Sellers:",
    laptop.getSellers().map((s) => s.getUsername())
  );
  console.log("Initial Average Rating:", laptop.getAverageRating());

  // Test Review class
  console.log("\n=== Testing Review Class ===");
  const review1 = new Reviews(customer1, laptop, 4, "Great laptop!");
  console.log("Review Info:", review1.getReview());
  console.log("Rating:", review1.getGlobalRating());

  // Add review to product
  laptop.addReview(review1);
  console.log("Updated Average Rating:", laptop.getAverageRating());

  // Test adding review after delivery (placeholder implementation)
  try {
    review1.addReviewAfterDelivery(5, "Excellent after using it for a week!");
    console.log("Updated Review Info:", review1.getReview());
    console.log("New Average Rating:", laptop.getAverageRating());
  } catch (error) {
    if (error instanceof Error) {
      console.error("Review error:", error.message);
    } else {
      console.error("Review error:", error);
    }
  }

  // Test Category class
  console.log("\n=== Testing Category Class ===");
  console.log("Electronics Category:", electronicsCategory.getCategoryies());
  console.log(
    "Products in Electronics:",
    electronicsCategory.getProductsInCategory().map((p) => p.getName())
  );

  // Add product to category
  const tablet = new Products(
    "Tablet",
    ["Electronics"],
    30,
    8,
    299.99,
    [seller1],
    []
  );
  electronicsCategory.addProduct(tablet);
  console.log(
    "After adding Tablet:",
    electronicsCategory.getProductsInCategory().map((p) => p.getName())
  );

  // Test OrderItems class
  console.log("\n=== Testing OrderItems Class ===");
  const orderItem1 = new OrderItems(laptop, 1, "order-123");
  console.log("Order Item Product:", orderItem1.getproduct().getName());

  // Test Seller class (if exists)
  if (seller1) {
    console.log("\n=== Testing Seller Class ===");
    console.log("Seller Username:", seller1.getUsername());
    console.log("Seller Role:", seller1.getRole());
    // Add more seller tests if you have more methods
  }

  console.log("\n=== All Tests Completed ===");
}

// Run the tests
testECommerceSystem();
