import { test as base } from "@playwright/test";
import { CheckoutPage } from "../page-object/checkout-page/checkoutPage.spec";
import { ProductPage } from "../page-object/product-page/productPage.spec";
import { URLs } from "../enums/URLs.spec";

type CheckoutPageFixture = {

    checkoutPage: CheckoutPage
}

export const test = base.extend<CheckoutPageFixture>({

    checkoutPage:async ({page}, use) => {
        
        const productPage = new ProductPage(page);

        await productPage.goto(URLs.AmariShirtProduct);
        await productPage.getQuantityField().setQuantity('1');
        await productPage.clickAddToCartButton();

        const checkoutPage = new CheckoutPage(page);

        await checkoutPage.goto(URLs.CheckoutPage);
        await use(checkoutPage);
    }
})

export { expect } from "@playwright/test";