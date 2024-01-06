import { getQuantities } from "../../data-loaders/quantityFieldValues";
import { test } from "../../fixtures/productPage";
import { check, getExpectedMessage, steps } from "./helpers.spec";

const quantities = getQuantities();

test.describe('Quantity field tests',async () => {
    
    test('Minimum',async ({productPage}) => {
        
        await steps(productPage, quantities.min);
        await check(productPage, await getExpectedMessage(productPage));

    })

    test('Above minimum',async ({productPage}) => {
        
        await steps(productPage, quantities.aboveMin);
        await check(productPage, await getExpectedMessage(productPage));
    })

    test('Nominal',async ({productPage}) => {
        
        await steps(productPage, quantities.nominal);
        await check(productPage, await getExpectedMessage(productPage));
    })

    test('Below max',async ({productPage}) => {
        
        await steps(productPage, quantities.belowMax);
        await check(productPage, await getExpectedMessage(productPage));

    })

    test('Maximum',async ({productPage}) => {
        
        await steps(productPage, quantities.max);
        await check(productPage, await getExpectedMessage(productPage));
    })

    test('Below minimum',async ({productPage}) => {
        
        await steps(productPage, quantities.belowMin);
        await check(productPage, 'Please enter a valid quantity');
    })

    test('Above maximum',async ({productPage}) => {
        
        await steps(productPage, quantities.aboveMax);
        await check(productPage, 'Please enter a valid quantity');
    })

    test('Blank field',async ({productPage}) => {
        
        await steps(productPage, quantities.blank);
        await check(productPage, 'Please enter a quantity');
    })
})