import { Seller } from "../../User/Seller/Seller";
import { Reviews } from "../Review/Review";


export class Products {
    private name: string;
    private category: string[]; // Changed to string[] to avoid circular dependency
    private numberInStock: number;
    private discount: number;
    private price: number;
    private seller: Seller[];
    private reviews: Reviews[];

    constructor(
        name: string,
        category: string[],
        numberInStock: number,
        discount: number,
        price: number,
        seller: Seller[],
        reviews: Reviews[] = []
    ) {
        this.name = name;
        this.category = category;
        this.numberInStock = numberInStock;
        this.discount = discount;
        this.price = price;
        this.seller = seller;
        this.reviews = reviews;
    }

    // Get average rating for the product
    getAverageRating(): number {
        if (this.reviews.length === 0) return 0;
        const totalRating = this.reviews.reduce((sum, review) => sum + review.getGlobalRating(), 0);
        return totalRating / this.reviews.length;
    }

    // Getters for basic properties
    getName(): string {
        return this.name;
    }

    getCategories(): string[] {
        return this.category;
    }

    getNumberInStock(): number {
        return this.numberInStock;
    }

    getDiscount(): number {
        return this.discount;
    }

    getPrice(): number {
        return this.price;
    }

    getSellers(): Seller[] {
        return this.seller;
    }

    getReviews(): Reviews[] {
        return this.reviews;
    }

    // Add a review to the product
    addReview(review: Reviews): void {
        this.reviews.push(review);
    }
}