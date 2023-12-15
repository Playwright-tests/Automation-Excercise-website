import { getQuantityFieldValues } from "../../data-loaders/quantityFieldValues.spec";
import { test, expect } from "../../fixtures/productPage.spec";
import { check, steps } from "./steps.spec";

const quantityFieldValues = getQuantityFieldValues();

test.describe('Quantity field tests',async () => {
    
    test('Minimum',async ({productPage, page}) => {
        
        await steps(productPage.getQuantityField(), quantityFieldValues.min);
        await check(productPage, 'Manago Shirt');

    })

    test('Above minimum',async ({productPage, page}) => {
        
        steps(productPage.getQuantityField(), quantityFieldValues.aboveMin);
    })

    test('Nominal',async ({productPage, page}) => {
        
        steps(productPage.getQuantityField(), quantityFieldValues.nominal);
    })

    test('Below max',async ({productPage, page}) => {
        
        await steps(productPage.getQuantityField(), quantityFieldValues.belowMax);
        await check(productPage, 'Manago Shirt');

    })

    test('Maximum',async ({productPage, page}) => {
        
        steps(productPage.getQuantityField(), quantityFieldValues.max);
    })

    test('Below zero',async ({productPage, page}) => {
        
        steps(productPage.getQuantityField(), quantityFieldValues.belowZero);
    })

    test('Above maximum',async ({productPage, page}) => {
        
        steps(productPage.getQuantityField(), quantityFieldValues.aboveMax);
    })
})