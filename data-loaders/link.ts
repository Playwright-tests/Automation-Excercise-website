import { getJSONArray } from "./JSONArray";

export function getLinkData(node: string) {

    let JSONArray = getJSONArray('URLs');
    let links: { linkText: string, url: string }[] = [];

    for(const data of JSONArray[node]) {

        let temp = {
            linkText: data.linkText,
            url: data.pageURL
        }

        links.push(temp);
    }

    return links;
}