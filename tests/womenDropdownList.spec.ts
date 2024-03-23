import { URLs } from "../enums/URLs";
import { test, expect } from "../fixtures/sideMenu";
import { dropdownListAction } from "../support/dropdownList";

test.describe('The "Women" dropdown list links',async () => {
    
    test('The "DRESS" link',async ({womenDropdownList}) => {
        await dropdownListAction(await womenDropdownList.getPage(), 'DRESS', URLs.DRESS_PAGE, async () => {
            await womenDropdownList.clickDressLink();
        })  
    })

    test('The "TOPS" link',async ({womenDropdownList}) => {
        await dropdownListAction(await womenDropdownList.getPage(), 'TOPS', URLs.TOPS_PAGE, async () => {
            await womenDropdownList.clickTopsLink();
        })  
    })

    test('The "SAREE" link',async ({womenDropdownList}) => {
        await dropdownListAction(await womenDropdownList.getPage(), 'SAREE', URLs.SAREE_PAGE, async () => {
            await womenDropdownList.clickSareeLink();
        })  
    })
})