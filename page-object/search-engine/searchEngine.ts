import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class SearchEngine extends BasePage {

    private readonly FIELD: Locator;
    private readonly BUTTON: Locator;

    constructor(page: Page) {

        super(page);

        this.FIELD = page.locator('#search_product');
        this.BUTTON = page.locator('#submit_search');
    }

    async setPhrase(phrase: string) {

        await this.FIELD.fill(phrase);
    }

    async clickButton() {

        await this.BUTTON.click();
    }

    async getPhrase() {

        return await this.FIELD.inputValue();
    }
}