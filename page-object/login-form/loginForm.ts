import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class LoginForm extends BasePage {

    private readonly LOGIN_FORM_SELECTOR: string = '.login-form';
    private readonly EMAIL_FIELD: Locator;
    private readonly PASSWORD_FIELD: Locator;
    private readonly BUTTON: Locator;
    private readonly ERROR_MESSAGE: Locator;

    constructor(page: Page) {

        super(page);

        this.EMAIL_FIELD = page.locator(this.LOGIN_FORM_SELECTOR).getByPlaceholder('Email Address');
        this.PASSWORD_FIELD = page.locator(this.LOGIN_FORM_SELECTOR).getByPlaceholder('Password');
        this.BUTTON = page.locator(this.LOGIN_FORM_SELECTOR).getByRole('button', {name: 'Login'});
        this.ERROR_MESSAGE = page.locator(this.LOGIN_FORM_SELECTOR).locator('p');
    }

    async setEmail(email: string) {

        await this.EMAIL_FIELD.fill(email);
    }

    async setPassword(password: string) {

        await this.PASSWORD_FIELD.fill(password);
    }

    async clickButton() {

        await this.BUTTON.click();
    }

    getEmailField() {

        return this.EMAIL_FIELD;
    }

    getPasswordField() {

        return this.PASSWORD_FIELD;
    }

    getErrorMessageLocator() {

        return this.ERROR_MESSAGE;
    }
}