import { URLs } from "../../../enums/URLs";
import { test, expect } from "../../../fixtures/header";

test.describe('Logo',async () => {
    
    test('Clicking the logo',async ({header}) => {
        
        await test.step('CLick the logo',async () => {
            
            await header.clickLogo();
        })

        await expect(await header.getPage()).toHaveURL(URLs.HomePage);
    })
})