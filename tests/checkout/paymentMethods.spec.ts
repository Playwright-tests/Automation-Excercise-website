import { URLs } from "../../enums/URLs.spec";
import { test, expect } from "../../fixtures/checkout.spec";
import { check, steps } from "./helpers.spec"

test.describe('Payment methods',async () => {
    
    test('Direct bank transfer',async ({checkoutPage, page}) => {
        
        await steps(page, checkoutPage, 'Direct bank transfer', 'Place order');
        await check(page, 'Direct bank transfer')
    })

    test('Check payments',async ({checkoutPage, page}) => {
        
        await steps(page, checkoutPage, 'Check payments', 'Place order');
        await check(page, 'Check payments');
    })

    test('Cash on delivery',async ({checkoutPage, page}) => {
        
        await steps(page, checkoutPage, 'Cash on delivery', 'Place order');
        await check(page, 'Cash on delivery');
    })

    test('PayPal',async ({checkoutPage, page}) => {
        
        await steps(page, checkoutPage, 'PayPal', "Proceed to PayPal");

        try {

            await page.waitForURL(URLs.PayPalPage, {timeout: 5000});
            expect(true).toBeTruthy();

        } catch {

            expect(false).toBeTruthy();
        }
    })
})