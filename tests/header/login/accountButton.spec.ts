import { test, expect } from "../../../fixtures/header.spec";
import { getLinkData } from "../../../helpers/link.spec";

const links = getLinkData('accountPage');

test.describe('Opening the "Account" page',async () => {
    
    for(const data of links) {

        test('Clicking the "Account" button',async ({header, page}) => {
            
            await test.step('Click the "Account" button',async () => {
                
                await header.clickAccountButton();
            })

            await expect(page).toHaveURL(data.url);
        })
    }
})