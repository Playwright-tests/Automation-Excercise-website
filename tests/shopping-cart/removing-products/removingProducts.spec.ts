import { test } from "../../../fixtures/shoppingCart";
import { expect } from "../../../expect/toHaveHiddenSelector";


test.describe('Remove button',async () => {

    const index: number = 0;
    const quantity: string = '0';
    
    test('Clicking the remove button',async ({afterAddingThroughProductPage}) => {

        await test.step('Click the remove button',async () => {
            
            await afterAddingThroughProductPage.getRow(index).clickRemoveButton();
        })

        await expect(await afterAddingThroughProductPage.getPage()).toHaveHiddenSelector(afterAddingThroughProductPage.getTableSelector());
    })

    test('Setting \"' + quantity + '" in the quantity field',async ({afterAddingThroughProductPage}) => {
        
        await test.step('Enter the "' + quantity + '" in the quantity field',async () => {
            
            await (await afterAddingThroughProductPage.getRow(index).getQuantityField()).setQuantity(quantity);
        })

        await test.step('Click the "Update cart" button',async () => {
            
            await afterAddingThroughProductPage.clickUpdateButton();
        })

        await expect(await afterAddingThroughProductPage.getPage()).toHaveHiddenSelector(afterAddingThroughProductPage.getTableSelector());
    })
})