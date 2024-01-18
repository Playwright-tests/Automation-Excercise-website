import { test, expect } from "../../../fixtures/header";

test.describe('Filling the search engine field',async () => {
    
    const phrase = "This is the phrase";

    test('Checking the search engine field content',async ({header}) => {
        
        await test.step('Enter the "' + phrase + '" as the phrase',async () => {
            
            await (await header.getSearchEngine()).setText(phrase);
        })

        expect(await (await header.getSearchEngine()).getFieldContent()).toEqual(phrase);
    })
}) 