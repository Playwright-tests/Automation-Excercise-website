import { test as base } from "@playwright/test";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart.spec";
import { ProductPage } from "../page-object/product-page/productPage.spec";
import { URLs } from "../enums/URLs.spec";

type ShoppingCartFixture = {

    shoppingCart: ShoppingCart
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

    }
})

export { expect } from "@playwright/test";