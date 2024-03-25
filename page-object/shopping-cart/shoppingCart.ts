import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { Table } from "./table";
import { CheckoutModalDialog } from "./checkoutModalDialog";

export class ShoppingCart extends BasePage {

    private readonly table: Table;
    private readonly CHECKOUT_BUTTON: Locator;
    private readonly CHECKOUT_MODAL_DIALOG: CheckoutModalDialog;

    constructor(page: Page) {

        super(page);

        this.table = new Table(page);
        this.CHECKOUT_BUTTON = page.getByText('Proceed To Checkout');
        this.CHECKOUT_MODAL_DIALOG = new CheckoutModalDialog(page);
    }

    getTable() {

        return this.table;
    }

    async clickCheckoutButton() {

        await this.CHECKOUT_BUTTON.click();
    }

    getCheckoutModalDialog() {

        return this.CHECKOUT_MODAL_DIALOG;
    }
}