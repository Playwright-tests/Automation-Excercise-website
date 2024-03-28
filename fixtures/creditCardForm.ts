import { test as base } from "@playwright/test";
import { CreditCardForm } from "../page-object/place-order-page/creditCardForm";
import { ProductPage } from "../page-object/product-page/productPage";
import { authentication } from "../support/authentication";
import { getRandomProductURL } from "../support/randomProductURL";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";

export const test = base.extend<{creditCardForm: CreditCardForm}>({

    creditCardForm:async ({page}, use) => {
        
        const productPage = new ProductPage(page)
        await authentication(page);
        await productPage.goto(getRandomProductURL());
        await productPage.clickAddToCartButton();
        await productPage.goto(URLs.PAYMENT_PAGE);
        await use(new CreditCardForm(page));
    }
})