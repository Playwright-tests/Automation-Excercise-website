import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class CheckoutModalDialog extends BasePage {

    private readonly SELECTOR = '#checkoutModal';
    private readonly REGISTER_LINK: Locator;
    private readonly CONTINUE_BUTTON: Locator;

    constructor(page: Page) {

        super(page);

        this.REGISTER_LINK = page.getByRole('link', {name: 'Register / Login'});
        this.CONTINUE_BUTTON = page.getByRole('button', {name: 'Continue On Cart'});
    }

    async clickRegisterLink() {

        await this.REGISTER_LINK.click();
    }

    async clickContinueButton() {

        this.CONTINUE_BUTTON.click();
    }

    getSelector() {

        return this.SELECTOR;
    }
}