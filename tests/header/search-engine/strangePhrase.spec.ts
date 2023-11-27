import { test, expect } from "../../../fixtures/header.spec";
import { getArrayData } from "../../../helpers/arrayData.spec";
import { SearchResultsPage } from "../../../page-object/base/search-results/SearchResultsPage.spec";
import { steps } from "./steps.spec";

const phrases = getArrayData('searchEngine', 'strangePhrase');

test.describe('Searching products using part of strange phrases',async () => {
    
    for(const phrase of phrases) {

        test('Typing the "' + phrase + '" as the strange phrase',async ({header, page}) => {
            
            await steps(await header.getSearchEngine(), phrase);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeFalsy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeTruthy();
        })
    }
})