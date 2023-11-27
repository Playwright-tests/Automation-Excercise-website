import { Page } from "@playwright/test";

export class BasePage {

    private page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async goto() {

        await this.page.goto('https://skleptest.pl/')
    }

    async getPage() {

        return this.page;
    }
}