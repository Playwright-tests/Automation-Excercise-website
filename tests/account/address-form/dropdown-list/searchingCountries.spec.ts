import { ArraysDataProvider } from "../../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../../enums/testScenarios";
import { TestdataFiles } from "../../../../enums/testdataFiles";
import { test, expect } from "../../../../fixtures/account";
import { fillDropdownList, typeCountry } from "../steps.spec";

const countries = ArraysDataProvider.get(TestdataFiles.COUNTRIES);

test.describe('Searching countries',async () => {
    
    const expectedAlertMessage = 'No matches found';

    for(const country of countries[TestScenarios.CORRECT]) {

        test('Correct country name: ' + country,async ({addressForm}) => {
            
            await typeCountry(country, addressForm);
            expect(await addressForm.getDropdownList().getAlertLocator().isVisible()).toBeFalsy();
        })
    }

    for(const country of countries[TestScenarios.PARTIAL]) {

        test('Partial country name: ' + country,async ({addressForm}) => {
            
            await fillDropdownList(country, addressForm);
            
            const resultsLocator = addressForm.getDropdownList().getResultsLocator();
            const results = resultsLocator.locator(addressForm.getDropdownList().getOptionResultSelector()).all();

            for(const result of await results) {
    
                const text = await result.textContent();
                const lowerCases = text?.toLowerCase()
                expect.soft(lowerCases).toContain(country.toLowerCase());
            }
        })
    }

    for(const country of countries[TestScenarios.INCORRECT]) {

        test('Incorrect country name: ' + country,async ({addressForm}) => {
            
            await typeCountry(country, addressForm);
            expect(await addressForm.getDropdownList().getAlertLocator().isVisible()).toBeTruthy();
            expect(await addressForm.getDropdownList().getAlertLocator().textContent()).toEqual(expectedAlertMessage);
        })
    }
})


