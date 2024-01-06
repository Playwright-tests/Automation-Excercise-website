import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class OrderReceivedPage extends BasePage {

    readonly orderDetailsTitleSelector: string;

    constructor(page: Page) {

        super(page);

        this.orderDetailsTitleSelector = '.woocommerce-order-details__title';
    }

    async getPaymentMethodLocator(methodName: string) {

        return (await this.getPage()).locator('strong').filter({hasText: methodName});
    }

    getOrderDetailsTitleSelector() {

        return this.orderDetailsTitleSelector;
    }
}