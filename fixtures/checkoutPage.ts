import { test as base } from "@playwright/test";
import { CheckoutPage } from "../page-object/checkout-page/checkoutPage";
import { authentication } from "../support/authentication";
import { fillShoppingCart } from "../support/shoppingCartFilling";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";

export const test = base.extend<{checkoutPage: CheckoutPage}>({

    checkoutPage:async ({page}, use) => {
        
        const checkoutPage = new CheckoutPage(page);
        await authentication(page);
        await fillShoppingCart(page);
        await page.goto(URLs.CHECKOUT_PAGE);
        await use(checkoutPage);
    }
})