import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class BaseDropdownList extends BasePage {

    private readonly SELECTOR: string;

    constructor(page: Page, selector: string) {

        super(page);
        this.SELECTOR = selector;
    }

    protected async clickLink(linkName: string) {

        await (await this.getPage()).locator(this.SELECTOR).getByRole('link', {name: linkName}).click();
    }
}