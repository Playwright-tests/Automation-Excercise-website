import { test as base } from "@playwright/test";
import { LoginForm } from "../page-object/login-form/loginForm.spec";
import { Header } from "../page-object/header/Header.spec";
import { URLs } from "../enums/URLs.spec";

type LoginFixture = {

    loginForm: LoginForm
}

export const test = base.extend<LoginFixture>({

    loginForm:async ({page}, use) => {
        
        const loginForm = new LoginForm(page);

        await loginForm.goto(URLs.LoginPage);
        await use(loginForm);
    }
})

export { expect } from "@playwright/test";