import { test as base } from "@playwright/test";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";
import { ProductPage } from "../page-object/product-page/productPage";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";


export type ShoppingCartFixture = {

    shoppingCart: ShoppingCart,
    emptyShoppingCart: ShoppingCart
}

export const test = base.extend<ShoppingCartFixture>({

    shoppingCart:async ({page}, use) => {
        
        const productPage = new ProductPage(page);

        await productPage.goto(URLs.AmariShirtProduct);
        await productPage.getQuantityField().setQuantity('1');
        await productPage.clickAddToCartButton();

        const shoppingCart = new ShoppingCart(page);

        await shoppingCart.goto(URLs.ShoppingCart);
        await use(shoppingCart);

    },

    emptyShoppingCart:async ({page}, use) => {
        
        await page.goto(URLs.HomePage);
        const emptyShoppingCart = new ShoppingCart(page);

        await use(emptyShoppingCart);
    }
})