import { URLs } from "../enums/URLs";
import { test } from "../fixtures/sideMenu";
import { dropdownListAction } from "../support/dropdownList";

test.describe('The "Men" dropdown list links',async () => {
    
    test('The "TSHIRTS" link',async ({menDropdownList}) => {
        
        await dropdownListAction(await menDropdownList.getPage(), 'TSHIRTS', URLs.TSHIRTS_PAGE, async () => {
            await menDropdownList.clickTShirtsLink();
        })
    })

    test('The "JEANS" link',async ({menDropdownList}) => {
        
        await dropdownListAction(await menDropdownList.getPage(), 'JEANS', URLs.JEANS_PAGE, async () => {
            await menDropdownList.clickJeansLink();
        })
    })
})