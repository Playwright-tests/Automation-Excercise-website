import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage.spec";

export class SearchResultsPage extends BasePage {

    readonly productsContainer: Locator;
    readonly foundMessage: Locator;
    readonly nothingFoundMessage: Locator;

    constructor(page: Page) {

        super(page);

        this.productsContainer = page.locator('#primary');
        this.foundMessage = page.getByRole('heading', {name: 'Search Results for: '});
        this.nothingFoundMessage = page.getByRole('heading', {name: 'Nothing Found'})
    }

    async getFoundMessageLocator() {

        return this.foundMessage;
    }

    async getNothingFoundLocator() {

        return this.nothingFoundMessage;
    }
}