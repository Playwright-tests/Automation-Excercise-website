import { URLs } from "../../enums/URLs";
import { test, expect } from "../../fixtures/shoppingCart";


test.describe('Opening checkout page',async () => {

    test('Clicking the "Proceed to checkout" button',async ({shoppingCart, page}) => {
        
        await test.step('Click the "Checkout button"',async () => {
            
            await shoppingCart.clickCheckoutButton();
        })

        await expect(page).toHaveURL(URLs.CheckoutPage);
    })

    test('Pasting checkout page URL',async ({shoppingCart, page}) => {
        
        await test.step('Go to the checkout page',async () => {
            
            await page.goto(URLs.CheckoutPage);
        })

        await expect(page).toHaveURL(URLs.CheckoutPage);
    })

    test('Empty shopping cart',async ({emptyShoppingCart, page}) => {
        
        await test.step('Go to the checkout page',async () => {
            
            await page.goto(URLs.CheckoutPage);
        })

        expect(page.url()).not.toEqual(URLs.CheckoutPage)
    })
})