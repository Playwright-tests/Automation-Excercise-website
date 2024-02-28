import { Page } from "@playwright/test";
import { LoginForm } from "../page-object/login-form/loginForm";
import { CredentialsDataProvider } from "../data-loaders/dataProviders";
import { TestScenarios } from "../enums/testScenarios";
import { URLs } from "../enums/URLs";

export async function login(page: Page) {
    
    const credentials = CredentialsDataProvider.get();
    const loginForm = new LoginForm(page);

    await loginForm.goto(URLs.LoginPage);
    await loginForm.setUsername(credentials[TestScenarios.CORRECT].emailOrUsername);
    await loginForm.setPassword(credentials[TestScenarios.CORRECT].password);
    await loginForm.clickLoginButton();
}