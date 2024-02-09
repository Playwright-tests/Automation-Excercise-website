import { LinkDataProvider } from "../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../enums/testScenarios";
import { test, expect } from "../../../fixtures/account";

const linkData = LinkDataProvider.get(TestScenarios.ACCOUNT_NAVIGATION);

test.describe('Account navigation links',async () => {
    
    for(const data of linkData) {

        test('Clicking the "' + data.link + '" link',async ({accountNavigation, page}) => {
            
            await test.step('Click the "' + data.link + '" link', async () => {
                
                await accountNavigation.clickLink(data.link);
            })

            await expect(page).toHaveURL(data.url);
        })
    }
})