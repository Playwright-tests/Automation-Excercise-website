import axios from "axios";
import { MockarooTestdata } from "../enums/mockarooTestData";

export class MockaroTesdataProvider {

    static readonly url: string = 'https://my.api.mockaroo.com/';
    static readonly format = '.json';
    static readonly apiKey = '?key=df87e700'; 

    private static getUrl(mockarooTestData: MockarooTestdata) {

        return this.url + mockarooTestData + this.format + this.apiKey;
    }

    static async fetchData(mockarooTestdata: MockarooTestdata) {

        try {
            const response = await axios.get(this.getUrl(mockarooTestdata));
            return response.data;
        } catch {
            console.error('Could not fetch data from url: ' + this.getUrl(mockarooTestdata));    
        }
    }
}