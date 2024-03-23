import { Page } from "@playwright/test";
import { BaseDropdownList } from "../base/baseDropdownList";

export class MenDropdownList extends BaseDropdownList {

    constructor(page: Page) {

        super(page, '#Men');
    }

    async clickTShirtsLink() {

        await this.clickLink('Tshirts');
    }

    async clickJeansLink() {

        await this.clickLink('Jeans');
    }
}