import { Page, expect, test } from "@playwright/test";
import { CheckoutPage } from "../../page-object/checkout-page/checkoutPage";
import { fillAddressForm } from "../../support/addressFormFiller";
import { AddressDataProvider } from "../../data-loaders/dataProviders";
import { TestScenarios } from "../../enums/testScenarios";

const addressData = AddressDataProvider.get();

export async function steps(page: Page, checkoutPage: CheckoutPage, radioButtonName: string, placeOrderButtonName: string) {
    
    await test.step('Fill the billing address form',async () => {
        
        await fillAddressForm(page, addressData[TestScenarios.CORRECT]);
    })

    await test.step('Click the "' + radioButtonName + '" radio button',async () => {
        
        await checkoutPage.getPaymentMethodsSection().clickRadioButton(radioButtonName);
    })

    await test.step('Click the "' + placeOrderButtonName + '" button',async () => {
        
        await checkoutPage.clickPlaceOrderButton(placeOrderButtonName);
    })
}

