import { expect, test } from "../../../fixtures/productPage";
import { expect as nhdExpect } from "../../../expect/tohaveNotHiddenSelector";
import { steps } from "./steps.spec";
import { ProductPage } from "../../../page-object/product-page/productPage";
import { getMax, getMaxMinusOne, getMaxPlusOne, getMin, getMinMinusOne, getMinPlusOne } from "../../../support/quantityFieldUtils";


test.describe('Quantity field tests',async () => {

    async function actions(productPage: ProductPage, quantity: string, expectedMessage) {
        
        await steps(productPage, quantity);
        await nhdExpect(await productPage.getPage()).toHaveNotHiddenSelector(productPage.getMessageSelector());
        nhdExpect(await productPage.getMessageContent()).toContain(expectedMessage);
    }

    test('Min - 1', async ({productPage}) => {
    
        const value = await getMinMinusOne(await productPage.getQuantityField());

        await steps(productPage, value);

        const validationMessage = await (await productPage.getQuantityField()).getFieldLocator().evaluate((element) => {
            const input = element as HTMLInputElement;
            return input.validationMessage;
        })

        expect(validationMessage).not.toEqual('');
    })
    
    test('Min',async ({productPage}) => {
        
        const value = await getMin(await productPage.getQuantityField());

        await actions(productPage, value, 'Please enter valid quantity');
    })

    test('Min + 1',async ({productPage}) => {
        
        const value = await getMinPlusOne(await productPage.getQuantityField());

        await actions(productPage, value, 'have been added to your cart.');
    })

    test('Max - 1',async ({productPage}) => {
        
        await actions(productPage, getMaxMinusOne(), 'have been added to your cart.');
    })

    test('Max',async ({productPage}) => {
        
        await actions(productPage, getMax(), 'have been added to your cart.');
    })

    test('Max + 1',async ({productPage}) => {
                
        await actions(productPage, getMaxPlusOne(), 'Please enter valid quantity');
    })

    test('Blank field',async ({productPage}) => {
        
        await actions(productPage, '', 'Please enter valid quantity');
    })
})