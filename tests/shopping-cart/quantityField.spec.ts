import { getQuantities } from "../../data-loaders/quantityFieldValues.spec";
import { test, expect } from "../../fixtures/shoppingCart.spec";
import { getActualTotal, getExpectedTotal, steps } from "./helpers.spec"

const quantities = getQuantities();
const rowIndex = 0;


test.describe('Quantity field in the shopping cart',async () => {
    
    test('Minimum',async ({shoppingCart, page}) => {
        
        const expectedTotal = await getExpectedTotal(shoppingCart, rowIndex, quantities.min);

        await steps(shoppingCart, rowIndex, quantities.min);
        
        const actualTotal = await getActualTotal(shoppingCart, rowIndex);

        expect(await shoppingCart.getMessageLocator().isVisible()).toBeFalsy();
        expect(actualTotal).toEqual(expectedTotal);
    })

    test('Above minimum',async ({shoppingCart, page}) => {
        
        const expectedTotal = await getExpectedTotal(shoppingCart, rowIndex, quantities.aboveMin);

        await steps(shoppingCart, rowIndex, quantities.aboveMin);
        await page.waitForSelector(shoppingCart.getMessageSelector());
        
        const actualTotal = await getActualTotal(shoppingCart, rowIndex);

        expect(await shoppingCart.getMessageText()).toEqual('Cart updated.');
        expect(actualTotal).toEqual(expectedTotal);
    })

    test('Nominal',async ({shoppingCart, page}) => {
        
        const expectedTotal = await getExpectedTotal(shoppingCart, rowIndex, quantities.nominal);

        await steps(shoppingCart, rowIndex, quantities.nominal);
        await page.waitForSelector(shoppingCart.getMessageSelector());
        
        const actualTotal = await getActualTotal(shoppingCart, rowIndex);

        expect(await shoppingCart.getMessageText()).toEqual('Cart updated.');
        expect(actualTotal).toEqual(expectedTotal);
    })

    test('Below max',async ({shoppingCart, page}) => {
        
        const expectedTotal = await getExpectedTotal(shoppingCart, rowIndex, quantities.belowMax);

        await steps(shoppingCart, rowIndex, quantities.belowMax);
        await page.waitForSelector(shoppingCart.getMessageSelector());
        
        const actualTotal = await getActualTotal(shoppingCart, rowIndex);

        expect(await shoppingCart.getMessageText()).toEqual('Cart updated.');
        expect(actualTotal).toEqual(expectedTotal);
    })

    test('Maximum',async ({shoppingCart, page}) => {
        
        const expectedTotal = await getExpectedTotal(shoppingCart, rowIndex, quantities.max);

        await steps(shoppingCart, rowIndex, quantities.max);
        await page.waitForSelector(shoppingCart.getMessageSelector());
        
        const actualTotal = await getActualTotal(shoppingCart, rowIndex);

        expect(await shoppingCart.getMessageText()).toEqual('Cart updated.');
        expect(actualTotal).toEqual(expectedTotal);
    })

    test('Zero',async ({shoppingCart, page}) => {
        
        await steps(shoppingCart, rowIndex, quantities.belowMin);
        await page.waitForSelector(shoppingCart.getMessageSelector());

        expect(await shoppingCart.getMessageText()).toEqual('Cart updated.');
        expect(await shoppingCart.getCartEmptyLocator().isVisible()).toBeTruthy();
    })

    test('Blank field',async ({shoppingCart, page}) => {
        
        await steps(shoppingCart, rowIndex, quantities.blank);
        const element = await page.waitForSelector(shoppingCart.getMessageSelector(), {timeout: 5000}).catch(() => null);

        if(element) {

            expect(false).toBeTruthy();

        } else {

            expect(true).toBeTruthy();
        }
    })
})