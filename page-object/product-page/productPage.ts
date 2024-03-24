import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class ProductPage extends BasePage {

    private readonly PRODUCT_INFORMATION_SELECTOR = '.product-information';
    private readonly PRODUCT_NAME: Locator;
    private readonly PRODUCT_PRICE: Locator;
    private readonly QUANTITY_FIELD: Locator;
    private readonly ADD_TO_CART_BUTTON: Locator;

    constructor(page: Page) {

        super(page);

        this.PRODUCT_NAME = page.locator(this.PRODUCT_INFORMATION_SELECTOR).locator('h2');
        this.PRODUCT_PRICE = page.locator(this.PRODUCT_INFORMATION_SELECTOR).locator('span').nth(1);
        this.QUANTITY_FIELD = page.locator(this.PRODUCT_INFORMATION_SELECTOR).locator('#quantity');
        this.ADD_TO_CART_BUTTON = page.getByRole('button', {name: ' Add to cart'});
    }

    async setQuantity(quantity: string) {

        await this.QUANTITY_FIELD.fill(quantity, {force: true});
    }

    async clickAddToCartButton() {

        await this.ADD_TO_CART_BUTTON.click();
    }

    async getProductName() {

        return await this.PRODUCT_NAME.textContent();
    }

    async getProductPrice() {

        return await this.PRODUCT_PRICE.textContent();
    }

    async getQuantity() {

        return await this.QUANTITY_FIELD.inputValue();
    }

    getQuantityField() {

        return this.QUANTITY_FIELD;
    }
}