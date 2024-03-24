import { test as base } from "@playwright/test";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";

export { expect } from "@playwright/test";

export const test = base.extend<{shoppingCart: ShoppingCart}>({

    shoppingCart:async ({page}, use) => {
        
        const shoppingCart = new ShoppingCart(page);
        await use(shoppingCart);
    }
}) 