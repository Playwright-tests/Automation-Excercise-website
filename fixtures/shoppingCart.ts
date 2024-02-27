import { test as base } from "./thumbnail";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";
import { ProductPage } from "../page-object/product-page/productPage";
import { URLs } from "../enums/URLs";
import { ThumbnailCategory } from "../enums/thumbnailCategory";

export { expect } from "@playwright/test";


export type ShoppingCartFixture = {

    shoppingCart: ShoppingCart
}

export type ProductPageUrlFixture = {

    productPageUrl: URLs
}

export type ThumbnailCategoryFixture = {

    thumbnailCategory: ThumbnailCategory;
}

export type ShoppingCartOptionsFixture = {

    shoppingCartOptions: string
}

export const test = base.extend<ShoppingCartFixture & ShoppingCartOptionsFixture>({

    shoppingCartOptions: ['byCode', {option: true}],

    shoppingCart:async ({page, shoppingCartOptions}, use) => {
        
        const productPage = new ProductPage(page);
        const shoppingCart = new ShoppingCart(page);

        if(shoppingCartOptions !== "byCode") {

            await productPage.goto(URLs.AmariShirtProduct);
            await (await productPage.getQuantityField()).setQuantity('1');
            await productPage.clickAddToCartButton();
            await shoppingCart.goto(URLs.ShoppingCart);
            await shoppingCart.getTable().findRows();
        }

        await use(shoppingCart);
    }
})