import { test } from "@playwright/test";
import { NewsletterForm } from "../../../page-object/footer/newsletterForm.spec";

export async function steps(newsletterForm: NewsletterForm, credentials: any, func: any) {
    
    await test.step('Enter the name',async () => {
        
        await newsletterForm.setName(credentials.name);
    })

    await test.step('Enter the email',async () => {
        
        await newsletterForm.setEmail(credentials.email);
    })

    func;

    await test.step('Click the "Subscribe" button',async () => {
        
        await newsletterForm.clickSubscribeButton();
    })
}