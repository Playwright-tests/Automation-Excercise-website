import { test, expect } from "../../fixtures/checkout.spec";
import { expect as hdExpect } from "../../expect/toHaveHiddenSelector";

test.describe('Login form',async () => {
    
    test('Expanding the login form',async ({checkoutPage, page}) => {
        
        await test.step('Click the "Click here to login" link',async () => {
            
            await checkoutPage.clickLoginLink();
        })

        expect(await checkoutPage.getLoginForm().getFormLocator().isVisible()).toBeTruthy();
    });

    test('Collapsing the login form',async ({loginFormExpanded, page}) => {
            
        await test.step('Click the "Click here to login" link',async () => {
                
            await loginFormExpanded.clickLoginLink();
        })

        await hdExpect(page).toHaveHiddenSelector(loginFormExpanded.getLoginForm().getFormSelector());
    });
})