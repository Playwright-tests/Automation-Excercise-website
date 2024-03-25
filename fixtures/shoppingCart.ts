import { test as base } from "@playwright/test";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";
import { fillShoppingCart } from "../support/shoppingCartFilling";
import { URLs } from "../enums/URLs";
import { authentication } from "../support/authentication";

export { expect } from "@playwright/test";

export const test = base.extend<{empty: ShoppingCart} & {authenticated: ShoppingCart}>({

    empty:async ({page}, use) => {
        
        const empty = new ShoppingCart(page);
        await use(empty);
    },

    authenticated:async ({page}, use) => {
        
        const authenticated = new ShoppingCart(page);
        await authentication(page);
        await fillShoppingCart(page);
        await page.goto(URLs.SHOPPING_CART_PAGE);
        await use(authenticated);
    }
}) 