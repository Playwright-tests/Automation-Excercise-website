export class Product {

    private static productName: string | null;
    private static productPrice: string | null;


    static async init(name: string | null, price: string | null) {

        this.productName = name;
        this.productPrice = price;
    }

    static getName() {

        return this.productName;
    }

    static getPrice() {

        return this.productPrice;
    }
}