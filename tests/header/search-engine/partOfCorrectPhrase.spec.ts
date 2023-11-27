import { test, expect } from "../../../fixtures/header.spec";
import { JSONReader } from "../../../json-reader/JSONReader.spec";
import { SearchResultsPage } from "../../../page-object/base/search-results/SearchResultsPage.spec";
import { steps } from "./steps.spec";

const testdata = JSONReader.get();

test.describe('Searching products using part of correct phrases',async () => {
    
    for(const data of testdata.searchEngine.partOfCorrectPhrase) {

        test('Typing the "' + data + '" as the part of the correct phrase',async ({header, page}) => {
        
            await steps(await header.getSearchEngine(), data);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeTruthy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeFalsy();
        })
    }
})