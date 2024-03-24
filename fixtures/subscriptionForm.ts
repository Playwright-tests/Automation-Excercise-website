import { test as base } from "@playwright/test";
import { SubscriptionForm } from "../page-object/subscription-form/subscriptionForm";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";

export const test = base.extend<{subscriptionForm: SubscriptionForm}>({

    subscriptionForm:async ({page}, use) => {
        
        const subscriptionForm = new SubscriptionForm(page);
        await subscriptionForm.goto(URLs.HOME_PAGE);
        await use(subscriptionForm);
    }
})