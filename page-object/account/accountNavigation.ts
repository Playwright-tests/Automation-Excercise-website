import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class AccountNavigation extends BasePage {

    readonly contentsSelector: string;

    constructor(page: Page) {

        super(page);

        this.contentsSelector = '.woocommerce-MyAccount-navigation'
    }

    async clickLink(linkText: string) {

        await (await this.getPage()).getByRole('link', {name: linkText, exact: true}).click();
    }

    getContentsSelector() {

        return this.contentsSelector;
    }
}