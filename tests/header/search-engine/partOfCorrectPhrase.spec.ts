import { test, expect } from "../../../fixtures/header.spec";
import { getArrayData } from "../../../helpers/arrayData.spec";
import { SearchResultsPage } from "../../../page-object/base/search-results/SearchResultsPage.spec";
import { steps } from "./steps.spec";

const phrases = getArrayData('searchEngine', 'partOfCorrectPhrase');

test.describe('Searching products using part of correct phrases',async () => {
    
    for(const phrase of phrases) {

        test('Typing the "' + phrase + '" as the part of the correct phrase',async ({header, page}) => {
        
            await steps(await header.getSearchEngine(), phrase);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeTruthy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeFalsy();
        })
    }
})