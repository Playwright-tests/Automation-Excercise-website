import { TestDataFileNames } from "../enums/testdataFileNames";
import { test, expect } from "../fixtures/searchEngine";
import { SearchEngine } from "../page-object/search-engine/searchEngine";
import { SearchResultsPage } from "../page-object/search-results-page/searchResultsPage";
import { getStrings } from "../testdata-IO/testdataLoader";

const correctPhrases = getStrings(TestDataFileNames.PHRASES, 'correct');
const incorrectPhrases = getStrings(TestDataFileNames.PHRASES, 'incorrect');

test.describe('Search engine',async () => {
    
    const text: string = "This is the text!";

    async function actions(searchEngine: SearchEngine, phrase: string, func: any) {

        const searchResultsPage = new SearchResultsPage(await searchEngine.getPage());

        await test.step('Enter the "' + phrase + '"',async () => {
            await searchEngine.setPhrase(phrase);
        })

        await test.step('Click the button',async () => {
            await searchEngine.clickButton();
        })

        await searchResultsPage.findColumns();
        func(searchResultsPage);
    }

    test('Text input validation',async ({searchEngine}) => {
        
        await test.step('Enter the "' + text + '"',async () => {
            await searchEngine.setPhrase(text);
        })
        
        expect(await searchEngine.getPhrase()).toEqual(text);
    })

    for(const phrase of correctPhrases) {

        test('Typiyng the "' + phrase + '"',async ({searchEngine}) => {
            
            await actions(searchEngine, phrase, (searchResultsPage: SearchResultsPage) => {
                expect(searchResultsPage.getColumns()).toBeGreaterThan(0);
            });
        })
    }

    for(const phrase of incorrectPhrases) {

        test('Typiyng the "' + phrase + '"',async ({searchEngine}) => {
            
            await actions(searchEngine, phrase, (searchResultsPage: SearchResultsPage) => {
                expect(searchResultsPage.getColumns()).not.toBeGreaterThan(0);
            });
        })
    }
})