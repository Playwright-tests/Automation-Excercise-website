import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class MainMenu extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    async clickHomeButton() {

        await page.getByRole('link', {name: 'Home'}).click();
    }

    async clickProductsButton() {

        await page.getByRole('link', {name: 'Products'}).click();
    }
}