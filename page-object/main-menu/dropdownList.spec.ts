import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";

export class DropdownList extends BasePage {

    readonly parent: Locator;

    constructor(page: Page) {

        super(page);

        this.parent = page.locator('#menu-item-123');
    }

    async hoverParent() {

        await this.parent.hover();
    }

    async clickLink(id: string) {

        await (await this.getPage()).locator('#' + id).click();
    }
}