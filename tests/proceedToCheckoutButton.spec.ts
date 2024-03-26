import { URLs } from "../enums/URLs";
import { test, expect } from "../fixtures/shoppingCart";

test.describe('The "Proceed to Checkout" button',async () => {
    
    test('Opening the checkout page',async ({authenticated}) => {
        
        await test.step('Click the "Proceed to checkout" button',async () => {
            await authenticated.clickCheckoutButton();
        })

        await expect(await authenticated.getPage()).toHaveURL(URLs.CHECKOUT_PAGE);
    })
})