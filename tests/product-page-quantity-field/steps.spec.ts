import { test } from "@playwright/test";
import { ProductPage } from "../../page-object/product-page/productPage";

export async function steps(productPage: ProductPage, value: string) {
    
    await test.step('Enter "' + value + '"in the quantity field',async () => {
        
        await (await productPage.getQuantityField()).setQuantity(value);
    })

    await test.step('Click the "Add to cart" button',async () => {
        
        await productPage.clickAddToCartButton();
    })
}