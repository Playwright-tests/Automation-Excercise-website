import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class CategoryMenu extends BasePage {

    readonly ACCORDIAN = '#accordian';
    readonly WOMEN_SELECTOR = '#Women';
    readonly MEN_SELECTOR = '#Men';
    readonly KIDS_SELECTOR = '#Kids';

    constructor(page: Page) {

        super(page);
    }

    async clickWomenLink() {

        await (await this.getPage()).locator(this.ACCORDIAN).getByRole('link', {name: ' Women'}).click();
    }

    async clickMenLink() {

        await (await this.getPage()).locator(this.ACCORDIAN).getByRole('link', {name: ' Men'}).click();
    }

    async clickKidsLink() {

        (await this.getPage()).locator(this.ACCORDIAN).getByRole('link', {name: ' Kids'}).click();
    }

    getWomenSelector() {

        return this.WOMEN_SELECTOR;
    }

    getMenSelector() {

        return this.MEN_SELECTOR;
    }

    getKidsSelector() {

        return this.KIDS_SELECTOR;
    }
}