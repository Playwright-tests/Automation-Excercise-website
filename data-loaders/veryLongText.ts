import { getJSONArray } from "./JSONArray";

export function getVeryLongText(node: string) {

    let JSONArray = getJSONArray('veryLongText');
    let veryLongText: { text: string }[] = [];

    for(const data of JSONArray[node]) {

        let temp = {
            text: data.text
        }

        veryLongText.push(temp);
    }

    return veryLongText;
}