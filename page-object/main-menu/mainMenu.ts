import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class MainMenu extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    async clickHomeLink() {

        await (await this.getPage()).getByRole('link', {name: 'Home'}).click();
    }

    async clickProductsLink() {

        await (await this.getPage()).getByRole('link', {name: 'Products'}).click();
    }

    async clickCartLink() {

        await (await this.getPage()).getByRole('link', {name: 'Cart'}).click();
    }

    async clickSignupLink() {

        await (await this.getPage()).getByRole('link', {name: 'Signup / Login'}).click();
    }

    async clickTestCasesLink() {

        await (await this.getPage()).getByRole('link', {name: ' Test Cases'}).click();
    }

    async clickAPITestingLink() {

        await (await this.getPage()).getByRole('link', {name: 'API Testing'}).click();
    }

    async clickVideoTutorialsLink() {

        await (await this.getPage()).getByRole('link', {name: 'Video Tutorials'}).click();
    }

    async clickContactUs() {

        await (await this.getPage()).getByRole('link', {name: 'Contact us'}).click();
    }
}