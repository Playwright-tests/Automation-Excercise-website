import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";

export async function checkShoppingCartState(shoppingCart: ShoppingCart, oldCount: number) {
    
    const errors: string[] = [];
    const expectedCount = oldCount - 1;

    if(!await shoppingCart.getCartEmptyLocator().isVisible()) {
        errors.push('The message about empty shopping cart is not displayed');
    }

    if(await shoppingCart.getRow(0).getCount() > oldCount) {
        errors.push('Product has not been removed from the shopping cart- expected: "' + expectedCount + '", received: "' + await shoppingCart.getRow(0).getCount());
    }

    return errors;
}