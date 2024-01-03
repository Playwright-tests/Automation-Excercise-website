import { test, expect } from "../../fixtures/shoppingCart.spec";
import { checkShoppingCartState } from "../../helpers/checkShoppingCart.spec";

const rowIndex = 0;

test.describe('Remove button',async () => {
    
    test('Clicking the remove button',async ({shoppingCart}) => {
        
        const currentCount = await shoppingCart.getRow(rowIndex).getCount();

        await test.step('Click the remove button',async () => {
            
            console.log("Current count: " + currentCount);
            await shoppingCart.getRow(rowIndex).clickRemoveButton();
        })

        const errors = await checkShoppingCartState(shoppingCart, currentCount);

        if(errors.length === 0) {

            expect(true).toBeTruthy();

        } else {

            console.error('Validation errors: ' + errors);
            expect(false).toBeTruthy();
        }
    })
})