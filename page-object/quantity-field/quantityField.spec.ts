import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";

export class QuantityField extends BasePage {

    readonly field: Locator;

    constructor(page: Page) {

        super(page);

        this.field = page.getByLabel('Quantity');
    }

    async setQuantity(quantity: string) {

        await this.field.clear();
        await this.field.fill(quantity);
    }

    async getQuantity() {

        return await this.field.inputValue();
    }
}