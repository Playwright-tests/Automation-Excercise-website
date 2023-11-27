import { test as base } from "@playwright/test";
import { LoginForm } from "../page-object/login-form/loginForm.spec";
import { Header } from "../page-object/header/Header.spec";

type LoginFixture = {

    loginForm: LoginForm
}

export const test = base.extend<LoginFixture>({

    loginForm:async ({page}, use) => {
        
        const header = new Header(page);

        await header.goto();
        await header.clickAccountButton();

        const loginForm = new LoginForm(page);

        await use(loginForm);
    }
})

export { expect } from "@playwright/test";