import { LocalTestdataProvider } from "../testdata-providers/localTestdataProvider";
import { MockarooTestdataProvider } from "../testdata-providers/mockarooTestDataProvider";

export async function getTestdata(name: string) {
    
    try {
        return await MockarooTestdataProvider.fetchData(name);
    } catch {
        console.warn('Using the local testdata');
        return await LocalTestdataProvider.fetchData(name);
    }
}