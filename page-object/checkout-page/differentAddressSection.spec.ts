import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";

export class DifferentAddressSection extends BasePage {

    readonly checkbox: Locator;
    readonly inputText: Locator; 
    readonly shippingAddressFormWrapper: Locator;

    constructor(page: Page) {

        super(page);

        this.checkbox = page.locator('#ship-to-different-address-checkbox');
        this.inputText = page.locator('#order_comments');
        this.shippingAddressFormWrapper = page.locator('.woocommerce-shipping-fields__field-wrapper');
    }

    async clickCheckbox() {

        await this.checkbox.click();
    }

    async fillInputText(text: string) {

        await this.inputText.fill(text);
    }

    async getInputTextContent() {

        return await this.inputText.inputValue();
    }

    getInputTextLocator() {

        return this.inputText;
    }

    getShippingAddressFormWrapper() {

        return this.shippingAddressFormWrapper;
    }
}