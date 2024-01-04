import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";
import { DifferentAddressSection } from "./differentAddressSection.spec";
import { PaymentMethodsSection } from "./paymentMethodsSection.spec";

export class CheckoutPage extends BasePage {

    private differentAddressSection: DifferentAddressSection;
    private paymentMethodsScetion: PaymentMethodsSection;

    constructor(page: Page) {

        super(page);

        this.differentAddressSection = new DifferentAddressSection(page);
        this.paymentMethodsScetion = new PaymentMethodsSection(page);
    }

    async clickPlaceOrderButton(buttonName: string) {

        await (await this.getPage()).getByRole('button', {name: buttonName}).click();
    }

    getDifferentAddressSection() {

        return this.differentAddressSection;
    }

    getPaymentMethodsSection() {

        return this.paymentMethodsScetion;
    }
}