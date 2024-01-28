import { test, expect } from "../../../fixtures/account";
import { AccountNavigationLinksTestdataLoader } from "../../../data-loaders/dataLoaders";

AccountNavigationLinksTestdataLoader.init();

test.describe('Account navigation links',async () => {
    
    for(const link of AccountNavigationLinksTestdataLoader.links) {

        test('Clicking the "' + link.linkText + '" link',async ({accountNavigation, page}) => {
            
            await test.step('Click the "' + link.linkText + '" link', async () => {
                
                await accountNavigation.clickLink(link.linkText);
            })

            await expect(page).toHaveURL(link.url);
        })
    }
})