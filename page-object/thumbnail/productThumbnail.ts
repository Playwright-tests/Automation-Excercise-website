import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { Thumbnail } from "./thumbnail";

export class ProductThumbnail extends BasePage implements Thumbnail {

    private parent: Locator;
    private link: Locator;
    private price: Locator;
    private addToCartButton: Locator;
    readonly viewCartButtonSelector: string;

    constructor(page: Page) {

        super(page);

        this.viewCartButtonSelector = ".added_to_cart.wc-forward"
    }

    setParent(p: Locator) {

        this.parent = p;
    }

    setLink(link: Locator) {
        
        this.link = link;
    }

    setPrice(price: Locator) {

        this.price = price;
    }

    setAddToCartButton(button: Locator) {

        this.addToCartButton = button;
    }

    async getLinkText() {

        return await this.link.textContent();
    }

    async getPrice() {

        return await this.price.textContent();
    }

    async clickLink() {
        
        await this.link.click();
    }

    async clickAddToCartButton() {

        await this.addToCartButton.click();
    }

    getViewCartButtonSelector() {

        return this.viewCartButtonSelector;
    }
}