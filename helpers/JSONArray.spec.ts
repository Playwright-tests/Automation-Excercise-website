import { JSONReader } from "../json-reader/JSONReader.spec";

export function getJSONArray(key: string) {

    let testdata = JSONReader.get();
    let JSONArray = testdata[key];

    return JSONArray;
}