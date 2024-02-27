import { test } from "@playwright/test";
import { ShoppingCart } from "../../page-object/shopping-cart/shoppingCart";

export async function steps(shoppingCart: ShoppingCart, index: number, quantity: string) {

    await test.step('Enter "' + quantity + '"in the quantity field',async () => {
        
        await (await shoppingCart.getTable().getQuantityField(index)).setQuantity(quantity);
        //await (await shoppingCart.getRow(index).getQuantityField()).setQuantity(quantity);
    })

    await test.step('Click the "Update cart" button',async () => {
        
        await shoppingCart.clickUpdateButton();
    })
}