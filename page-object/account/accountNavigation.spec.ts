import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";

export class AccountNavigation extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    async clickLink(linkText: string) {

        await (await this.getPage()).getByRole('link', {name: linkText, exact: true}).click();
    }
}