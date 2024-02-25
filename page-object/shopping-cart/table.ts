import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { QuantityField } from "../quantity-field/quantityField";

export class Table extends BasePage {

    readonly contents: Locator;
    private rows: Locator[];
    readonly rowSelector: string;

    constructor(page: Page) {

        super(page);

        this.contents = page.locator("table.shop_table.shop_table_responsive.cart.woocommerce-cart-form__contents");
        this.rowSelector = ".woocommerce-cart-form__cart-item.cart_item";
    }

    async findRows() {

        this.rows = await (await this.getPage()).locator(this.rowSelector).all();
    }

    getRowsCount() {

        return this.rows.length;
    }

    async getProductName(row: number) {

        return (await this.rows[row].locator('.product-name').textContent())?.trim();
    }

    async getPrice(row: number) {

        return (await this.rows[row].locator('.product-price').textContent())?.trim();
    }

    async getTotal(row: number) {

        return (await this.rows[row].locator('.product-subtotal').textContent())?.trim();
    }

    async getQuantityField(row: number) {

        return new QuantityField(await this.getPage(), this.rows[row]);
    }
}