import axios from "axios";

export class MockarooTestdataProvider {

    static readonly url: string = 'https://my.api.mockaroo.com/';
    static readonly format = '.json';
    static readonly apiKey = 'myApiKey'; 

    private static getUrl(name: string) {

        return this.url + name + this.format + this.apiKey;
    }

    static async fetchData(name: string) {

        try {
            const response = await axios.get(this.getUrl(name));
            return response.data;
        } catch {
            console.error('Could not fetch data from url: ' + this.getUrl(name));    
        }
    }
}