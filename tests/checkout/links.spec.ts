import { test, expect } from "../../fixtures/checkout.spec";

test.describe('Links',async () => {
    
    test('"Click here to login" link',async ({checkoutPage, page}) => {
        
        await test.step('Click the "Click here to login" link',async () => {
            
            await checkoutPage.clickLoginLink();
        })

        expect(await checkoutPage.getLoginForm().getFormLocator().isVisible()).toBeTruthy();
    })
})