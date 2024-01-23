import { getQuantities } from "../../data-loaders/quantityFieldValues";
import { test } from "../../fixtures/productPage";
import { expect as nhdExpect } from "../../expect/tohaveNotHiddenSelector";
import { steps } from "./steps.spec";
import { getExpectedMessage } from "./helpers.spec";
import { ProductPage } from "../../page-object/product-page/productPage";


const quantities = getQuantities();

test.describe('Quantity field tests',async () => {

    async function actions(productPage: ProductPage, quantity: string) {
        
        await steps(productPage, quantity);
        nhdExpect(await productPage.getPage()).toHaveNotHiddenSelector(productPage.getMessageSelector());
        nhdExpect(await productPage.getMessageContent()).toEqual(await getExpectedMessage(productPage));
    }
    
    test('Minimum',async ({productPage}) => {
        
        await actions(productPage, quantities.min);
    })

    test('Above minimum',async ({productPage}) => {
        
        await actions(productPage, quantities.aboveMin);
    })

    test('Nominal',async ({productPage}) => {
        
        await actions(productPage, quantities.nominal);
    })

    test('Below max',async ({productPage}) => {
        
        await actions(productPage, quantities.belowMax);
    })

    test('Maximum',async ({productPage}) => {
        
        await actions(productPage, quantities.max);
    })

    test('Below minimum',async ({productPage}) => {
        
        await actions(productPage, quantities.belowMin);
    })

    test('Above maximum',async ({productPage}) => {
        
        await actions(productPage, quantities.aboveMax);
    })

    test('Blank field',async ({productPage}) => {
        
        await actions(productPage, quantities.blank);
    })
})