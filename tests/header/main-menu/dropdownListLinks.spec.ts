import { test, expect } from "../../../fixtures/mainMenu";
import { getLinkData } from "../../../data-loaders/link";
import { MainMenuDropdownListLinksTestdataLoader } from "../../../data-loaders/dataLoaders";

const links = getLinkData('mainMenuDropdownList');
MainMenuDropdownListLinksTestdataLoader.init();

test.describe('Main menu drop-down list links',async () => {
    
    for(const link of MainMenuDropdownListLinksTestdataLoader.links) {

        test('Clicking the drop-down list link with id: "' + link.linkText,async ({mainMenu, page}) => {
            
            await test.step('Hover over the main menu drop-down list parent',async () => {
                
                await (await mainMenu.getDropdownList()).hoverParent();
            })

            await test.step('Click the link',async () => {
                
                await (await mainMenu.getDropdownList()).clickLink(link.linkText);
            })

            await expect(page).toHaveURL(link.url);
        })
    }
})