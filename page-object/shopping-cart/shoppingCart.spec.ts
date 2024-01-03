import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";
import { Row } from "./row.spec";

export class ShoppingCart extends BasePage {

    readonly messageSelector: string;

    readonly cartEmpty: Locator;
    readonly updateButton: Locator;
    readonly message: Locator;

    private row: Row;

    constructor(page: Page) {

        super(page);

        this.messageSelector = '.woocommerce-message';

        this.cartEmpty = page.getByText('Your cart is currently empty.');
        this.updateButton = page.getByRole('button', {name: 'Update cart'});
        this.message = page.locator(this.messageSelector);

        this.row = new Row(page);
    }

    getCartEmptyLocator() {

        return this.cartEmpty;
    }

    async clickUpdateButton() {

        await this.updateButton.click();
    }

    async getMessageText() {

        return await this.message.textContent();
    }

    getMessageLocator() {

        return this.message;
    }

    getMessageSelector() {

        return this.messageSelector;
    }

    getRow(nth: number) {

        this.row.setNth(nth);

        return this.row;
    }
}