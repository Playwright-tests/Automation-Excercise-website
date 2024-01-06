import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";

export class CouponForm extends BasePage {

    readonly formSelector: string;
    readonly form: Locator;
    readonly couponCodeField: Locator;
    readonly applyCouponButton: Locator;

    constructor(page: Page) {

        super(page);

        this.formSelector = '.checkout_coupon';
        this.form = page.locator(this.formSelector);
        this.couponCodeField = page.getByPlaceholder('Coupon code');
        this.applyCouponButton = page.getByRole('button', {name: 'Apply coupon'});
    }

    async setCouponCode(couponCode: string) {

        await this.couponCodeField.fill(couponCode);
    }

    async clickApplyCouponButton() {

        await this.applyCouponButton.click();
    }

    getFormSelector() {

        return this.formSelector;
    }

    getFormLocator() {

        return this.form;
    }
}