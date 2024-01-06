import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { Thumbnail } from "./thumbnail";

export class ProductThumbnail extends BasePage implements Thumbnail {

    private link: Locator;
    private price: Locator;
    private addToCartButton: Locator;

    constructor(page: Page) {

        super(page);
    }

    setLink(link: Locator): void {
        
        this.link = link;
    }

    setPrice(price: Locator) : void {

        this.price = price;
    }

    setAddToCartButton(button: Locator) : void {

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
}