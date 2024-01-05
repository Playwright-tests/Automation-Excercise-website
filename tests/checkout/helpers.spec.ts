import { Page, expect, test } from "@playwright/test";
import { CheckoutPage } from "../../page-object/checkout-page/checkoutPage.spec";
import { fillAddressForm } from "../../helpers/addressFormFiller.spec";
import { getAddressFormData } from "../../data-loaders/addressFormData.spec";
import { OrderReceivedPage } from "../../page-object/order-received-page/orderReceivedPage.spec";
import { URLs } from "../../enums/URLs.spec";

const addressFormData = getAddressFormData('correct')[0];

export async function steps(page: Page, checkoutPage: CheckoutPage, radioButtonName: string, placeOrderButtonName: string) {
    
    await test.step('Fill the billing address form',async () => {
        
        await fillAddressForm(page, addressFormData);
    })

    await test.step('Click the "' + radioButtonName + '" radio button',async () => {
        
        await checkoutPage.getPaymentMethodsSection().clickRadioButton(radioButtonName);
    })

    await test.step('Click the "' + placeOrderButtonName + '" button',async () => {
        
        await checkoutPage.clickPlaceOrderButton(placeOrderButtonName);
    })
}

export async function check(page: Page, paymentMethod: string) {
    
    const orderReceivedPage = new OrderReceivedPage(page);

    const headingLocator = await page.waitForSelector(orderReceivedPage.getOrderDetailsTitleSelector());

    if(!headingLocator) {

        expect(false).toBeTruthy();
    }

    expect(page.url().includes(URLs.OrderReceivedPage)).toBeTruthy();
    await expect(await orderReceivedPage.getPaymentMethodLocator(paymentMethod)).toBeVisible();
}