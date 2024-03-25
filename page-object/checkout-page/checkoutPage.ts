import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { Table } from "../shopping-cart/table";

export class CheckoutPage extends BasePage {

    private readonly TABLE: Table;
    private readonly ORDER_MESSAGE_TEXT_AREA: Locator;
    private readonly PLACE_ORDER_LINK: Locator;

    constructor(page: Page) {

        super(page);

        this.TABLE = new Table(page);
        this.ORDER_MESSAGE_TEXT_AREA = page.locator('textarea[name="message"]');
        this.PLACE_ORDER_LINK = page.getByRole('link', {name: 'Place Order'});
    }

    getTable() {

        return this.TABLE;
    }

    async setOrderMessage(message: string) {

        await this.ORDER_MESSAGE_TEXT_AREA.fill(message);
    }

    async getOrderMessage() {

        return await this.ORDER_MESSAGE_TEXT_AREA.inputValue();
    }

    async clickPlaceOrderLink() {

        await this.PLACE_ORDER_LINK.click();
    }
}