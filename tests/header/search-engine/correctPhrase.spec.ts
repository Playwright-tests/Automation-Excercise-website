import { test, expect } from "../../../fixtures/header.spec";
import { JSONReader } from "../../../json-reader/JSONReader.spec";
import { SearchResultsPage } from "../../../page-object/base/search-results/SearchResultsPage.spec";
import { steps } from "./steps.spec";

const testdata = JSONReader.get();

test.describe('Search product using a correct phrase',async () => {
    
    for(const data of testdata.searchEngine.correctPhrase) {

        test('Typing the "' + data + '" as the correct phrase',async ({header, page}) => {
            
            await steps(await header.getSearchEngine(), data);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeTruthy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeFalsy();
        })
    }
})