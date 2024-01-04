import { Page, test } from "@playwright/test";
import { CheckoutPage } from "../../page-object/checkout-page/checkoutPage.spec";
import { fillAddressForm } from "../../helpers/addressFormFiller.spec";
import { getAddressFormData } from "../../data-loaders/addressFormData.spec";

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