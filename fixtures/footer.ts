import { test as base } from "@playwright/test";
import { NewsletterForm } from "../page-object/footer/newsletterForm";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";


export const test = base.extend<{newsletterForm: NewsletterForm}>({

    newsletterForm:async ({page}, use) => {
        
        const newsletterForm = new NewsletterForm(page);

        await newsletterForm.goto(URLs.HomePage);
        await use(newsletterForm);
    }
})