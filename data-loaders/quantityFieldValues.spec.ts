import { getJSONArray } from "./JSONArray.spec";

export function getQuantities() {

    let JSONObject = getJSONArray('quantityFieldValues');
    let quantityFieldValues: {

        min: string,
        aboveMin: string,
        nominal: string,
        belowMax: string,
        max: string,
        belowMin: string,
        belowZero: string,
        aboveMax: string,
        blank: string
    };

    quantityFieldValues = {

        min: JSONObject.min,
        aboveMin: JSONObject.aboveMin,
        nominal: JSONObject.nominal,
        belowMax: JSONObject.belowMax,
        max: JSONObject.max,
        belowMin: JSONObject.belowMin,
        belowZero: JSONObject.belowZero,
        aboveMax: JSONObject.aboveMax,
        blank: JSONObject.blank
    }

    return quantityFieldValues;
}

export function getQuantities2() {

    let JSONArray = getJSONArray('quantityField');
    let quantityFieldValues: { quantity: string, message: string }[] = [];

    for(const data of JSONArray) {

        let temp = {
            quantity: data.quantity,
            message: data.message
        }

        quantityFieldValues.push(temp);
    }

    return quantityFieldValues;
}