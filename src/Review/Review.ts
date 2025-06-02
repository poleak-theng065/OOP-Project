import { Product } from "../Product/Products";
import { User } from "../User/TypeOfUser/User";

export class Review {
    private product: Product ;
    private user: User ;
    private rating: number;
    private comment: string;

    constructor(user: User, product: Product, rating: number, comment: string) {
        this.user = user;
        this.product = product;
        this.rating = rating;
        this.comment = comment;
    }

    editReview(rate: number, comment: string) {
        this.rating = rate;
        this.comment = comment;
    }

}