import {test, expect} from "../../../fixtures/mainMenu";

test.describe('Expanding dropdown list',async () => {
    
    test('Hovering over the "Catergries" link',async ({mainMenu}) => {
        
        await test.step('Hover over the "Catergries" link',async () => {
            
            await (await mainMenu.getDropdownList()).hoverParent();
        })

        expect(await (await mainMenu.getDropdownList()).getContentsLocator().isVisible()).toBeTruthy();
    })
})