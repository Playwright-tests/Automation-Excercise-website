import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/BasePage.spec";

export class DropdownList extends BasePage {

    readonly arrow: Locator;
    readonly field: Locator;

    constructor(page: Page) {

        super(page);

        this.arrow = page.locator('.select2-selection__arrow');
        this.field = page.getByRole('combobox').nth(1);
    }

    async clickArrow() {

        await this.arrow.click();
    }

    async setCountry(country: string) {

        await this.field.fill(country)
    }

    async pressEnter() {

        await this.field.press('Enter');
    }
}