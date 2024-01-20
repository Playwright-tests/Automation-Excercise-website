import { getLinkData } from "../../../data-loaders/link";
import { test, expect } from "../../../fixtures/account";

const billingAddressFormLink = getLinkData('billingAddressFormLink')[0];
const shippingAddressFormLink = getLinkData('shippingAddressFormLink')[0]; 

test.describe('Address forms navigation links',async () => {
    
    test('Clicking the "Edit" link in the "Billing address" section',async ({addressFormNavigation, page}) => {
        
        await test.step('Click the "Edit" link in the "Billing address" section',async () => {
            
            await addressFormNavigation.clickBillingAddressFormEditLink();
        })

        await expect(page).toHaveURL(billingAddressFormLink.url);
    })

    test('Clicking the "Edit" link in the "Shipping address" section',async ({addressFormNavigation, page}) => {
        
        await test.step('Click the "Edit" link in the "Shipping address" section',async () => {
            
            await addressFormNavigation.clickShippingAddressFormEditLink();
        })

        await expect(page).toHaveURL(shippingAddressFormLink.url);
    })
    
})