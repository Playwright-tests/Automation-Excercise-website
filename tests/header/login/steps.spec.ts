import { test } from "@playwright/test";
import { LoginForm } from "../../../page-object/login-form/loginForm.spec";

export async function steps(loginForm: LoginForm, credentials: any) {
    
    await test.step('Enter the username',async () => {
        
        await loginForm.setUsername(credentials.email);
    })

    await test.step('Enter the password',async () => {
        
        await loginForm.setPassword(credentials.password);
    })

    await test.step('Click the "Login" button',async () => {
        
        await loginForm.clickLoginButton();
    })
}