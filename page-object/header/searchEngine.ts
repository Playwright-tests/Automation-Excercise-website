import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class SearchEngine extends BasePage {

    readonly searchField: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {

        super(page);

        this.searchField = page.locator('#search-field-top-bar');
        this.searchButton = page.locator('#search-top-bar-submit');
    }

    async clickSearchField() {

        await this.searchField.click();
    }

    async setText(text: string) {

        await this.searchField.fill(text);
    }

    async getFieldContent() {

        return await this.searchField.inputValue();
    }

    async clickSearchButton() {

        await this.searchButton.click();
    }
}