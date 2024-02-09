import { LinkDataProvider } from "../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../enums/testScenarios";
import { test, expect } from "../../../fixtures/account";

const billingLinkData = LinkDataProvider.get(TestScenarios.BILLING_ADDRESS_FORM);
const shippingLinkData = LinkDataProvider.get(TestScenarios.SHIPPING_ADDRESS_FORM);

test.describe('Address forms navigation links',async () => {
    
    test('Clicking the "Edit" link in the "Billing address" section',async ({addressFormNavigation, page}) => {
        
        await test.step('Click the "Edit" link in the "Billing address" section',async () => {
            
            await addressFormNavigation.clickBillingAddressFormEditLink();
        })

        await expect(page).toHaveURL(billingLinkData[0].url);
    })

    test('Clicking the "Edit" link in the "Shipping address" section',async ({addressFormNavigation, page}) => {
        
        await test.step('Click the "Edit" link in the "Shipping address" section',async () => {
            
            await addressFormNavigation.clickShippingAddressFormEditLink();
        })

        await expect(page).toHaveURL(shippingLinkData[0].url);
    })
    
})