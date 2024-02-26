import { expect, test } from "../../fixtures/productPage";
import { expect as nhdExpect } from "../../expect/tohaveNotHiddenSelector";
import { steps } from "./steps.spec";
import { ProductPage } from "../../page-object/product-page/productPage";
import { Numbers } from "../../enums/numbers";


test.describe('Quantity field tests',async () => {

    async function actions(productPage: ProductPage, quantity: string, expectedMessage) {
        
        await steps(productPage, quantity);
        await nhdExpect(await productPage.getPage()).toHaveNotHiddenSelector(productPage.getMessageSelector());
        nhdExpect(await productPage.getMessageContent()).toContain(expectedMessage);
    }

    test('Min - 1', async ({productPage}) => {
        
        let value: number | null = parseInt(await (await productPage.getQuantityField())?.getMin() ?? '') + (-1);
    
        await steps(productPage, value?.toString());

        const validationMessage = await (await productPage.getQuantityField()).getFieldLocator().evaluate((element) => {
            const input = element as HTMLInputElement;
            return input.validationMessage;
        })

        expect(validationMessage).not.toEqual('');
    })
    
    test('Min',async ({productPage}) => {
        
        let value: number | null = parseInt(await (await productPage.getQuantityField())?.getMin() ?? '');

        await actions(productPage, value?.toString(), 'Please enter valid quantity');
    })

    test('Min + 1',async ({productPage}) => {
        
        let value: number | null = parseInt(await (await productPage.getQuantityField())?.getMin() ?? '');
        value += 1;
        
        await actions(productPage, value?.toString(), 'have been added to your cart.');
    })

    test('Max - 1',async ({productPage}) => {
        
        await actions(productPage, (Numbers.MAX_INT_32_BIT - 1).toString(), 'have been added to your cart.');
    })

    test('Max',async ({productPage}) => {
        
        await actions(productPage, Numbers.MAX_INT_32_BIT.toString(), 'have been added to your cart.');
    })

    test('Max + 1',async ({productPage}) => {
                
        await actions(productPage, (Numbers.MAX_INT_32_BIT + 1).toString(), 'Please enter valid quantity');
    })

    test('Blank field',async ({productPage}) => {
        
        await actions(productPage, '', 'Please enter valid quantity');
    })
})