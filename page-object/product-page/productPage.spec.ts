import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";
import { QuantityField } from "../quantity-field/quantityField.spec";

export class ProductPage extends BasePage {

    readonly quantityField: QuantityField;
    readonly addToCartButton: Locator;
    readonly message: Locator;
    readonly producTitle: Locator;

    constructor(page: Page) {

        super(page);

        this.addToCartButton = page.getByRole('button', {name: 'Add to cart'});
        this.quantityField = QuantityField.createWithoutNth(page);
        this.message = page.locator('.woocommerce-message');
        this.producTitle = page.locator('.product_title ');
    }

    async getProductTitle() {

        return await this.producTitle.textContent();
    }

    async clickAddToCartButton() {

        await this.addToCartButton.click();
    }

    getQuantityField() {

        return this.quantityField;
    }

    getMessageLocator() {

        return this.message;
    }

    async getMessage() {

        return await this.message.textContent();
    }
}