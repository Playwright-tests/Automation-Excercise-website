import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";

export class LoginForm extends BasePage {

    readonly form: Locator;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.form = page.locator('.woocommerce-form.woocommerce-form-login.login');
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.loginButton = page.getByRole('button', {name: 'login'});
        this.errorMessage = page.locator('.woocommerce-error');
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

    async getError() {

        await this.errorMessage.textContent();
    }

    getFormLocator() {

        return this.form;
    }
}