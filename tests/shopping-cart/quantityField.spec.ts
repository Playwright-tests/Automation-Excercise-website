import { getQuantities } from "../../data-loaders/quantityFieldValues.spec";
import { test, expect } from "../../fixtures/shoppingCart.spec";
import { getActualTotal, getExpectedTotal, steps } from "./helpers.spec"

const quantities = getQuantities();

test.describe('Quantity field in the shopping cart',async () => {
    
    test('Minimum',async ({shoppingCart, page}) => {
        
        const expectedTotal = await getExpectedTotal(shoppingCart, quantities.min);

        await steps(page, shoppingCart, 0, quantities.min);
        
        const actualTotal = await getActualTotal(shoppingCart);

        expect(await shoppingCart.getMessageLocator().isVisible()).toBeFalsy();
        expect(actualTotal).toEqual(expectedTotal);
    })

    test('Above minimum',async ({shoppingCart, page}) => {
        
        const expectedTotal = await getExpectedTotal(shoppingCart, quantities.aboveMin);

        await steps(page, shoppingCart, 0, quantities.aboveMin);
        await page.waitForSelector(shoppingCart.getMessageSelector());
        
        const actualTotal = await getActualTotal(shoppingCart);

        expect(await shoppingCart.getMessageText()).toEqual('Cart updated.');
        expect(actualTotal).toEqual(expectedTotal);
    })

    test('Nominal',async ({shoppingCart, page}) => {
        
        const expectedTotal = await getExpectedTotal(shoppingCart, quantities.nominal);

        await steps(page, shoppingCart, 0, quantities.nominal);
        await page.waitForSelector(shoppingCart.getMessageSelector());
        
        const actualTotal = await getActualTotal(shoppingCart);

        expect(await shoppingCart.getMessageText()).toEqual('Cart updated.');
        expect(actualTotal).toEqual(expectedTotal);
    })

    test('Below max',async ({shoppingCart, page}) => {
        
        const expectedTotal = await getExpectedTotal(shoppingCart, quantities.belowMax);

        await steps(page, shoppingCart, 0, quantities.belowMax);
        await page.waitForSelector(shoppingCart.getMessageSelector());
        
        const actualTotal = await getActualTotal(shoppingCart);

        expect(await shoppingCart.getMessageText()).toEqual('Cart updated.');
        expect(actualTotal).toEqual(expectedTotal);
    })

    test('Maximum',async ({shoppingCart, page}) => {
        
        const expectedTotal = await getExpectedTotal(shoppingCart, quantities.max);

        await steps(page, shoppingCart, 0, quantities.max);
        await page.waitForSelector(shoppingCart.getMessageSelector());
        
        const actualTotal = await getActualTotal(shoppingCart);

        expect(await shoppingCart.getMessageText()).toEqual('Cart updated.');
        expect(actualTotal).toEqual(expectedTotal);
    })
})