import { test, expect } from "../../../fixtures/header";
import { getArrayData } from "../../../data-loaders/arrayData";
import { SearchResultsPage } from "../../../page-object/search-results-page/searchResultsPage";
import { steps } from "./steps.spec";

const phrases = getArrayData('searchEngine', 'incorrectPhrase');

test.describe('Search product using an incorrect phrase',async () => {
    
    for(const phrase of phrases) {

        test('Typing the "' + phrase + '" as the correct phrase',async ({header, page}) => {
            
            await steps(await header.getSearchEngine(), phrase);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeFalsy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeTruthy();
        })
    }
})
