import { test, expect } from "../fixtures/checkoutPage";

test.describe('Order message text area',async () => {
    
    test('Verification the output',async ({checkoutPage}) => {
        
        const text = 'This is the test!!!';

        await test.step('Enter the text',async () => {
            await checkoutPage.setOrderMessage(text);
        })

        expect(await checkoutPage.getOrderMessage()).toEqual(text);
    })
})