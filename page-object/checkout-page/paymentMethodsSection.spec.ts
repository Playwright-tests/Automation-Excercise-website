import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";

export class PaymentMethodsSection extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    async clickRadioButton(radioButtonName: string) {

        await (await this.getPage()).getByRole('radio', {name: radioButtonName}).click();
    }
}