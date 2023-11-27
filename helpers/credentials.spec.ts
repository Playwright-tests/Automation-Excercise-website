import { getJSONArray } from "./JSONArray.spec";

export function getCredentials(node: string) {

    let JSONArray = getJSONArray('login');
    let credentials: { email: string, password: string }[] = [];

    for(const data of JSONArray[node]) {

        let temp = {
            email: data.email,
            password: data.password,
        }

        credentials.push(temp);
    }

    return credentials;
}
