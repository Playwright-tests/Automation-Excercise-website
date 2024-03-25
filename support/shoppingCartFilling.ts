import { Page } from "@playwright/test";
import { ProductPage } from "../page-object/product-page/productPage";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";
import { getRandomProductURL } from "./randomProductURL";

export async function fillShoppingCart(page: Page) {
    
    const productPage = new ProductPage(page);
        const shoppingCart = new ShoppingCart(page);
        const productPageUrl = getRandomProductURL();
        await page.goto(productPageUrl);
        await productPage.clickAddToCartButton();
        await page.waitForSelector(productPage.getConfirmModalDialog().getSelector());
}