import { expect, test } from "../../fixtures/login";
import { expect as hdExpect } from "../../expect/toHaveHiddenSelector";
import { expect as nhdExpect } from "../../expect/tohaveNotHiddenSelector";
import { steps } from "./steps.spec";
import { getCredentials } from "../../data-loaders/credentials";
import { AccountNavigation } from "../../page-object/account/accountNavigation";

const correct = getCredentials('correctCredentials')[0];
const incorrectUsernameOrEmail = getCredentials('incorrectUsernameOrEmail')[0];
const blankUsernameOrEmailField = getCredentials('blankUsernameOrEmailField')[0];
const incorrectPassword = getCredentials('incorrectPassword');
const blankPasswordField = getCredentials('blankPasswordField')[0];

test.describe('Login',async () => {

    let accountNavigation: AccountNavigation;

    test.beforeEach(async ({page}) => {
        
        accountNavigation = new AccountNavigation(page);
    })
    
    test('Correct credentials',async ({loginForm}) => {
             
        await steps(loginForm, correct);
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(accountNavigation.getContentsSelector());
    })

    test('Incorrect username or email', async ({loginForm}) => {
            
        await steps(loginForm, incorrectUsernameOrEmail);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })

    test('Blank "Username or email address" field',async ({loginForm}) => {
             
        await steps(loginForm, blankUsernameOrEmailField);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })

    for(const data of incorrectPassword) {

        test('Password: ' + data.password + '"', async ({loginForm}) => {
            
            await steps(loginForm, data);
            await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
            await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
        })
    }

    test('Blank "Password" field',async ({loginForm}) => {
             
        await steps(loginForm, blankPasswordField);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })
})