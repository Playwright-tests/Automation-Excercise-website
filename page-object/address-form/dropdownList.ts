import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class DropdownList extends BasePage {

    readonly parent: Locator;
    readonly arrow: Locator;
    readonly field: Locator;
    readonly alert: Locator;
    readonly alertSelector: string;


    constructor(page: Page) {

        super(page);

        this.alertSelector = 'li[role="alert"]';
        this.parent = page.locator('#select2-billing_country-container');
        this.arrow = page.locator('.select2-selection__arrow');
        this.field = page.getByRole('combobox').nth(1);
        this.alert = page.locator(this.alertSelector);
    }

    async clickParent() {

        await this.parent.click();
    }

    async clickArrow() {

        await this.arrow.click();
    }

    async setCountry(country: string) {

        await this.field.fill(country)
    }

    async getFieldContent() {

        return await this.field.inputValue();
    }

    async pressEnter() {

        await this.field.press('Enter');
    }
}