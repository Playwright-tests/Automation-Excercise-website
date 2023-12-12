import { test as base } from "@playwright/test";
import { NewsletterForm } from "../page-object/footer/newsletterForm.spec";
import { URLs } from "../enums/URLs.spec";


type NewsletterFixture = {

    newsletterForm: NewsletterForm
}

export const test = base.extend<NewsletterFixture>({

    newsletterForm:async ({page}, use) => {
        
        const newsletterForm = new NewsletterForm(page);

        await newsletterForm.goto(URLs.HomePage);
        await use(newsletterForm);
    }
})

export { expect } from "@playwright/test";