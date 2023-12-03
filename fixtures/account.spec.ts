import { test as base } from "@playwright/test";
import { AccountNavigation } from "../page-object/account/accountNavigation.spec";
import { LoginForm } from "../page-object/login-form/loginForm.spec";
import { Header } from "../page-object/header/Header.spec";

type AccountNavigationFixture = {

    accountNavigation: AccountNavigation
}

export const test = base.extend<AccountNavigationFixture>({

    accountNavigation:async ({page}, use) => {
        
        const header = new Header(page);
        const loginForm = new LoginForm(page);
        const accountNavigation = new AccountNavigation(page);

        await header.goto();
        await header.clickAccountButton();

        await loginForm.setUsername('karen@gmail.com');
        await loginForm.setPassword('Kvc$11324#');
        await loginForm.clickLoginButton();

        await use(accountNavigation);
    }
})

export { expect } from "@playwright/test";