import { test, expect } from "../../../fixtures/checkout";

test.describe('Expanding and collapsing the shipping address form',async () => {
    
    test('Clicking the checkbox',async ({checkoutPage}) => {
        
        await test.step('Click the checkbox',async () => {
            
            await checkoutPage.getDifferentAddressSection().clickCheckbox();
        })

        expect(await checkoutPage.getDifferentAddressSection().getShippingAddressFormWrapper().isVisible()).toBeTruthy();
        expect(await checkoutPage.getDifferentAddressSection().getInputTextLocator().isVisible()).toBeTruthy();

        await test.step('Click the checkbox again',async () => {
            
            await checkoutPage.getDifferentAddressSection().clickCheckbox();
        })

        expect(await checkoutPage.getDifferentAddressSection().getShippingAddressFormWrapper().isVisible()).toBeFalsy();
        expect(await checkoutPage.getDifferentAddressSection().getInputTextLocator().isVisible()).toBeTruthy();
    })
})