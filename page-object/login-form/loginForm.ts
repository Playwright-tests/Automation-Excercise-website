import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class LoginForm extends BasePage {

    readonly formSelector: string;
    readonly form: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly errorMessageSelector: string;

    constructor(page: Page) {

        super(page);

        this.errorMessageSelector = '.woocommerce-error';
        this.formSelector = '.woocommerce-form.woocommerce-form-login.login';
        this.form = page.locator(this.formSelector);
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.loginButton = page.getByRole('button', {name: 'login'});
        this.errorMessage = page.locator(this.errorMessageSelector);
    }

    async clickPasswordField() {

        await this.passwordField.click();
    }

    async setUsername(username: string) {

        await this.usernameField.fill(username);
    }

    async setPassword(password: string) {

        await this.passwordField.fill(password);
    }

    async clickLoginButton() {

        await this.loginButton.click();
    }

    async getUsernameFieldContent() {

        return await this.usernameField.inputValue();
    }

    async getPasswordFieldContent() {

        return await this.passwordField.inputValue();
    }

    getErrorMessageSelector() {

        return this.errorMessageSelector;
    }

    async getErrorMessageContent() {

        await this.errorMessage.textContent();
    }

    getFormSelector() {

        return this.formSelector;
    }

    getFormLocator() {

        return this.form;
    }
}