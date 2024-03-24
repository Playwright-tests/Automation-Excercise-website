import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { Table } from "./table";

export class ShoppingCart extends BasePage {

    private readonly table: Table;

    constructor(page: Page) {

        super(page);

        this.table = new Table(page);
    }

    getTable() {

        return this.table;
    }
}