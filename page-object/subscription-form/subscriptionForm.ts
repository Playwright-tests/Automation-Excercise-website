import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class SubscriptionForm extends BasePage {

    private readonly FIELD: Locator;
    private readonly BUTTON: Locator;
    private readonly SUCCESS_SUBSCRIBE_SELECTOR = '#success-subscribe';

    constructor(page: Page) {

        super(page);

        this.FIELD = page.locator('#susbscribe_email');
        this.BUTTON = page.locator('#subscribe');
    }

    async setEmail(email: string) {

        await this.FIELD.fill(email);
    }

    async clickButton() {

        await this.BUTTON.click();
    }

    async getEmail() {

        return await this.FIELD.inputValue();
    }

    getField() {

        return this.FIELD;
    }

    getSuccessSubscribeSelector() {

        return this.SUCCESS_SUBSCRIBE_SELECTOR;
    }
}