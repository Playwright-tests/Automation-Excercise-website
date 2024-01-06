import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class AddressFormNavigation extends BasePage {

    readonly billingAddressFormLink: Locator;
    readonly shippingAddressFormLink: Locator;

    constructor(page: Page) {
        
        super(page);

        this.billingAddressFormLink = page.locator('header').filter({hasText: 'Billing address'}).getByRole('link');
        this.shippingAddressFormLink = page.locator('header').filter({hasText: 'Shipping address'}).getByRole('link');
    }

    async clickBillingAddressFormEditLink() {

        await this.billingAddressFormLink.click();
    }

    async clickShippingAddressFormEditLink() {

        await this.shippingAddressFormLink.click();
    }
}