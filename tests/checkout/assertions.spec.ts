import { Page, expect } from "@playwright/test";
import { OrderReceivedPage } from "../../page-object/order-received-page/orderReceivedPage";
import { URLs } from "../../enums/URLs";

export async function check(page: Page, paymentMethod: string) {
    
    const orderReceivedPage = new OrderReceivedPage(page);
    const headingLocator = await page.waitForSelector(orderReceivedPage.getOrderDetailsTitleSelector());

    if(!headingLocator) {

        expect(false).toBeTruthy();
    }

    expect(page.url().includes(URLs.OrderReceivedPage)).toBeTruthy();
    await expect(await orderReceivedPage.getPaymentMethodLocator(paymentMethod)).toBeVisible();
}