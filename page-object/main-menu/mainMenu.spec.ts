import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";

export class MainMenu extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    async clickLink(id: string) {

        await (await this.getPage()).locator('#' + id).click();
    }
}