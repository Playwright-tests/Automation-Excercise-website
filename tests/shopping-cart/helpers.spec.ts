import { Page, test, expect } from "@playwright/test";
import { ShoppingCart } from "../../page-object/shopping-cart/shoppingCart.spec";
import { removeCurrencySymbol, toNumber } from "../../utils/toNumber.spec";

export async function steps(page: Page, shoppingCart: ShoppingCart, index: number, quantity: string) {

    await test.step('Enter "' + quantity + '"in the quantity field',async () => {
        
        await (await shoppingCart.getRow().getQuantityField(index)).setQuantity(quantity);
    })

    await test.step('Click the "Update cart" button',async () => {
        
        await shoppingCart.clickUpdateButton();
    })
}

export async function getExpectedTotal(shoppingCart: ShoppingCart, quantity: string) {
    
    const price = toNumber(removeCurrencySymbol(await shoppingCart.getRow().getTotal(0)));
    const quantityNumber = toNumber(quantity);
    const total = price * quantityNumber;

    if(total < 1000) {

        return total.toString();

    } else {

        return total.toExponential();
    }
}

export async function getActualTotal(shoppingCart: ShoppingCart) {
    
    const total = await shoppingCart.getRow().getTotal(0);
    const withoutCurrency = total?.replace('zł', '');
    const trimmed = withoutCurrency?.trim();
    
    return trimmed;
}