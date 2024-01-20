import { getJSONArray } from "./JSONArray";

export function getCredentials(node: string) {

    let JSONArray = getJSONArray('login');
    let credentials: { usernameOrEmail: string, password: string }[] = [];

    for(const data of JSONArray[node]) {

        let temp = {
            usernameOrEmail: data.usernameOrEmail,
            password: data.password,
        }

        credentials.push(temp);
    }

    return credentials;
}
