import { LinkDataProvider } from "../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../enums/testScenarios";
import { test, expect } from "../../../fixtures/mainMenu";

const linkData = LinkDataProvider.get(TestScenarios.MAIN_MENU);

test.describe('Main menu links',async () => {
    
    for(const data of linkData) {

        test('Clicking the link with id: "' + data.link + '"',async ({mainMenu, page}) => {
            
            await test.step('Click the link',async () => {
                
                await mainMenu.clickLink(data.link);
            })

            await expect(page).toHaveURL(data.url);
        })
    }
})