import { Page } from "@playwright/test";
import { Header } from "../page-object/header/Header.spec";
import { LoginForm } from "../page-object/login-form/loginForm.spec";
import { getCredentials } from "../data-loaders/credentials.spec";
import { URLs } from "../enums/URLs.spec";

export class AccountService {

    static async login(page: Page) {
        
        let correctCredentials = getCredentials('correctCredentials');
        let first = correctCredentials[0];

        const loginForm = new LoginForm(page);

        await loginForm.goto(URLs.LoginPage);
        await loginForm.setUsername(first.email);
        await loginForm.setPassword(first.password);
        await loginForm.clickLoginButton();
    }
}