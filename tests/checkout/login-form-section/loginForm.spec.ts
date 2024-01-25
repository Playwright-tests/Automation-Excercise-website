import { test, expect } from "../../../fixtures/checkout";
import { expect as nhdExpect } from "../../../expect/tohaveNotHiddenSelector";
import { expect as hdExpect } from "../../../expect/toHaveHiddenSelector";

test.describe('Login form',async () => {
    
    test('Expanding and collapsing the login form',async ({checkoutPage}) => {
        
        await test.step('Click the "Click here to login" link',async () => {
            
            await checkoutPage.clickLoginLink();
        })

        await nhdExpect(await checkoutPage.getPage()).toHaveNotHiddenSelector(checkoutPage.getLoginForm().getFormSelector());

        await test.step('Click the "Click here to login" link again',async () => {
                
            await checkoutPage.clickLoginLink();
        })

        await hdExpect(await checkoutPage.getPage()).toHaveHiddenSelector(checkoutPage.getLoginForm().getFormSelector());
    });
})