import { Numbers } from "../enums/numbers";
import { QuantityField } from "../page-object/quantity-field/quantityField";

export async function getMinMinusOne(quantityField: QuantityField) {

    let value: number | null = parseInt(await quantityField?.getMin() ?? '') + (-1);

    return value?.toString();
}

export async function getMin(quantityField: QuantityField) {
    
    let value: number | null = parseInt(await quantityField?.getMin() ?? '');

    return value?.toString();
}

export async function getMinPlusOne(quantityField: QuantityField) {
    
    let value: number | null = parseInt(await quantityField?.getMin() ?? '') - (-1);

    return value?.toString();
}

export function getMaxMinusOne() {
    
    return (Numbers.MAX_INT_32_BIT - 1).toString();
}

export function getMax() {
    
    return (Numbers.MAX_INT_32_BIT).toString();
}

export function getMaxPlusOne() {
    
    return (Numbers.MAX_INT_32_BIT + 1).toString();
}