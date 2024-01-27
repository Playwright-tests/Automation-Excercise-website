import { DropdownListCountryNameTestdataLoader } from "../../../../data-loaders/dataLoaders";
import { test, expect } from "../../../../fixtures/account";
import { typeCountry } from "../steps.spec";

test.describe('Searching countries',async () => {
    
    const expectedAlertMessage = 'No matches found';

    test.beforeAll(async () => {
        
        await DropdownListCountryNameTestdataLoader.init();
    })

    test('Correct country name',async ({addressForm}) => {
            
        await typeCountry(await DropdownListCountryNameTestdataLoader.correct.country, addressForm);
        expect(await addressForm.getDropdownList().getAlertLocator().isVisible()).toBeFalsy();
    })

    test('Incorrect country name',async ({addressForm}) => {
            
        await typeCountry(await DropdownListCountryNameTestdataLoader.incorrect.country, addressForm);
        expect(await addressForm.getDropdownList().getAlertLocator().isVisible()).toBeTruthy();
        expect(await addressForm.getDropdownList().getAlertLocator().textContent()).toEqual(expectedAlertMessage);
    })
})


