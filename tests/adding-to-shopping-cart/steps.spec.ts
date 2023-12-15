import { test } from "@playwright/test";
import { QuantityField } from "../../page-object/quantity-field/quantityField.spec";
import { ProductPage } from "../../page-object/product-page/productPage.spec";

export async function steps(quantityField: QuantityField, value: string) {
    
    await test.step('Enter "' + value + '"in the quantity field',async () => {
        
        await quantityField.setQuantity(value);
    })
}

export async function check(productPage: ProductPage, title: string) {
    
    const begin = await productPage.getQuantityField().getQuantity() === '1' ? '' : productPage.getQuantityField().getQuantity() + ' x';
    const part = await productPage.getQuantityField().getQuantity() === '1' ? 'has' : 'have';

    const expectedMessage = begin + ' "' + title + '" ' + part + ' been added to your cart';
    console.log(expectedMessage);
}