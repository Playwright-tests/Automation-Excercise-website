import { getJSONArray } from "./JSONArray";

export function getNewsletterData(node: string) {

    let JSONArray = getJSONArray('newsletter');
    let newsletterData: { name: string, email: string, message: string }[] = [];

    for(const data of JSONArray[node]) {

        let temp = {
            name: data.name,
            email: data.email,
            message: data.message
        }

        newsletterData.push(temp);
    }

    return newsletterData;
}