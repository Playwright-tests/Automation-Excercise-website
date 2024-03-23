import { Page } from "@playwright/test";
import { BaseDropdownList } from "../base/baseDropdownList";

export class KidsDropdownList extends BaseDropdownList {

    constructor(page: Page) {

        super(page, '#Kids');
    }

    async clickDressLink() {

        await this.clickLink('Dress');
    }

    async clickTopsAndShirstLink() {

        await this.clickLink('Tops & Shirts');
    }
}