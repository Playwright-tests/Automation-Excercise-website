import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class QuantityField extends BasePage {

    readonly inputFieldSelector: string;
    readonly parent: Locator;

    constructor(page: Page, parent: Locator) {

        super(page);
        
        this.inputFieldSelector = 'input[type="number"]';
        this.parent = parent;
    }

    static createWithoutNth(page: Page) {

        return new QuantityField(page, page.getByLabel('Quantity'));
    }

    static createWithNth(page: Page, nth: number) {

        return new QuantityField(page, page.getByLabel('Quantity').nth(nth));
    }
    
    async setQuantity(quantity: string) {

        let field = this.parent.locator(this.inputFieldSelector);
        await field.clear();
        await field.fill(quantity);
    }

    async getQuantity() {

        return await this.parent.locator(this.inputFieldSelector).inputValue();
    }

    getFieldLocator() {

        return this.parent.locator(this.inputFieldSelector);
    }
}