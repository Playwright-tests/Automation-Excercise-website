import { LinkDataProvider } from "../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../enums/testScenarios";
import { test, expect } from "../../../fixtures/mainMenu";

const linkData = LinkDataProvider.get(TestScenarios.MAIN_MENU_DROPDOWN_LIST);

test.describe('Main menu drop-down list links',async () => {
    
    for(const data of linkData) {

        test('Clicking the drop-down list link with id: "' + data.link,async ({mainMenu, page}) => {
            
            await test.step('Hover over the main menu drop-down list parent',async () => {
                
                await (await mainMenu.getDropdownList()).hoverParent();
            })

            await test.step('Click the link',async () => {
                
                await (await mainMenu.getDropdownList()).clickLink(data.link);
            })

            await expect(page).toHaveURL(data.url);
        })
    }
})