import { Page } from "@playwright/test";
import { LoginForm } from "../page-object/login-form/loginForm";
import { URLs } from "../enums/URLs";
import { LoginTestdataLoader } from "../data-loaders/mockarooDataLoaders";

export class AccountService {

    static async login(page: Page) {
        
        LoginTestdataLoader.init();

        const loginForm = new LoginForm(page);

        await loginForm.goto(URLs.LoginPage);
        await loginForm.setUsername(await LoginTestdataLoader.correct.username);
        await loginForm.setPassword(await LoginTestdataLoader.correct.password);
        await loginForm.clickLoginButton();
    }
}