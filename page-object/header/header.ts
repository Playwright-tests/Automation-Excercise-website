import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { SearchEngine } from "./searchEngine";

export class Header extends BasePage {

    readonly accountButton: Locator;
    readonly shoppingCartButton: Locator;

    private searchEngine: SearchEngine;

    constructor(page: Page) {

        super(page);

        this.accountButton = page.locator('li').filter({hasText: 'Account'});
        this.shoppingCartButton = page.locator('li').filter({hasText: 'My Cart - zł'});

        this.searchEngine = new SearchEngine(page);
    }

    async clickAccountButton() {

        await this.accountButton.click();
    }

    async clickShoppingCartButton() {

        await this.shoppingCartButton.click();
    }

    async getSearchEngine() {

        return this.searchEngine;
    }
}