import { test, expect } from "../../../fixtures/header.spec";
import { JSONReader } from "../../../json-reader/JSONReader.spec";
import { SearchResultsPage } from "../../../page-object/base/search-results/SearchResultsPage.spec";
import { steps } from "./steps.spec";

const testdata = JSONReader.get();

test.describe('Searching products using phrases that contain upper and lower cases',async () => {

    for(const data of testdata.searchEngine.upperAndLowerCases) {

        test('Typing the "' + data + '" as the correct phrase',async ({header, page}) => {
            
            await steps(await header.getSearchEngine(), data);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeTruthy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeFalsy();
        })
    }
})