import { test, expect } from "../../../fixtures/mainMenu";
import { MainMenuLinksTestdataLoader } from "../../../data-loaders/dataLoaders";

MainMenuLinksTestdataLoader.init();

test.describe('Main menu links',async () => {
    
    for(const link of MainMenuLinksTestdataLoader.links) {

        test('Clicking the link with id: "' + link.linkText + '"',async ({mainMenu, page}) => {
            
            await test.step('Click the link',async () => {
                
                await mainMenu.clickLink(link.linkText);
            })

            await expect(page).toHaveURL(link.url);
        })
    }
})