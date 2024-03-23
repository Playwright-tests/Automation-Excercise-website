import { URLs } from "../enums/URLs";
import { test } from "../fixtures/sideMenu";
import { menuAction } from "../support/dropdownList";

test.describe('The "Men" dropdown list links',async () => {
    
    test('The "TSHIRTS" link',async ({menDropdownList}) => {
        
        await menuAction(await menDropdownList.getPage(), 'TSHIRTS', URLs.TSHIRTS_PAGE, async () => {
            await menDropdownList.clickTShirtsLink();
        })
    })

    test('The "JEANS" link',async ({menDropdownList}) => {
        
        await menuAction(await menDropdownList.getPage(), 'JEANS', URLs.JEANS_PAGE, async () => {
            await menDropdownList.clickJeansLink();
        })
    })
})