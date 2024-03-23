import { test } from "../fixtures/sideMenu";
import { expect as HD_Expect } from "../expect/toHaveHiddenSelector";
import { expect as NHD_Expect } from "../expect/tohaveNotHiddenSelector";
import { Page } from "@playwright/test";

test.describe('The "Category" menu',async () => {
    
    async function action(page: Page, linkName: string, selector: string, func: any) {
        
        await test.step('Click the "' + linkName + '" link',async () => {
            await func();
        })

        await NHD_Expect(page).toHaveNotHiddenSelector(selector);

        await test.step('Click the "' + linkName + '" link again',async () => {    
            await func();
        })

        await HD_Expect(page).toHaveHiddenSelector(selector);
    }

    test('Expanding and collapsing the "Women" dropdown list',async ({categoryMenu}) => {
        
        await action(await categoryMenu.getPage(), 'Women', categoryMenu.getWomenSelector(), async () => {
            await categoryMenu.clickWomenLink();
        })
    })

    test('Expanding and collapsing the "Men" dropdown list',async ({categoryMenu}) => {
        
        await action(await categoryMenu.getPage(), 'Men', categoryMenu.getMenSelector(), async () => {
            await categoryMenu.clickMenLink();
        })
    })

    test('Expanding and collapsing the "Kids" dropdown list',async ({categoryMenu}) => {
        
        await action(await categoryMenu.getPage(), 'Kids', categoryMenu.getKidsSelector(), async () => {
            await categoryMenu.clickKidsLink();
        })
    })
})