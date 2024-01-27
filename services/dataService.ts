import { LocalTestdataProvider } from "../testdata-providers/localTestdataProvider";
import { MockarooTestdataProvider } from "../testdata-providers/mockarooTestDataProvider";

export async function getTestdata(name: string) {
    
    try {
        const mockarooTestData = await MockarooTestdataProvider.fetchData(name);

        if(!mockarooTestData) {
            throw new Error('No testdata from Mockaroo')
        }

        return mockarooTestData;

    } catch(error) {
        console.warn('Using the local testdata');
        return await LocalTestdataProvider.fetchData(name);
    }
}