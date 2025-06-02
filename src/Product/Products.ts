export class Products {
    private productsID : string;
    private productName : string;
    private productPrice : number;
    private productStock : number;
    private productDiscount : number;

    constructor(productsID: string, productName: string, productPrice: number, productStock: number, productDiscount: number) {
        this.productsID = productsID;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productStock = productStock;
        this.productDiscount = productDiscount;
    }
}