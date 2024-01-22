import { test, expect } from "../../../../fixtures/account";

test.describe('Text input verification',async () => {
    
    const text = 'This is the country'

    test('Filling the country field',async ({addressForm}) => {
        
        await test.step('Click the arrow',async () => {
            
            await addressForm.getDropdownList().clickArrow();
        })

        await test.step('Enter "' + text + '" in the field',async () => {
            
            await addressForm.getDropdownList().setCountry(text);
        })

        expect(await addressForm.getDropdownList().getFieldContent()).toEqual(text);
    })
})