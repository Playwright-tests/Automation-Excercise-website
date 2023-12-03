import { test, expect } from "../../fixtures/account.spec";
import { getLinkData } from "../../data-loaders/link.spec";

const links = getLinkData('accountNavigation')

test.describe('Account navigation',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.linkText + '" link',async ({accountNavigation, page}) => {
            
            await test.step('Click the "' + link.linkText + '" link', async () => {
                
                await accountNavigation.clickLink(link.linkText);
            })

            await expect(page).toHaveURL(link.url);
        })
    }
})