import { getArrayData } from "../../../../data-loaders/arrayData";
import { test, expect } from "../../../../fixtures/account";
import { toLowerCase } from "../../../../utils/toLowerCase";
import { fillDropdownList } from "../commons/steps.spec";

const incompleteCountryNames = getArrayData('countries', 'incompleteCountryNames');


test.describe('Autocomplete search',async () => {
    
    for(const incompleteCountryName of incompleteCountryNames) {

        test('Typiyng "'+ incompleteCountryName +'"',async ({addressForm}) => {
        
            await fillDropdownList(incompleteCountryName, addressForm);
            
            const resultsLocator = addressForm.getDropdownList().getResultsLocator();
            const countries = resultsLocator.locator(addressForm.getDropdownList().getOptionResultSelector()).all();

            for(const country of await countries) {
    
                const received = await toLowerCase(await country.textContent());
                expect.soft(received).toContain(incompleteCountryName.toLowerCase());
            }
        })
    }
})