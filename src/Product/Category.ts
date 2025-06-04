import { Products } from "./Products";

export class Category {
    private name: string;
    private proucts: Products[];

    constructor(name: string, products: Products[] = []) {
        this.name = name;
        this.proucts = products;
    }

    getProductsInCategory(): Products[] {
        return this.proucts;
    }

    addProduct(product: Products): void {
        this.proucts.push(product);
    }

    getCategoryies(): string {
        return this.name;
    }
}