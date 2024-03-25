import { test as base } from "@playwright/test";
import { ProductPage } from "../page-object/product-page/productPage";

export { expect } from "@playwright/test";

export const test = base.extend<{url: string} & {hidden: ProductPage} & {visible: ProductPage}>({

    url: ['noUrl', {option: true}],

    hidden:async ({page, url}, use) => {
        
        const hidden = new ProductPage(page);
        await hidden.goto(url);
        await use(hidden);
    },

    visible:async ({page, url}, use) => {
        
        const visible = new ProductPage(page);
        await visible.goto(url);
        await visible.clickAddToCartButton();
        await use(visible)
    }
})