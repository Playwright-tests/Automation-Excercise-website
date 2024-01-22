import { getArrayData } from "../../../data-loaders/arrayData";
import { test, expect } from "../../../fixtures/account";
import { checkLabel } from "./assertions.spec";
import { dropdownListFillingSteps } from "./steps.spec";

const stateCountyField = getArrayData('addressForm', 'stateCountyField');
const stateCountyDropdownList = getArrayData('addressForm', 'stateCountyDropdownList');
const countyDropdownList = getArrayData('addressForm', 'countyDropdownList');
const stateDropdownList = getArrayData('addressForm', 'stateDropdownList');
const districtDropdownList = getArrayData('addressForm', 'districtDropdownList');
const provinceDropdownList = getArrayData('addressForm', 'provinceDropdownList');
const regionField = getArrayData('addressForm', 'regionField');
const regionDropdownList = getArrayData('addressForm', 'regionDropdownList');
const prefectureDropdownList = getArrayData('addressForm', 'prefectureDropdownList');
const municipalityField = getArrayData('addressForm', 'municipalityField');
const stateZoneDropdownList = getArrayData('addressForm', 'stateZoneDropdownList');

test.describe('Additional "State / County" field',async () => {
    
    for(const country of stateCountyField) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListFillingSteps(country, addressForm);
            
            expect(await addressForm.getAdditionalFieldLocator().isVisible()).toBeTruthy();
            await checkLabel(addressForm, "State / County");
        })
    }
})

test.describe('Additional "State / County dropdown list"',async () => {
    
    for(const country of stateCountyDropdownList) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListFillingSteps(country, addressForm);
            expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
            await checkLabel(addressForm, "State / County *");
        })
    }
})

test.describe('Additional "County" dropdown list',async () => {
    
    for(const country of countyDropdownList) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListFillingSteps(country, addressForm);
            expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
            await checkLabel(addressForm, 'County *');
        })
    }
})

test.describe('Additional "State dropdown list"',async () => {
    
    for(const country of stateDropdownList) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListFillingSteps(country, addressForm);
            expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
            await checkLabel(addressForm, "State *");
        })
    }
})

test.describe('Additional "District dropdown list"',async () => {
    
    for(const country of districtDropdownList) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListFillingSteps(country, addressForm);
            expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
            await checkLabel(addressForm, 'District *');
        })
    }
})

test.describe('Additional "Province dropdown list"',async () => {
    
    for(const country of provinceDropdownList) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListFillingSteps(country, addressForm);
            expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
            await checkLabel(addressForm, 'Province *');
        })
    }
})

test.describe('Additional "Region" field',async () => {
    
    for(const country of regionField) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListFillingSteps(country, addressForm);
            expect(await addressForm.getAdditionalFieldLocator().isVisible()).toBeTruthy();
            await checkLabel(addressForm, 'Region *');
        })
    }
})

test.describe('Additional "Region" dropdown list',async () => {
    
    for(const country of regionDropdownList) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListFillingSteps(country, addressForm);
            expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
            await checkLabel(addressForm, 'Region')
        })
    }
})

test.describe('Additional "Prefecture" dropdown list',async () => {
    
    for(const country of prefectureDropdownList) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListFillingSteps(country, addressForm);
            expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
            await checkLabel(addressForm, 'Prefecture *');
        })
    }
})

test.describe('Additional "Municipality" field',async () => {
    
    for(const country of municipalityField) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListFillingSteps(country, addressForm);
            expect(await addressForm.getAdditionalFieldLocator().isVisible()).toBeTruthy();
            await checkLabel(addressForm, 'Municipality');
        })
    }
})

test.describe('Additional "State / Zone" dropdown list',async () => {
    
    for(const country of stateZoneDropdownList) {

        test('Setting "' + country + '"',async ({addressForm}) => {
            
            await dropdownListFillingSteps(country, addressForm);
            expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
            await checkLabel(addressForm, 'State / Zone *');
        })
    }
})

