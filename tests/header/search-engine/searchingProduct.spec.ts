import { test, expect } from "../../../fixtures/header";
import { getArrayData } from "../../../data-loaders/arrayData";
import { SearchResultsPage } from "../../../page-object/search-results-page/searchResultsPage";
import { steps } from "./steps.spec";

const correctPhrases = getArrayData('searchEngine', 'correctPhrase');
const upperLowerCases = getArrayData('searchEngine', 'upperAndLowerCases');
const incompleteCorrectPhrases = getArrayData('searchEngine', 'partOfCorrectPhrase');
const incorrectPhrases = getArrayData('searchEngine', 'incorrectPhrase');
const strangePhrases = getArrayData('searchEngine', 'strangePhrase');

test.describe('Search product using a correct phrase',async () => {
    
    for(const phrase of correctPhrases) {

        test('Typing the "' + phrase + '" as the correct phrase',async ({header, page}) => {
            
            await steps(await header.getSearchEngine(), phrase);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeTruthy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeFalsy();
        })
    }
})

test.describe('Searching products using phrases that contain upper and lower cases',async () => {

    for(const phrase of upperLowerCases) {

        test('Typing the "' + phrase + '" as the correct phrase',async ({header, page}) => {
            
            await steps(await header.getSearchEngine(), phrase);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeTruthy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeFalsy();
        })
    }
})

test.describe('Searching products using incomplete, correct phrases',async () => {
    
    for(const phrase of incompleteCorrectPhrases) {

        test('Typing the "' + phrase + '" as the part of the correct phrase',async ({header, page}) => {
        
            await steps(await header.getSearchEngine(), phrase);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeTruthy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeFalsy();
        })
    }
})

test.describe('Search product using an incorrect phrase',async () => {
    
    for(const phrase of incorrectPhrases) {

        test('Typing the "' + phrase + '" as the correct phrase',async ({header, page}) => {
            
            await steps(await header.getSearchEngine(), phrase);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeFalsy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeTruthy();
        })
    }
})

test.describe('Searching products using part of strange phrases',async () => {
    
    for(const phrase of strangePhrases) {

        test('Typing the "' + phrase + '" as the strange phrase',async ({header, page}) => {
            
            await steps(await header.getSearchEngine(), phrase);

            const searchResultsPage = new SearchResultsPage(page);

            expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeFalsy();
            expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeTruthy();
        })
    }
})
