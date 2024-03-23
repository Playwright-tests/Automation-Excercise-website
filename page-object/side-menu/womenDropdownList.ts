import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class WomenDropdownList extends BasePage {

    readonly SELECTOR = '#Women';

    constructor(page: Page) {

        super(page);
    }

    async clickDressLink() {

        await (await this.getPage()).locator(this.SELECTOR).getByRole('link', {name: 'Dress'}).click();
    }

    async clickTopsLink() {

        await (await this.getPage()).locator(this.SELECTOR).getByRole('link', {name: 'Tops'}).click();
    }

    async clickSareeLink() {

        await (await this.getPage()).locator(this.SELECTOR).getByRole('link', {name: 'Saree'}).click();
    }
}