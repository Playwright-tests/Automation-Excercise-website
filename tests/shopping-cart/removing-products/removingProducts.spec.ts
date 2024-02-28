import { test } from "../../../fixtures/shoppingCart";
import { expect } from "../../../expect/toHaveHiddenSelector";

test.use({shoppingCartOptions: 'byFixture'});

test.describe('Remove product from the shopping cart',async () => {

    const index: number = 0;
    
    test('Removing a product by clicking the remove button',async ({shoppingCart}) => {

        await test.step('Click the remove button',async () => {
            
            await shoppingCart.getTable().clickRemoveButton(index);  
        })

        await expect(await shoppingCart.getPage()).toHaveHiddenSelector(shoppingCart.getTableSelector());
    })

    test('Removing a product by setting the zero value in the quantity field',async ({shoppingCart}) => {
        
        await test.step('Enter the zero value in the quantity field',async () => {
            
            await ((await shoppingCart.getTable().getQuantityField(index)).setQuantity('0'));
        })

        await test.step('Click the "Update cart" button',async () => {
            
            await shoppingCart.clickUpdateButton();
        })

        await expect(await shoppingCart.getPage()).toHaveHiddenSelector(shoppingCart.getTableSelector());
    })
})