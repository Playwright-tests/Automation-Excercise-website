import { test as base } from "@playwright/test";
import { ProductPage } from "../page-object/product-page/productPage";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";


export const test = base.extend<{productPage: ProductPage}>({

    productPage:async ({page}, use) => {
        
        const productPage = new ProductPage(page);
        await productPage.goto(URLs.AmariShirtProduct);
        await use(productPage);
    }
})