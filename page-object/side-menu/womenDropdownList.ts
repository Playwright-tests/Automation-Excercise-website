import { Page } from "@playwright/test";
import { BaseDropdownList } from "../base/baseDropdownList";

export class WomenDropdownList extends BaseDropdownList {

    constructor(page: Page) {

        super(page, '#Women');
    }

    async clickDressLink() {

        await this.clickLink('Dress');
    }

    async clickTopsLink() {

        await this.clickLink('Tops');
    }

    async clickSareeLink() {

        await this.clickLink('Saree');
    }
}