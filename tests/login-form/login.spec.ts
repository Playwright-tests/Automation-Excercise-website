import { expect, test } from "../../fixtures/login";
import { expect as hdExpect } from "../../expect/toHaveHiddenSelector";
import { expect as nhdExpect } from "../../expect/tohaveNotHiddenSelector";
import { steps } from "./steps.spec";
import { AccountNavigation } from "../../page-object/account/accountNavigation";
import { LoginTestdataLoader } from "../../data-loaders/dataLoaders";


test.describe('Login',async () => {

    let accountNavigation: AccountNavigation;

    test.beforeAll(async () => {
        
        LoginTestdataLoader.init();
    })

    test.beforeEach(async ({page}) => {
        
        accountNavigation = new AccountNavigation(page);
    })
    
    test('Correct credentials',async ({loginForm}) => {
             
        await steps(loginForm, await LoginTestdataLoader.correct);
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(accountNavigation.getContentsSelector());
    })

    test('Incorrect username or email', async ({loginForm}) => {
            
        await steps(loginForm, await LoginTestdataLoader.incorrectUsername);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })

    test('Blank "Username or email address" field',async ({loginForm}) => {
             
        await steps(loginForm, await LoginTestdataLoader.blankUsernameField);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })

    test('Incorrect password',async ({loginForm}) => {
        
        await steps(loginForm, await LoginTestdataLoader.incorrectPassword);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })

    test('Blank "Password" field',async ({loginForm}) => {
             
        await steps(loginForm, await LoginTestdataLoader.blankPasswordField);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })
})