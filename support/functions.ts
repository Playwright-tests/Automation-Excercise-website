import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";

export async function toLowerCase(text: string | null) {
    
    return text?.toLowerCase();
}

export function removeCurrencySymbol(str: string | null) {

    if(str === null) {

        return 0;
    }

    const trimmed = str?.trim();
    const value = trimmed?.replace('zł', '');

    return value;
}

export function toNumberIfNotZero(str: string | 0) {

    if(str === 0) {

        return 0;
    }

    return parseInt(str, 10);
}

export function toNumberIfNotNull(str: string | null) {

    if(str !== null) {

        return parseInt(str, 10);

    } else {

        console.error('The string is undefined');
    }
}

export async function getExpectedTotal(shoppingCart: ShoppingCart, rowIndex: number, quantity: string) {
    
    const price = toNumberIfNotZero(removeCurrencySymbol(await shoppingCart.getRow(rowIndex).getTotal()));
    const quantityNumber = toNumberIfNotZero(quantity);
    const total = price * quantityNumber;

    if(total < 1000) {

        return total.toString();

    } else {

        return total.toExponential();
    }
}

export async function getActualTotal(shoppingCart: ShoppingCart, rowIndex: number) {
    
    const total = await shoppingCart.getRow(rowIndex).getTotal();
    const withoutCurrency = total?.replace('zł', '');
    const trimmed = withoutCurrency?.trim();
    
    return trimmed;
}