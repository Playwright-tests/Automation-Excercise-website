import { test as base } from "@playwright/test";
import { NewsletterForm } from "../page-object/base/footer/newsletterForm.spec";


type NewsletterFixture = {

    newsletterForm: NewsletterForm
}

export const test = base.extend<NewsletterFixture>({

    newsletterForm:async ({page}, use) => {
        
        const newsletterForm = new NewsletterForm(page);

        await newsletterForm.goto();
        await use(newsletterForm);
    }
})

export { expect } from "@playwright/test";