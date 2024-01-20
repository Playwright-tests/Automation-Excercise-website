import { test, expect } from "../../fixtures/login";
import { expect as nhdExpect } from "../../expect/tohaveNotHiddenSelector";

test.describe('Submitting',async () => {
    
    test('Clicking the "Login" button',async ({loginForm}) => {
        
        await test.step('Click the "Login" button',async () => {
            
            await loginForm.clickLoginButton();
        })

        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })

    test('Pressing ENTER',async ({loginForm}) => {
        
        await test.step('Click the "Password" field',async () => {
            
            await loginForm.clickPasswordField();
        })

        await test.step('Press ENTER',async () => {
            
            await (await loginForm.getPage()).keyboard.press('Enter');
        })

        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })
})