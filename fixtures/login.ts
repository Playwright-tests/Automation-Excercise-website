import { test as base } from "@playwright/test";
import { LoginForm } from "../page-object/login-form/loginForm";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";


export const test = base.extend<{loginForm: LoginForm}>({

    loginForm:async ({page}, use) => {
        
        const loginForm = new LoginForm(page);

        await loginForm.goto(URLs.LoginPage);
        await use(loginForm);
    }
})