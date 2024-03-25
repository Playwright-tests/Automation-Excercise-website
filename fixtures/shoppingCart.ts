import { test as base } from "@playwright/test";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";

export { expect } from "@playwright/test";

export const test = base.extend<{empty: ShoppingCart}>({

    empty:async ({page}, use) => {
        
        const empty = new ShoppingCart(page);
        await use(empty);
    }
}) 