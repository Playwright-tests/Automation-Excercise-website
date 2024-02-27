import { test } from "../../../fixtures/shoppingCart";
import { expect } from "../../../expect/tohaveNotHiddenSelector";
import { expect as nhdExpect} from "../../../expect/tohaveNotHiddenSelector"; 
import { ShoppingCart } from "../../../page-object/shopping-cart/shoppingCart";
import { steps } from "../steps.spec";
import { getActualTotal, getExpectedTotal } from "../../../support/functions";
import { getMax, getMaxMinusOne, getMaxPlusOne, getMin, getMinMinusOne, getMinPlusOne } from "../../../support/quantityFieldUtils";

test.use({shoppingCartOptions: 'byFixture'});

test.describe('Change of product quantity',async () => {

    const index = 0;

    async function actionsForPositiveTests(shoppingCart: ShoppingCart, quantity: string) {

        const expectedTotal = await getExpectedTotal(shoppingCart, index, quantity);
        
        await steps(shoppingCart, index, quantity);     
        await (await shoppingCart.getPage()).waitForSelector(shoppingCart.getShoppingCartProcessing().getAnimationSelector(), {timeout: 4000, state: 'hidden'});
        
        const actualTotal = await getActualTotal(shoppingCart, index);

        await nhdExpect(await shoppingCart.getPage()).toHaveNotHiddenSelector(shoppingCart.getMessageSelector());
        expect(await shoppingCart.getMessageText()).toEqual('Cart updated.');
        expect(actualTotal).toEqual(expectedTotal);
    }

    async function actionsForNegativeTests(shoppingCart: ShoppingCart, quantity: string, expectedMessage: string) {
        
        await steps(shoppingCart, index, quantity);
        await nhdExpect(await shoppingCart.getPage()).toHaveNotHiddenSelector(shoppingCart.getMessageSelector());
        expect(await shoppingCart.getMessageText()).toEqual(expectedMessage);
    }

    test('Min - 1',async ({shoppingCart}) => {
        
        const value = await getMinMinusOne(await shoppingCart.getTable().getQuantityField(index));

        await steps(shoppingCart, index, value);

        const validationMessage = await (await shoppingCart.getTable().getQuantityField(index)).getFieldLocator().evaluate((element) => {
            const input = element as HTMLInputElement;
            return input.validationMessage;
        })

        expect(validationMessage).not.toEqual('');
    })

    test('Min',async ({shoppingCart}) => {
        
        const value = await getMin(await shoppingCart.getTable().getQuantityField(index));
        await actionsForNegativeTests(shoppingCart, value, 'Please enter valid quantity');
    })

    test('Min + 1',async ({shoppingCart}) => {
        
        const value = await getMinPlusOne(await shoppingCart.getTable().getQuantityField(index));
        await actionsForNegativeTests(shoppingCart, value, 'Please enter valid quantity');
    })

    test('Max - 1',async ({shoppingCart}) => {
        
        await actionsForPositiveTests(shoppingCart, getMaxMinusOne());
    })

    test('Max',async ({shoppingCart}) => {
        
        await actionsForPositiveTests(shoppingCart, getMax());
    })

    test('Max + 1',async ({shoppingCart}) => {
        
        await actionsForNegativeTests(shoppingCart, getMaxPlusOne(), 'Please enater valis quantity');
    })

    test('Blank field',async ({shoppingCart}) => {
        
        await actionsForNegativeTests(shoppingCart, '', 'Please enter valid quantity');
    })
})