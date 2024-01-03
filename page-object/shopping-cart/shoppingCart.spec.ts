import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";
import { Row } from "./row.spec";

export class ShoppingCart extends BasePage {

    private row: Row;

    constructor(page: Page) {

        super(page);

        this.row = new Row(page);
    }

    getRow() {

        return this.row;
    }
}