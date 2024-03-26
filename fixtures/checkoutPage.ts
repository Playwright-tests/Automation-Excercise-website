import { test as base } from "@playwright/test";
import { CheckoutPage } from "../page-object/checkout-page/checkoutPage";
import { authentication } from "../support/authentication";
import { fillShoppingCart } from "../support/shoppingCartFilling";
import { URLs } from "../enums/URLs";
import { getRandomProductURL } from "../support/randomProductURL";
import { ProductPage } from "../page-object/product-page/productPage";

export { expect } from "@playwright/test";

export const test = base.extend<{checkoutPage: CheckoutPage} & {withoutProduct: CheckoutPage} & 
                                {withProduct: CheckoutPage}>({

    checkoutPage:async ({page}, use) => {
        
        const checkoutPage = new CheckoutPage(page);
        await authentication(page);
        await fillShoppingCart(page);
        await page.goto(URLs.CHECKOUT_PAGE);
        await use(checkoutPage);
    },

    withoutProduct:async ({page}, use) => {
        
        await authentication(page);
        await page.goto(getRandomProductURL());
        use(new CheckoutPage(page));
    },

    withProduct:async ({page}, use) => {
        
        const productPage = new ProductPage(page)
        await authentication(page);
        await productPage.goto(getRandomProductURL());
        await productPage.clickAddToCartButton();
        await productPage.goto(URLs.CHECKOUT_PAGE);
        await use(new CheckoutPage(page));
    }
})