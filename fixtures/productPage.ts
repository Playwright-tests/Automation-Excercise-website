import { test as base } from "@playwright/test";
import { ProductPage } from "../page-object/product-page/productPage";

export { expect } from "@playwright/test";

export const test = base.extend<{url: string} & {productPage: ProductPage}>({

    url: ['noUrl', {option: true}],

    productPage:async ({url, page}, use) => {
        
        const productPage = new ProductPage(page);
        await productPage.goto(url);
        await use(productPage);
    }
})