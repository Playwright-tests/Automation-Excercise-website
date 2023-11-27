import { test, expect } from "../../../fixtures/header.spec";
import { JSONReader } from "../../../json-reader/JSONReader.spec";

const testdata = JSONReader.get();

test.describe('Opening the shopping cart page',async () => {
    
    test('Clicking the "My Cart" button',async ({header, page}) => {
        
        await test.step('Click the "My Cart" button',async () => {
            
            await header.clickShoppingCartButton();
        })

        await expect(page).toHaveURL(testdata.URLs.shoppingCartPage[0].pageURL);
    })
})