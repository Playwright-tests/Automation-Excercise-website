import { test, expect } from "../../../fixtures/header";
import { AccountPageLinkTestdataLoader } from "../../../data-loaders/dataLoaders";

AccountPageLinkTestdataLoader.init();

test.describe('Opening the "Account" page',async () => {
    
    test('Clicking the "Account" button',async ({header, page}) => {
            
        await test.step('Click the "Account" button',async () => {
            
            await header.clickAccountButton();
        })

        await expect(page).toHaveURL(AccountPageLinkTestdataLoader.link.url);
    })
})