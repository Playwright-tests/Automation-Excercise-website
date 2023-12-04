import { getLinkData } from "../../data-loaders/link.spec";
import { test, expect } from "../../fixtures/account.spec";

const billingAddressFormLink = getLinkData('billingAddressFormLink')
const shippingAddressFormLink = getLinkData('shippingAddressFormLink'); 

test.describe('Billing address form link',async () => {
    
    for(const link of billingAddressFormLink) {

        test('Clicking the "Edit" link in the "Billing address" section',async ({addressFormNavigation, page}) => {
        
            await test.step('Click the "Edit" link in the "Billing address" section',async () => {
                
                await addressFormNavigation.clickBillingAddressFormEditLink();
            })
    
            await expect(page).toHaveURL(link.url);
        })
    }
})

test.describe('Shipping address form link',async () => {
    
    for(const link of shippingAddressFormLink) {

        test('Clicking the "Edit" link in the "Shipping address" section',async ({addressFormNavigation, page}) => {
        
            await test.step('Click the "Edit" link in the "Shipping address" section',async () => {
                
                await addressFormNavigation.clickShippingAddressFormEditLink();
            })
    
            await expect(page).toHaveURL(link.url);
        })

    }
})