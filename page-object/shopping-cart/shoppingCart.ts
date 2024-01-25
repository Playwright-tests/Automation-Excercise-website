import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { Row } from "./row";
import { ShoppingCartProcessing } from "./shoppingCartProcessing";

export class ShoppingCart extends BasePage {

    readonly messageSelector: string;
    readonly tableSelector = '.shop_table.shop_table_responsive.cart.woocommerce-cart-form__contents'
    readonly cartEmpty: Locator;
    readonly updateButton: Locator;
    readonly message: Locator;
    readonly checkoutButton: Locator;

    private row: Row;
    private shoppingCartProcessing: ShoppingCartProcessing;

    constructor(page: Page) {

        super(page);

        this.messageSelector = '.woocommerce-message';

        this.cartEmpty = page.getByText('Your cart is currently empty.');
        this.updateButton = page.getByRole('button', {name: 'Update cart'});
        this.message = page.locator(this.messageSelector);
        this.checkoutButton = page.getByRole('link', {name: 'Proceed to checkout'});

        this.row = new Row(page);
        this.shoppingCartProcessing = new ShoppingCartProcessing(page);
    }

    getCartEmptyLocator() {

        return this.cartEmpty;
    }

    async clickUpdateButton() {

        await this.updateButton.click();
    }

    async clickCheckoutButton() {

        await this.checkoutButton.click();
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

    getTableSelector() {

        return this.tableSelector;
    }

    getRow(nth: number) {

        this.row.setNth(nth);

        return this.row;
    }

    getShoppingCartProcessing() {

        return this.shoppingCartProcessing;
    }
}