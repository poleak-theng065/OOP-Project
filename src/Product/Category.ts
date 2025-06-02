import { Products } from "./Products";

export class Category {
    private categoryID: string;
    private categoryName: string;
    private prducts: Products[];

    constructor(categoryID: string, categoryName: string, products: Products[]) {
        this.categoryID = categoryID;
        this.categoryName = categoryName;
        this.prducts = products;
    }

    public getProducts(): Products[] {
        return this.prducts;
    }
    
}