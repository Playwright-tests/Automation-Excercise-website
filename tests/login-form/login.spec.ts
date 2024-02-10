import { test } from "../../fixtures/login";
import { expect as hdExpect } from "../../expect/toHaveHiddenSelector";
import { expect as nhdExpect } from "../../expect/tohaveNotHiddenSelector";
import { steps } from "./steps.spec";
import { AccountNavigation } from "../../page-object/account/accountNavigation";
import { Credentials } from "../../models/models";
import { CredentialsDataProvider } from "../../data-loaders/dataProviders";
import { TestScenarios } from "../../enums/testScenarios";
import { LoginForm } from "../../page-object/login-form/loginForm";

const credentials = CredentialsDataProvider.get();

test.describe('Login',async () => {

    let accountNavigation: AccountNavigation;

    test.beforeEach(async ({page}) => {
        
        accountNavigation = new AccountNavigation(page);
    })
    
    async function actionsForNegativeTests(loginForm: LoginForm, data: Credentials) {
        
        await steps(loginForm, data);
        await hdExpect(await loginForm.getPage()).toHaveHiddenSelector(accountNavigation.getContentsSelector());
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(loginForm.getErrorMessageSelector());
    }

    test('Correct credentials',async ({loginForm}) => {
             
        await steps(loginForm, credentials[TestScenarios.CORRECT]);
        await nhdExpect(await loginForm.getPage()).toHaveNotHiddenSelector(accountNavigation.getContentsSelector());
    })

    test('Incorrect username or email', async ({loginForm}) => {
          
        await actionsForNegativeTests(loginForm, credentials[TestScenarios.INCORRECT_EMAIL_OR_USERNAME]);
    })

    test('Blank "Username or email address" field',async ({loginForm}) => {
             
        await actionsForNegativeTests(loginForm, credentials[TestScenarios.BLANK_EMAIL_OR_USERNAME_FIELD]);
    })

    test('Incorrect password',async ({loginForm}) => {
        
        await actionsForNegativeTests(loginForm, credentials[TestScenarios.INCORRECT_PASSWORD]);
    })

    test('Blank "Password" field',async ({loginForm}) => {
             
        await actionsForNegativeTests(loginForm, credentials[TestScenarios.BLANK_PASSWORD_FIELD]);
    })
})