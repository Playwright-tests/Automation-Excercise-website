import { URLs } from "../../../enums/URLs";
import { test, expect } from "../../../fixtures/header";

test.describe('Opening the shopping cart page', async () => {

    test('Clicking the "My Cart" button', async ({ header}) => {

        await test.step('Click the "My Cart" button', async () => {

            await header.clickShoppingCartButton();
        })

        await expect(await header.getPage()).toHaveURL(URLs.ShoppingCart);
    })
})