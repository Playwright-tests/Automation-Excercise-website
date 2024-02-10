import { ArraysDataProvider } from "../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../enums/testScenarios";
import { TestdataFiles } from "../../../enums/testdataFiles";
import { test, expect } from "../../../fixtures/header";
import { SearchEngine } from "../../../page-object/header/searchEngine";
import { SearchResultsPage } from "../../../page-object/search-results-page/searchResultsPage";
import { steps } from "./steps.spec";

const phrases = ArraysDataProvider.get(TestdataFiles.PHRASES);

test.describe('Search product using a correct phrase',async () => {

    async function actions(phrase: string, searchEngine: SearchEngine, func: any) {
        
        await steps(searchEngine, phrase);
        const searchResultsPage = new SearchResultsPage(await searchEngine.getPage());
        await func(searchResultsPage);
    }

    for(const phrase of phrases[TestScenarios.CORRECT]) {

        test('Typing the "' + phrase + '" as the correct phrase',async ({header}) => {
            
            await actions(phrase, await header.getSearchEngine(), async (searchResultsPage: SearchResultsPage) => {
                expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeTruthy();  
                expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeFalsy();
            })
        })
    }

    for(const phrase of phrases[TestScenarios.PARTIAL]) {

        test('Typing the "' + phrase + '" as the partial phrase',async ({header}) => {
            
            await actions(phrase, await header.getSearchEngine(), async (searchResultsPage: SearchResultsPage) => {
                expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeTruthy();
                expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeFalsy();    
            })
        })
    }

    for(const phrase of phrases[TestScenarios.INCORRECT]) {

        test('Typing the "' + phrase + '" as the incorrect phrase',async ({header, page}) => {
            
            await actions(phrase, await header.getSearchEngine(), async (searchResultsPage: SearchResultsPage) => {
                expect(await (await searchResultsPage.getFoundMessageLocator()).isVisible()).toBeFalsy();
                expect(await (await searchResultsPage.getNothingFoundLocator()).isVisible()).toBeTruthy();    
            })
        })
    }
})