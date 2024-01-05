import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";
import { DifferentAddressSection } from "./differentAddressSection.spec";
import { PaymentMethodsSection } from "./paymentMethodsSection.spec";
import { LoginForm } from "../login-form/loginForm.spec";

export class CheckoutPage extends BasePage {

    readonly loginLink: Locator;
    readonly couponCodeLink: Locator;
    readonly errorMessage: Locator;

    readonly loginForm: LoginForm;

    private differentAddressSection: DifferentAddressSection;
    private paymentMethodsScetion: PaymentMethodsSection;

    constructor(page: Page) {

        super(page);

        this.loginLink = page.getByRole('link', {name: 'Click here to login'});
        this.couponCodeLink = page.getByRole('link', {name: 'Click here to enter your code'});
        this.errorMessage = page.locator('.woocommerce-error');

        this.differentAddressSection = new DifferentAddressSection(page);
        this.paymentMethodsScetion = new PaymentMethodsSection(page);

        this.loginForm = new LoginForm(page);
    }

    async clickLoginLink() {

        await this.loginLink.click();
    }

    async clickCouponCodeLink() {

        await this.couponCodeLink.click();
    }

    async clickPlaceOrderButton(buttonName: string) {

        await (await this.getPage()).getByRole('button', {name: buttonName}).click();
    }

    getErrorMessageLocator() {

        return this.errorMessage;
    }

    async getErrorMessageContent() {

        return await this.errorMessage.textContent();
    }

    getDifferentAddressSection() {

        return this.differentAddressSection;
    }

    getPaymentMethodsSection() {

        return this.paymentMethodsScetion;
    }

    getLoginForm() {

        return this.loginForm;
    }
}