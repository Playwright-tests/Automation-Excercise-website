import { ElementHandle, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class Table extends BasePage {
    
    private readonly SELECTOR: string = '#cart_info_table';
    private rows: ElementHandle<SVGElement | HTMLElement>[];

    constructor(page: Page) {

        super(page);
    }

    async findRows() {

        this.rows = await (await this.getPage()).$$(this.SELECTOR + ' tbody > tr');
    }

    getRowsCount() {

        return this.rows.length;
    }

    async getProductName(index: number) {

        return await (await this.rows.at(index)?.$('.cart_description > h4'))?.textContent();
    }

    async getPrice(index: number) {

        return await (await this.rows.at(index)?.$('.cart_price > p'))?.textContent();
    }

    async getQuantity(index: number) {

        return await (await this.rows.at(index)?.$('.cart_quantity > .disabled'))?.textContent();
    }

    async getTotal(index: number) {

        return await (await this.rows.at(index)?.$('.cart_total_price'))?.textContent();
    }
}