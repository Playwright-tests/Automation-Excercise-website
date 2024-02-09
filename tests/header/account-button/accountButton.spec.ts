import { test, expect } from "../../../fixtures/header";
import { LinkDataProvider } from "../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../enums/testScenarios";

const linkData = LinkDataProvider.get(TestScenarios.ACCOUNT_PAGE);

test.describe('Opening the "Account" page',async () => {

    test('Clicking the "Account" button',async ({header, page}) => {
            
        await test.step('Click the "Account" button',async () => {
            
            await header.clickAccountButton();
        })

        await expect(page).toHaveURL(linkData[0].url);
    })
})