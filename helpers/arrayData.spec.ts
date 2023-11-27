import { getJSONArray } from "./JSONArray.spec";

export function getArrayData(key: string, node: string) {

    let JSONArray = getJSONArray(key);
    let arrayData: string[] = [];

    for(const datum of JSONArray[node]) {

        arrayData.push(datum);
    }

    return arrayData;
}