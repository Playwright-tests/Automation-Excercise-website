import { test, expect } from "../../../fixtures/checkout";
import { expect as nhdExpect } from "../../../expect/tohaveNotHiddenSelector";
import { expect as hdExpect } from "../../../expect/toHaveHiddenSelector";

test.describe('Expanding and collapsing the coupon form',async () => {
    
    test('Clicking the "Click here to enter your code" link',async ({checkoutPage}) => {
        
        await test.step('Click the "Click here to enter your code" link',async () => {
            
            await checkoutPage.clickCouponCodeLink();
        })

        await nhdExpect(await checkoutPage.getPage()).toHaveNotHiddenSelector(checkoutPage.getCouponForm().getFormSelector());

        await test.step('Click the "Click here to enter you code" link again',async () => {
            
            await checkoutPage.clickCouponCodeLink();
        });

        await hdExpect(await checkoutPage.getPage()).toHaveHiddenSelector(checkoutPage.getCouponForm().getFormSelector());
    })
})