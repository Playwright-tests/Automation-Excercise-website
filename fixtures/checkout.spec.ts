import { test as base } from "@playwright/test";
import { CheckoutPage } from "../page-object/checkout-page/checkoutPage.spec";
import { ProductPage } from "../page-object/product-page/productPage.spec";
import { URLs } from "../enums/URLs.spec";

export { expect } from "@playwright/test";

type CheckoutPageFixture = {

    checkoutPage: CheckoutPage
}

type LoginFormExpanded = {

    loginFormExpanded: CheckoutPage
}

type CouponFormExpanded = {

    couponFormExpanded: CheckoutPage
}

export const test = base.extend<CheckoutPageFixture & LoginFormExpanded & CouponFormExpanded>({

    checkoutPage:async ({page}, use) => {
        
        const productPage = new ProductPage(page);

        await productPage.goto(URLs.AmariShirtProduct);
        await productPage.getQuantityField().setQuantity('1');
        await productPage.clickAddToCartButton();

        const checkoutPage = new CheckoutPage(page);

        await checkoutPage.goto(URLs.CheckoutPage);
        await use(checkoutPage);
    },

    loginFormExpanded:async ({checkoutPage}, use) => {
        
        await checkoutPage.clickLoginLink();
        const loginFormExpanded = checkoutPage;

        await use(loginFormExpanded);
    },

    couponFormExpanded:async ({checkoutPage}, use) => {
        
        await checkoutPage.clickCouponCodeLink();
        const couponFormExpanded = checkoutPage;

        await use(couponFormExpanded);
    }
})