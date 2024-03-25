import { test as base } from "@playwright/test";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";
import { fillShoppingCart } from "../support/shoppingCartFilling";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";

export const test = base.extend<{hidden: ShoppingCart} & {visible: ShoppingCart}>({

    hidden:async ({page}, use) => {
        
        const hidden = new ShoppingCart(page);
        await fillShoppingCart(page);
        await page.goto(URLs.SHOPPING_CART_PAGE);
        await use(hidden);
    },

    visible:async ({page}, use) => {
        
        const visible = new ShoppingCart(page);
        await fillShoppingCart(page);
        await page.goto(URLs.SHOPPING_CART_PAGE);
        await visible.clickCheckoutButton();
        await use(visible);
    }
})