import { ElementHandle, Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";
import { QuantityField } from "../quantity-field/quantityField.spec";

export class Row extends BasePage {

    private removeButton: Locator;
    private productName: Locator;
    private price: Locator;
    private total: Locator;

    constructor(page: Page) {

        super(page);

        this.removeButton = page.locator('.product-remove .remove');
        this.productName = page.locator('.product-name a');
        this.price = page.locator('.product-price .woocommerce-Price-amount.amount');
        this.total = page.locator('.product-subtotal .woocommerce-Price-amount.amount');
    }

    async getCount() {

        return await (await this.getPage()).locator('.woocommerce-cart-form__cart-item.cart_item').count();
    }

    async clickRemoveButton() {

        await this.removeButton.click();
    }

    async getProductName(nth: number) {

        return this.productName.nth(nth).textContent();
    }

    async getPrice(nth: number) {

        return this.price.nth(nth).textContent();
    }

    async getQuantityField(nth: number) {

        return QuantityField.createWithNth(await this.getPage(), nth);
    }

    async getTotal(nth: number) {

        return this.total.nth(nth).textContent();
    }
}