import { getQuantities } from "../../../data-loaders/quantityFieldValues";
import { test } from "../../../fixtures/shoppingCart";
import { expect } from "../../../expect/tohaveNotHiddenSelector";
import { ShoppingCart } from "../../../page-object/shopping-cart/shoppingCart";
import { steps } from "../steps.spec";
import { getActualTotal, getExpectedTotal } from "../../../support/functions";

const quantities = getQuantities();


test.describe('Change of product quantity',async () => {

    const index = 0;

    async function actions(shoppingCart: ShoppingCart, quantity: string) {

        const expectedTotal = await getExpectedTotal(shoppingCart, index, quantity);
        await steps(shoppingCart, index, quantity);     
        await (await shoppingCart.getPage()).waitForSelector(shoppingCart.getShoppingCartProcessing().getAnimationSelector(), {timeout: 4000, state: 'hidden'});
        
        const actualTotal = await getActualTotal(shoppingCart, index);
        expect(await shoppingCart.getMessageLocator().isVisible()).toBeTruthy();
        expect(actualTotal).toEqual(expectedTotal);
    }

    test('Minimum',async ({afterAddingThroughProductPage}) => {
        
        await actions(afterAddingThroughProductPage, quantities.min);
    })

    test('Above minimum',async ({afterAddingThroughProductPage}) => {
        
        await actions(afterAddingThroughProductPage, quantities.aboveMin);
    })

    test('Nominal',async ({afterAddingThroughProductPage}) => {
        
        await actions(afterAddingThroughProductPage, quantities.nominal);
    })

    test('Below max',async ({afterAddingThroughProductPage}) => {
        
        await actions(afterAddingThroughProductPage, quantities.belowMax);
    })

    test('Maximum',async ({afterAddingThroughProductPage}) => {
        
        await actions(afterAddingThroughProductPage, quantities.max);
    })

    test('Blank field',async ({afterAddingThroughProductPage}) => {
        
        await steps(afterAddingThroughProductPage, index, quantities.blank);
        await expect(await afterAddingThroughProductPage.getPage()).toHaveNotHiddenSelector(afterAddingThroughProductPage.getMessageSelector());
        expect(await afterAddingThroughProductPage.getMessageText()).toEqual('Please enter the quantity');
    })
})