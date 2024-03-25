import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class MainMenu extends BasePage {

    private readonly LOGGED_IN_SELECTOR: string = '.fa.fa-user' 
    private readonly HOME_LINK: Locator;
    private readonly PRODUCTS_LINK: Locator;
    private readonly SHOPPING_CART_LINK: Locator;
    private readonly SIGNUP_LINK: Locator;
    private readonly LOGOUT_LINK: Locator;
    private readonly TEST_CASES_LINK: Locator;
    private readonly API_TESTING_LINK: Locator;
    private readonly VIDEO_TUTORIALS_LINK: Locator;
    private readonly CONTACT_US_LINK: Locator;

    constructor(page: Page) {

        super(page);

        this.HOME_LINK = page.getByRole('link', {name: "Home"});
        this.PRODUCTS_LINK = page.getByRole('link', {name: 'Products'});
        this.SHOPPING_CART_LINK = page.getByRole('link', {name: 'Cart'});
        this.SIGNUP_LINK = page.getByRole('link', {name: 'Signup / Login'});
        this.LOGOUT_LINK = page.getByRole('link', {name: 'Logout'});
        this.TEST_CASES_LINK = page.getByRole('link', {name: ' Test Cases'});
        this.API_TESTING_LINK = page.getByRole('link', {name: 'API Testing'});
        this.VIDEO_TUTORIALS_LINK = page.getByRole('link', {name: 'Video Tutorials'});
        this.CONTACT_US_LINK = page.getByRole('link', {name: 'Contact us'});
    }

    async clickHomeLink() {

        await this.HOME_LINK.click();
    }

    async clickProductsLink() {

        await this.PRODUCTS_LINK.click();
    }

    async clickCartLink() {

        await this.SHOPPING_CART_LINK.click();
    }

    async clickSignupLink() {

        await this.SIGNUP_LINK.click();
    }

    async clickLogoutLink() {

        await this.LOGOUT_LINK.click();
    }

    async clickTestCasesLink() {

        await this.TEST_CASES_LINK.click();
    }

    async clickAPITestingLink() {

        await this.API_TESTING_LINK.click();
    }

    async clickVideoTutorialsLink() {

        await this.VIDEO_TUTORIALS_LINK.click();
    }

    async clickContactUsLink() {

        await this.CONTACT_US_LINK.click();
    }

    getLogoutLocator() {

        return this.LOGOUT_LINK;
    }

    getLoggedInSelector() {

        return this.LOGGED_IN_SELECTOR;
    }
}