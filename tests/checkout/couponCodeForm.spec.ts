import { test, expect } from "../../fixtures/checkout";
import { expect as hdExpect } from "../../expect/toHaveHiddenSelector";

test.describe('Coupon code form',async () => {
    
    test('Expanding the coupon form',async ({checkoutPage, page}) => {
        
        await test.step('Click the "Click here to enter your code"',async () => {
            
            await checkoutPage.clickCouponCodeLink();
        })

        expect(await checkoutPage.getCouponForm().getFormLocator().isVisible()).toBeTruthy();
    })

    test('Collapsing the coupon form',async ({withExpandedCouponForm, page}) => {
        
        await test.step('Click the "Click here to enter you code"',async () => {
            
            await withExpandedCouponForm.clickCouponCodeLink();
        });

        await hdExpect(page).toHaveHiddenSelector(withExpandedCouponForm.getCouponForm().getFormSelector());
    })    
})