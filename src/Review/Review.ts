import { Products } from "../Product/Products";
import { Customer } from "../User/TypeOfUser/Customer/Customer";

export class Reviews {
    private customer: Customer;
    private product: Products;
    private rating: number;
    private comment: string;
    private createDate: Date;

    constructor(
        customer: Customer,
        product: Products,
        rating: number,
        comment: string,
        createDate: Date = new Date()
    ) {
        this.customer = customer;
        this.product = product;
        this.rating = rating;
        this.comment = comment;
        this.createDate = createDate;
    }

    getReview(): string {
        return `Review for ${this.product.getName()} by ${this.customer.getUsername()}: 
                Rating: ${this.rating}, Comment: ${this.comment}, Date: ${this.createDate.toLocaleDateString()}`;
    }

    getGlobalRating(): number {
        return this.rating;
    }

    // Placeholder: Check if product was delivered (requires order system integration)
    private canReviewAfterDelivery(): boolean {
        // In a real system, check order status for this product and customer
        // Assume a function `isProductDelivered(orderId, product, customer)` exists
        console.warn("Delivery check not implemented; assuming delivered for testing.");
        return true; // Placeholder
    }

    // User Story 6: As a customer, I want to review a product after delivery
    addReviewAfterDelivery(rating: number, comment: string): void {
        if (!this.canReviewAfterDelivery()) {
            throw new Error("Cannot review: Product has not been delivered yet.");
        }
        this.rating = rating;
        this.comment = comment;
        this.createDate = new Date();
        this.product.addReview(this); // Add review to the product's reviews
    }
}