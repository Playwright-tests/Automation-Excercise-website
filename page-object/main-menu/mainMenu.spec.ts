import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";
import { DropdownList } from "./dropdownList.spec";

export class MainMenu extends BasePage {

    readonly dropdownList: DropdownList;

    constructor(page: Page) {

        super(page);

        this.dropdownList = new DropdownList(page);
    }

    async clickLink(id: string) {

        await (await this.getPage()).locator('#' + id).click();
    }

    async getDropdownList() {

        return this.dropdownList;
    }
}