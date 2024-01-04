import { test, expect } from "../../fixtures/checkout.spec";

test.describe('Different address section functionalities',async () => {
    
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

    test('Filling the input text',async ({checkoutPage}) => {
        
        const text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        await test.step('Fill the input text',async () => {
            
            await checkoutPage.getDifferentAddressSection().fillInputText(text);
        })
        
        expect(await checkoutPage.getDifferentAddressSection().getInputTextContent()).toEqual(text);
    })
})