import { ElementHandle, Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";
import { QuantityField } from "../quantity-field/quantityField.spec";

export class Row extends BasePage {

    private removeButton: Locator;
    private productName: Locator;
    private price: Locator;
    private total: Locator;

    private nth: number;

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

    setNth(nth: number) {

        this.nth = nth;
    }

    async clickRemoveButton() {

        await this.removeButton.nth(this.nth).click();
    }

    async getProductName() {

        return this.productName.nth(this.nth).textContent();
    }

    async getPrice() {

        return this.price.nth(this.nth).textContent();
    }

    async getQuantityField() {

        return QuantityField.createWithNth(await this.getPage(), this.nth);
    }

    async getTotal() {

        return this.total.nth(this.nth).textContent();
    }
}