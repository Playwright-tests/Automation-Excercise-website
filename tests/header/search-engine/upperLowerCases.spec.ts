import { test, expect } from "../../../fixtures/header.spec";
import { getArrayData } from "../../../helpers/arrayData.spec";
import { SearchResultsPage } from "../../../page-object/base/search-results/SearchResultsPage.spec";
import { steps } from "./steps.spec";

const phrases = getArrayData('searchEngine', 'upperAndLowerCases');

test.describe('Searching products using phrases that contain upper and lower cases',async () => {

    for(const phrase of phrases) {

        test('Typing the "' + phrase + '" as the correct phrase',async ({header, page}) => {
            
            await steps(await header.getSearchEngine(), phrase);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeTruthy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeFalsy();
        })
    }
})