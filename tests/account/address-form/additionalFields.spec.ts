import { getArrayData } from "../../../data-loaders/arrayData.spec";
import { test, expect } from "../../../fixtures/account.spec";
import { dropdownListSteps } from "./steps.spec";

const stateCountyFieldCountries = getArrayData('addressForm', 'stateCountyField');
const stateCountyDDLCountries = getArrayData('addressForm', 'stateCountyDropdownList');
const countyDDLCountries = getArrayData('addressForm', 'countyDropdownList');
const stateDDLCountries = getArrayData('addressForm', 'stateDropdownList');
const districtDDLCountries = getArrayData('addressForm', 'districtDropdownList');
const provinceDDLCountries = getArrayData('addressForm', 'provinceDropdownList');
const regionFieldCountries = getArrayData('addressForm', 'regionField');
const regionDDLCountries = getArrayData('addressForm', 'regionDropdownList');
const prefectureDropdownListCountries = getArrayData('addressForm', 'prefectureDropdownList');
const municipalityFieldCountries = getArrayData('addressForm', 'municipalityField');
const stateZoneDDLCountries = getArrayData('addressForm', 'stateZoneDropdownList');

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
    
    for(const country of districtDDLCountries) {

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

test.describe('Additional "Region" dropdown list',async () => {
    
    for(const country of regionDDLCountries) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListSteps(country, addressForm);
            expect(await addressForm.getRegionDropdownList().isVisible()).toBeTruthy();
        })
    }
})

test.describe('Additional "Municipality" field',async () => {
    
    for(const country of municipalityFieldCountries) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListSteps(country, addressForm);
            expect(await addressForm.getMunicipalityField().isVisible()).toBeTruthy();
        })
    }
})

test.describe('Additional "State / Zone" dropdown list',async () => {
    
    for(const country of stateZoneDDLCountries) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListSteps(country, addressForm);
            expect(await addressForm.getStateZoneDropdownList().isVisible()).toBeTruthy();
        })
    }
})

