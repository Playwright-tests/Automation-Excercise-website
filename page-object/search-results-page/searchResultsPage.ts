import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class SearchResultsPage extends BasePage {

    private readonly FEATURES_ITEM = '.features_items';
    private readonly COLUMN_SELECTOR = '.col-sm-4';
    private columns: number;

    constructor(page: Page) {

        super(page);
    }

    async findColumns() {

        const temp = await (await this.getPage())
                                    .locator(this.FEATURES_ITEM)
                                    .locator(this.COLUMN_SELECTOR).all();
        this.columns = temp.length;
    }

    getColumns() {

        return this.columns;
    }
}