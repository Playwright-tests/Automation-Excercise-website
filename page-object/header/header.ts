import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { SearchEngine } from "./searchEngine";

export class Header extends BasePage {

    readonly logo: Locator;
    readonly accountButton: Locator;
    readonly shoppingCartButton: Locator;

    private searchEngine: SearchEngine;

    constructor(page: Page) {

        super(page);

        this.logo = page.getByRole('link', {name: 'Generic Shop'});
        this.accountButton = page.locator('li').filter({hasText: 'Account'});
        this.shoppingCartButton = page.locator('li').filter({hasText: 'My Cart - zł'});

        this.searchEngine = new SearchEngine(page);
    }

    async clickLogo() {

        await this.logo.click();
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