import { test, expect } from "../../../fixtures/checkout";

test.describe('Text input verification',async () => {
    
    test('Filling the input text',async ({checkoutPage}) => {
        
        const text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

        await test.step('Fill the input text',async () => {
            
            await checkoutPage.getDifferentAddressSection().fillInputText(text);
        })
        
        expect(await checkoutPage.getDifferentAddressSection().getInputTextContent()).toEqual(text);
    })
})