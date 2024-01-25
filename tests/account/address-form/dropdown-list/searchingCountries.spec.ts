import { getArrayData } from "../../../../data-loaders/arrayData";
import { test, expect } from "../../../../fixtures/account";
import { typeCountry } from "../steps.spec";

const correctCountryNames = getArrayData('countries', 'correctCountryName');
const incorrectCountryNames = getArrayData('countries', 'incorrectCountryName');

test.describe('Searching countries',async () => {
    
    const expectedAlertMessage = 'No matches found';

    for(const country of correctCountryNames) {

        test('Typiyng "' + country + '" as the correct country name',async ({addressForm}) => {
            
            await typeCountry(country, addressForm);
            expect(await addressForm.getDropdownList().getAlertLocator().isVisible()).toBeFalsy();
        })
    }

    for(const country of incorrectCountryNames) {

        test('Typiyng "' + country + '" as the incorrect country name',async ({addressForm}) => {
            
            await typeCountry(country, addressForm);
            expect(await addressForm.getDropdownList().getAlertLocator().isVisible()).toBeTruthy();
            expect(await addressForm.getDropdownList().getAlertLocator().textContent()).toEqual(expectedAlertMessage);
        })
    }
})


