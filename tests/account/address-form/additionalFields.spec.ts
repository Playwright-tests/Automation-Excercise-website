import { getArrayData } from "../../../data-loaders/arrayData.spec";
import { test, expect } from "../../../fixtures/account.spec";
import { dropdownListSteps } from "./steps.spec";

const stateCountyFieldCountries = getArrayData('addressForm', 'stateCountyField');
const stateCountyDDLCountries = getArrayData('addressForm', 'stateCountyDropdownList');
const countyDDLCountries = getArrayData('addressForm', 'countyDropdownList');
const stateDDLCountries = getArrayData('addressForm', 'stateDropdownList');
const districtDropdownList = getArrayData('addressForm', 'districtDropdownList');
const provinceDDLCountries = getArrayData('addressForm', 'provinceDropdownList');
const regionFieldCountries = getArrayData('addressForm', 'regionField');

test.describe('Additional "State / County" field',async () => {
    
    for(const country of stateCountyFieldCountries) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListSteps(country, addressForm);
            expect(await addressForm.getStateCountyField().isVisible()).toBeTruthy();
        })
    }
})

test.describe('Additional "State / County dropdown list"',async () => {
    
    for(const country of stateCountyDDLCountries) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListSteps(country, addressForm);
            expect(await addressForm.getStateCountyDropdownList().isVisible()).toBeTruthy();
        })
    }
})

test.describe('Additional "County" dropdown list',async () => {
    
    for(const country of countyDDLCountries) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListSteps(country, addressForm);
            expect(await addressForm.getCountyDropdownList().isVisible()).toBeTruthy();
        })
    }
})

test.describe('Additional "State dropdown list"',async () => {
    
    for(const country of stateDDLCountries) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListSteps(country, addressForm);
            expect(await addressForm.getStateDropdownList().isVisible()).toBeTruthy();
        })
    }
})

test.describe('Additional "District dropdown list"',async () => {
    
    for(const country of districtDropdownList) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListSteps(country, addressForm);
            expect(await addressForm.getDistrictDropdownList().isVisible()).toBeTruthy();
        })
    }
})

test.describe('Additional "Province dropdown list"',async () => {
    
    for(const country of provinceDDLCountries) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListSteps(country, addressForm);
            expect(await addressForm.getProvinceDropdownList().isVisible()).toBeTruthy();
        })
    }
})

test.describe('Additional "Region" field',async () => {
    
    for(const country of regionFieldCountries) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListSteps(country, addressForm);
            expect(await addressForm.getRegionField().isVisible()).toBeTruthy();
        })
    }
})