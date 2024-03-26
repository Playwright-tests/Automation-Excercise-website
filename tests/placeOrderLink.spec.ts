import { URLs } from "../enums/URLs";
import { test, expect } from "../fixtures/checkoutPage";

test.describe('The "Place Order" link',async () => {
    
    test('Opening the payment page',async ({withProduct}) => {
        
        await test.step('Click the "Place Order" link',async () => {
            await withProduct.clickPlaceOrderLink();
        })

        await expect(await withProduct.getPage()).toHaveURL(URLs.PAYMENT_PAGE);
    })
})