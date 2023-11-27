import { test, expect } from "../../../fixtures/header.spec";
import { getLinkData } from "../../../helpers/link.spec";

const links = getLinkData('shoppingCartPage');

test.describe('Opening the shopping cart page',async () => {

    for(const data of links) {

        test('Clicking the "My Cart" button',async ({header, page}) => {
            
            await test.step('Click the "My Cart" button',async () => {
                
                await header.clickShoppingCartButton();
            })

            await expect(page).toHaveURL(data.url);
        })
    }
})