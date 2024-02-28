import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";

export async function getExpectedTotal(shoppingCart: ShoppingCart, index: number, quantity: string) {
    
    const total = await shoppingCart.getTable().getTotal(index);
    const totalOnlyDigits = total?.replace(/\D/g, '');
    const quantityNum = parseInt(quantity);
    const totalNum = totalOnlyDigits ? parseInt(totalOnlyDigits) : undefined;
    
    return (totalNum ?? 0) * quantityNum;
}

export async function getActualTotal(shoppingCart: ShoppingCart, index: number) {
    
    const total = await shoppingCart.getTable().getTotal(index);
    
    return total?.replace(/\D/g, '');
}