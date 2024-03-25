import { Page } from "@playwright/test";
import { getCredentials } from "../testdata-IO/testdataLoader"
import { Credentials } from "../types/types"
import { LoginForm } from "../page-object/login-form/loginForm";
import { URLs } from "../enums/URLs";

export async function authentication(page: Page) {

    const credentials: Credentials[] = getCredentials('correct');
    const loginForm = new LoginForm(page);
    await page.goto(URLs.LOGIN_PAGE);
    await loginForm.setEmail(credentials[0].email);
    await loginForm.setPassword(credentials[0].password);
    await loginForm.clickButton();
}