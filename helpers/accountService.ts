import { Page } from "@playwright/test";
import { LoginForm } from "../page-object/login-form/loginForm";
import { getCredentials } from "../data-loaders/credentials";
import { URLs } from "../enums/URLs";

export class AccountService {

    static async login(page: Page) {
        
        let correctCredentials = getCredentials('correctCredentials');
        let first = correctCredentials[0];

        const loginForm = new LoginForm(page);

        await loginForm.goto(URLs.LoginPage);
        await loginForm.setUsername(first.usernameOrEmail);
        await loginForm.setPassword(first.password);
        await loginForm.clickLoginButton();
    }
}