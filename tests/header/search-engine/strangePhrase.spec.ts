import { test, expect } from "../../../fixtures/header.spec";
import { JSONReader } from "../../../json-reader/JSONReader.spec";
import { SearchResultsPage } from "../../../page-object/base/search-results/SearchResultsPage.spec";
import { steps } from "./steps.spec";

const testdata = JSONReader.get();

test.describe('Searching products using part of strange phrases',async () => {
    
    for(const data of testdata.searchEngine.strangePhrase) {

        test('Typing the "' + data + '" as the strange phrase',async ({header, page}) => {
            
            await steps(await header.getSearchEngine(), data);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeFalsy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeTruthy();
        })
    }
})