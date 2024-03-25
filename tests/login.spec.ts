import { URLs } from "../enums/URLs";
import { test, expect } from "../fixtures/loginForm";
import { expect as NHD_Expect } from "../expect/tohaveNotHiddenSelector";
import { LoginForm } from "../page-object/login-form/loginForm";
import { MainMenu } from "../page-object/main-menu/mainMenu";
import { inputVerification } from "../support/inputVerification";
import { getCredentials } from "../testdata-IO/testdataLoader";

const correct = getCredentials('correct');
const incorrectEmail = getCredentials('incorrectEmail');
const incorrectEmailFormat = getCredentials('incorrectEmailFormat');
const incorrectPassword = getCredentials('incorrectPassword');

test.describe('Login',async () => {
    
    async function actions(loginForm: LoginForm, email: string, password: string) {
        
        await test.step('Enter an email',async () => {
            await loginForm.setEmail(email);
        })

        await test.step('Enter a password',async () => {
            await loginForm.setPassword(password);
        })

        await test.step('Click the "Login" button',async () => {
            await loginForm.clickButton();
        })
    }

    test('Correct credentials',async ({loginForm}) => {
        
        const mainMenu = new MainMenu(await loginForm.getPage());
        await actions(loginForm, correct[0].email, correct[0].password);
        await expect(await loginForm.getPage()).toHaveURL(URLs.HOME_PAGE);
        await expect(mainMenu.getLogoutLocator()).toBeVisible();
        await NHD_Expect(await loginForm.getPage()).toHaveNotHiddenSelector(mainMenu.getLoggedInSelector());
    })

    for(const credentials of incorrectEmail) {

        test('Incorrect email: "' + credentials.email + '"',async ({loginForm}) => {
            
            await actions(loginForm, credentials.email, credentials.password);
            await expect(loginForm.getErrorMessageLocator()).toBeVisible();
        })
    }

    for(const credentials of incorrectEmailFormat) {

        test('Incorrect email format "' + credentials.email + '"',async ({loginForm}) => {
            
            await actions(loginForm, credentials.email, credentials.password);
            const validationMessage = await inputVerification(loginForm.getEmailField());
            expect(validationMessage).not.toEqual('');
        })
    }

    for(const credentials of incorrectPassword) {

        test('Incorrect password: "' + credentials.password + '"',async ({loginForm}) => {
            
            await actions(loginForm, credentials.email, credentials.password);
            await expect(loginForm.getErrorMessageLocator()).toBeVisible();
        })
    }

    test('Blank the email field',async ({loginForm}) => {
        
        await actions(loginForm, '', correct[0].password);
        const validationMessage = await inputVerification(loginForm.getEmailField());
        expect(validationMessage).not.toEqual('');
    })

    test('Blank the password field',async ({loginForm}) => {
        
        await actions(loginForm, correct[0].email, '');
        const validationMessage = await inputVerification(loginForm.getPasswordField());
        expect(validationMessage).not.toEqual('');
    })
})