import { test, expect } from "../../fixtures/mainMenu";
import { getLinkData } from "../../data-loaders/link";

const links = getLinkData('mainMenuLinks');

test.describe('Main menu links',async () => {
    
    for(const link of links) {

        test('Clicking the link with id: "' + link.linkText + '"',async ({mainMenu, page}) => {
            
            await test.step('Click the link',async () => {
                
                await mainMenu.clickLink(link.linkText);
            })

            await expect(page).toHaveURL(link.url);
        })
    }
})