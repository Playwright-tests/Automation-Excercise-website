import { test, expect } from "../../../../fixtures/account";
import { fillDropdownList } from "../steps.spec";

test.describe('Text input verification',async () => {
    
    const text = 'This is the country'

    test('Filling the country field',async ({addressForm}) => {
        
        await fillDropdownList(text, addressForm);
        expect(await addressForm.getDropdownList().getFieldContent()).toEqual(text);
    })
})