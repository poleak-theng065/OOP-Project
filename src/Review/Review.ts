import { Product } from "../Product/Products";
import { Customer } from "../User/TypeOfUser/Customer/Customer";
import { User } from "../User/TypeOfUser/User";

export class Review {
    private product: Product ;
    private customer: Customer ;
    private rating: number;
    private comment: string;

    constructor(customer: Customer, product: Product, rating: number, comment: string) {
        this.customer = customer;
        this.product = product;
        this.rating = rating;
        this.comment = comment;
    }

    getRating(): void {
        console.log(`Product rating: ${this.rating}`);
    }

    getComment(): void {
        console.log(`Product commenting: ${this.comment}`);
    }

    editReview(rate: number, comment: string) {
        this.rating = rate;
        this.comment = comment;
    }

    showReview() {
        console.log("📦📝 Product... Reviewing");
        console.log("⭐ Rating:", this.rating);
        console.log("💬 Comment:", this.comment);
    }

}

// let address1 = new ConcreteAddress("a", "b", "c");
// let person1 = new Customer("p1", "hi", "hak", "gmail", "1", address1, "hihi", Role.CUSTOMER);
// let product1 = new Product();
// let review1 = new Review(person1, product1, 3, "Medium");
// review1.showReview();
// review1.editReview(5, "Very good");
// review1.getRating();
// review1.getComment();
// review1.showReview();