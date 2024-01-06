import { test, expect } from "../../fixtures/checkout";
import { expect as hdExpect } from "../../expect/toHaveHiddenSelector";

test.describe('Login form',async () => {
    
    test('Expanding the login form',async ({checkoutPage}) => {
        
        await test.step('Click the "Click here to login" link',async () => {
            
            await checkoutPage.clickLoginLink();
        })

        expect(await checkoutPage.getLoginForm().getFormLocator().isVisible()).toBeTruthy();
    });

    test('Collapsing the login form',async ({withExpandedLoginForm, page}) => {
            
        await test.step('Click the "Click here to login" link',async () => {
                
            await withExpandedLoginForm.clickLoginLink();
        })

        await hdExpect(page).toHaveHiddenSelector(withExpandedLoginForm.getLoginForm().getFormSelector());
    });
})