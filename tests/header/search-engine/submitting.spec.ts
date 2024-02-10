import { test, expect } from "../../../fixtures/header";

test.describe('Submitting',async () => {

    test('Clicking the search button',async ({header}) => {
        
        await test.step('Click the search field',async () => {
            
            await (await header.getSearchEngine()).clickSearchField();
        })

        await test.step('Click the search button',async () => {
            
            await (await header.getSearchEngine()).clickSearchButton();
        })

        await expect(await header.getPage()).toHaveURL('https://skleptest.pl/?s=');
    })

    test('Pressing ENTER',async ({header}) => {
        
        await test.step('Click the search field',async () => {
            
            await (await header.getSearchEngine()).clickSearchField();
        })

        await test.step('Press ENTER',async () => {
            
            await (await header.getPage()).keyboard.press('Enter');
        })

        await expect(await header.getPage()).toHaveURL('https://skleptest.pl/?s=');
    })
})