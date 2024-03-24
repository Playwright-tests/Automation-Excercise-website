import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class ConfirmModalDialog extends BasePage {

    private readonly SELECTOR = '#cartModal';
    private readonly VIEW_CART_LINK: Locator;
    private readonly CONTINUE_SHOPPING_BUTTON: Locator;

    constructor(page: Page) {

        super(page);

        this.VIEW_CART_LINK = page.getByRole('link', {name: 'View Cart'});
        this.CONTINUE_SHOPPING_BUTTON = page.getByRole('button', {name: 'Continue Shopping'});
    }

    async clickViewCartLink() {

        await this.VIEW_CART_LINK.click();
    }

    async clickContinueShoppingButton() {

        await this.CONTINUE_SHOPPING_BUTTON.click();
    }

    getSelector() {

        return this.SELECTOR;
    }
}