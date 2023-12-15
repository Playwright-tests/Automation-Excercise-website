import { test, expect } from "@playwright/test";
import { ProductPage } from "../../page-object/product-page/productPage.spec";

export async function steps(productPage: ProductPage, value: string) {
    
    await test.step('Enter "' + value + '"in the quantity field',async () => {
        
        await productPage.getQuantityField().setQuantity(value);
    })

    await test.step('Click the "Add to cart" button',async () => {
        
        await productPage.clickAddToCartButton();
    })
}

export async function getExpectedMessage(productPage: ProductPage) {
    
    const begin = await productPage.getQuantityField().getQuantity() === '1' ? '' : ' ' + await productPage.getQuantityField().getQuantity() + ' ×';
    const verb = await productPage.getQuantityField().getQuantity() === '1' ? 'has' : 'have';

    return 'View cart' + begin + ' “' + await productPage.getProductTitle() + '” ' + verb + ' been added to your cart.';
}

export async function check(productPage: ProductPage, expectedMessage: string) {
    
    expect(await productPage.getMessage()).toEqual(expectedMessage);
}