import { test } from "@playwright/test";
import { NewsletterForm } from "../../../page-object/footer/newsletterForm";

export async function nameFieldStep(newsletterForm: NewsletterForm, name: string) {
    
    await test.step('Enter the "' + name + '"',async () => {
        
        await newsletterForm.setName(name);
    })
}

export async function emailFieldStep(newsletterForm: NewsletterForm, email: string) {
    
    await test.step('Enter the "' + email + '"',async () => {
        
        await newsletterForm.setEmail(email);
    })
}