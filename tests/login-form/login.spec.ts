import { test } from "../../fixtures/login";
import { expect as hdExpect } from "../../expect/toHaveHiddenSelector";
import { expect as nhdExpect } from "../../expect/tohaveNotHiddenSelector";
import { steps } from "./steps.spec";
import { AccountNavigation } from "../../page-object/account/accountNavigation";
import { Credentials } from "../../models/models";
import { CredentialsDataProvider } from "../../data-loaders/dataProviders";
import { TestScenarios } from "../../enums/testScenarios";


test.describe('Login',async () => {

    let credentials: Credentials[];
    let accountNavigation: AccountNavigation;

    test.beforeAll(async () => {
        
        credentials = CredentialsDataProvider.get();
    })

    test.beforeEach(async ({page}) => {
        
        accountNavigation = new AccountNavigation(page);
    })
    
    test('Correct credentials',async ({loginForm}) => {
             
        await steps(loginForm, credentials[TestScenarios.CORRECT]);
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(accountNavigation.getContentsSelector());
    })

    test('Incorrect username or email', async ({loginForm}) => {
            
        await steps(loginForm, credentials[TestScenarios.INCORRECT_EMAIL_OR_USERNAME]);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })

    test('Blank "Username or email address" field',async ({loginForm}) => {
             
        await steps(loginForm, credentials[TestScenarios.BLANK_EMAIL_OR_USERNAME_FIELD]);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })

    test('Incorrect password',async ({loginForm}) => {
        
        await steps(loginForm, credentials[TestScenarios.INCORRECT_PASSWORD]);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })

    test('Blank "Password" field',async ({loginForm}) => {
             
        await steps(loginForm, credentials[TestScenarios.BLANK_PASSWORD_FIELD]);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    })
})