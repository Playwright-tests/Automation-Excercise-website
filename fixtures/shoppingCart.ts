import { test as base } from "./thumbnail";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";
import { ProductPage } from "../page-object/product-page/productPage";
import { URLs } from "../enums/URLs";
import { ThumbnailCategory } from "../enums/thumbnailCategory";

export { expect } from "@playwright/test";


export type ShoppingCartFixture = {

    shoppingCart: ShoppingCart,
    afterAddingThroughProductPage: ShoppingCart,
    afterAddingThroughThumbnailOnHomepage: ShoppingCart
}

export type ProductPageUrlFixture = {

    productPageUrl: URLs
}

export type ThumbnailCategoryFixture = {

    thumbnailCategory: ThumbnailCategory;
}

export type ProductNameFixture = {

    productName: string
}

export const test = base.extend<ShoppingCartFixture & ProductPageUrlFixture & ThumbnailCategoryFixture & ProductNameFixture>({

    productPageUrl: [URLs.AmariShirtProduct, {option: true}],
    thumbnailCategory: [ThumbnailCategory.AllBlackTops, {option: true}],
    productName: ['none', {option: true}],

    shoppingCart:async ({page, productName}, use) => {
        
        const productPage = new ProductPage(page);
        const shoppingCart = new ShoppingCart(page);

        if(productName !== "none") {

            await productPage.goto(URLs.AmariShirtProduct);
            await (await productPage.getQuantityField()).setQuantity('1');
            await productPage.clickAddToCartButton();
            await shoppingCart.goto(URLs.ShoppingCart);
        }

        await use(shoppingCart);
    }
})