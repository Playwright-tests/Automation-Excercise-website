import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/BasePage.spec";

export class DropdownList extends BasePage {

    readonly arrow: Locator;

    constructor(page: Page) {

        super(page);

        this.arrow = page.locator('.select2-selection__arrow');
    }

    async clickArrow() {

        await this.arrow.click();
    }

    async setCountry(country: string) {

        await (await this.getPage()).getByRole('option', {name : country}).click();
    }
}