import { test, expect } from "../../../fixtures/header.spec";
import { JSONReader } from "../../../json-reader/JSONReader.spec";

const testdata = JSONReader.get();

test.describe('Opening the "Account" page',async () => {
    
    test('Clicking the "Account" button',async ({header, page}) => {
        
        await test.step('Click the "Account" button',async () => {
            
            await header.clickAccountButton();
        })

        await expect(page).toHaveURL(testdata.URLs.accountPage[0].pageURL);
    })
})