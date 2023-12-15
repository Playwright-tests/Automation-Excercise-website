import { getJSONArray } from "./JSONArray.spec";

export function getQuantityFieldValues() {

    let JSONObject = getJSONArray('quantityFieldValues');
    let quantityFieldValues: {

        min: string,
        aboveMin: string,
        nominal: string,
        belowMax: string,
        max: string,
        belowZero: string,
        aboveMax: string
    };

    quantityFieldValues = {

        min: JSONObject.min,
        aboveMin: JSONObject.aboveMin,
        nominal: JSONObject.nominal,
        belowMax: JSONObject.belowMax,
        max: JSONObject.max,
        belowZero: JSONObject.belowZero,
        aboveMax: JSONObject.aboveMax
    }

    return quantityFieldValues;
}