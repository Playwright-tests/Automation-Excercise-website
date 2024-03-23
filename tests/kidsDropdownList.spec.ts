import { URLs } from "../enums/URLs";
import { test } from "../fixtures/sideMenu";
import { dropdownListAction } from "../support/dropdownList";

test.describe('The "Kids" dropdown list links',async () => {
    
    test('The "DRESS" link',async ({kidsDropdownList}) => {
        
        await dropdownListAction(await kidsDropdownList.getPage(), 'DRESS', URLs.KIDS_DRESS_PAGE, async () => {
            await kidsDropdownList.clickDressLink();
        })
    })

    test('The "TOPS & SHIRTS" link',async ({kidsDropdownList}) => {
        
        await dropdownListAction(await kidsDropdownList.getPage(), 'TOPS & SHIRTS', URLs.TOPS_AND_SHIRTS_PAGE, async () => {
            await kidsDropdownList.clickTopsAndShirstLink();
        })
    })
})