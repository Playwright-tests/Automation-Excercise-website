import { test as base } from "./thumbnail";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";
import { ProductPage } from "../page-object/product-page/productPage";
import { URLs } from "../enums/URLs";
import { ThumbnailCategory } from "../enums/thumbnailCategory";
import { ProductThumbnail } from "../page-object/thumbnail/productThumbnail";
import { Product } from "../helpers/product";

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
    productName: ['Black Top', {option: true}],

    shoppingCart:async ({page}, use) => {
        
        const productPage = new ProductPage(page);

        await productPage.goto(URLs.AmariShirtProduct);
        await productPage.getQuantityField().setQuantity('1');
        await productPage.clickAddToCartButton();

        const shoppingCart = new ShoppingCart(page);

        await shoppingCart.goto(URLs.ShoppingCart);
        await use(shoppingCart);

    },

    afterAddingThroughThumbnailOnHomepage:async ({page, thumbnailFactory, thumbnailCategory}, use) => {
        
        const thumbnail = thumbnailFactory.createThumbnail(page, thumbnailCategory, "Black Top") as ProductThumbnail;

        await thumbnail.goto(URLs.HomePage);

        Product.init(await thumbnail.getLinkText(), await thumbnail.getPrice());

        thumbnail.clickAddToCartButton();
        await (await thumbnail.getPage()).waitForSelector(thumbnail.getViewCartButtonSelector());
        await thumbnail.goto(URLs.ShoppingCart);

        const afterAddingThroughProductPage = new ShoppingCart(page);

        await use(afterAddingThroughProductPage);
    },

    afterAddingThroughProductPage:async ({page, productPageUrl}, use) => {
      
        const productPage = new ProductPage(page);
        await productPage.goto(productPageUrl);
        await productPage.getQuantityField().setQuantity('1');

        Product.init(await productPage.getProductTitle(), await productPage.getProductPrice());

        await productPage.clickAddToCartButton();
        const afterAddingThroughProductPage = new ShoppingCart(page);
        await afterAddingThroughProductPage.goto(URLs.ShoppingCart);
        await use(afterAddingThroughProductPage);
    },
})