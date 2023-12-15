import { test as base } from "@playwright/test";
import { ProductPage } from "../page-object/product-page/productPage.spec";
import { URLs } from "../enums/URLs.spec";

type ProductPageFixture = {

    productPage: ProductPage
}

export const test = base.extend<ProductPageFixture>({

    productPage:async ({page}, use) => {
        
        const productPage = new ProductPage(page);
        await productPage.goto(URLs.AmariShirtProduct);
        await use(productPage);
    }
})

export { expect } from "@playwright/test";