import { test, expect } from "../fixtures/checkoutModalDialog";
import { expect as NHD_Expect } from "../expect/tohaveNotHiddenSelector";
import { expect as HD_Expect } from "../expect/toHaveHiddenSelector";
import { URLs } from "../enums/URLs";

test.describe('The checkout modal dialog',async () => {
    
    test('The checkout modal dialog visibility',async ({hidden}) => {
        
        await test.step('Click the "Proceed to Checkout" button',async () => {
            await hidden.clickCheckoutButton();
        })

        await NHD_Expect(await hidden.getPage())
                .toHaveNotHiddenSelector(hidden.getCheckoutModalDialog().getSelector());
    })

    test('The "Register / Login" link',async ({visible}) => {
        
        await test.step('Click the "Register / Login" link',async () => {
            await visible.getCheckoutModalDialog().clickRegisterLink();
        })

        await expect(await visible.getPage()).toHaveURL(URLs.LOGIN_PAGE);
    })

    test('The "Continue On Cart" button',async ({visible}) => {
        
        await test.step('Click the "Continue on Cart" button',async () => {
            await visible.getCheckoutModalDialog().clickContinueButton();
        })

        await HD_Expect(await visible.getPage())
                .toHaveHiddenSelector(visible.getCheckoutModalDialog().getSelector());
        await expect(await visible.getPage()).toHaveURL(URLs.SHOPPING_CART_PAGE);
    })
})