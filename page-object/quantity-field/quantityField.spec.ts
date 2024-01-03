import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";

export class QuantityField extends BasePage {

    readonly field: Locator;

    constructor(page: Page, field: Locator) {

        super(page);
        
        this.field = field;
    }

    static createWithoutNth(page: Page) {

        return new QuantityField(page, page.getByLabel('Quantity'));
    }

    static createWithNth(page: Page, nth: number) {

        return new QuantityField(page, page.getByLabel('Quantity').nth(nth));
    }
    
    async setQuantity(quantity: string) {

        await this.field.clear();
        await this.field.fill(quantity);
    }

    async getQuantity() {

        return await this.field.inputValue();
    }

    getFieldLocator() {

        return this.field;
    }
}