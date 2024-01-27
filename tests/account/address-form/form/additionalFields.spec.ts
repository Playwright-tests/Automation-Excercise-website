import { test, expect } from "../../../../fixtures/account";
import { checkLabel } from "./assertions.spec";
import { fillDropdownListAndAcceptChanges } from "../steps.spec";
import { AddressFormAdditionalFieldsTestdataLoader } from "../../../../data-loaders/dataLoaders";


test.describe('Additional "State / County" field',async () => {
    
    test.beforeAll(async () => {
        
        await AddressFormAdditionalFieldsTestdataLoader.init();
    })

    test('Additional State county field',async ({addressForm}) => {
            
        await fillDropdownListAndAcceptChanges(await AddressFormAdditionalFieldsTestdataLoader.stateCountyField.country, addressForm);
            
        expect(await addressForm.getAdditionalFieldLocator().isVisible()).toBeTruthy();
        await checkLabel(addressForm, "State / County");
    })

    test('Additional "State / County dropdown list"',async ({addressForm}) => {
            
        await fillDropdownListAndAcceptChanges(await AddressFormAdditionalFieldsTestdataLoader.stateCountyDropdownList.country, addressForm);
        expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
        await checkLabel(addressForm, "State / County *");
    })

    test('Additional "County" dropdown list',async ({addressForm}) => {
            
        await fillDropdownListAndAcceptChanges(await AddressFormAdditionalFieldsTestdataLoader.countyDropdownList.country, addressForm);
        expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
        await checkLabel(addressForm, 'County *');
    })

    test('Additional "State dropdown list"',async ({addressForm}) => {
            
        await fillDropdownListAndAcceptChanges(await AddressFormAdditionalFieldsTestdataLoader.stateDropdownList.country, addressForm);
        expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
        await checkLabel(addressForm, "State *");
    })

    test('Additional "District dropdown list"',async ({addressForm}) => {
            
        await fillDropdownListAndAcceptChanges(await AddressFormAdditionalFieldsTestdataLoader.districtDropdownList.country, addressForm);
        expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
        await checkLabel(addressForm, 'District *');
    })

    test('Additional "Province dropdown list"',async ({addressForm}) => {
            
        await fillDropdownListAndAcceptChanges(await AddressFormAdditionalFieldsTestdataLoader.provinceDropdownList.country, addressForm);
        expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
        await checkLabel(addressForm, 'Province *');
    })

    test('Additional "Region" field',async ({addressForm}) => {
            
        await fillDropdownListAndAcceptChanges(await AddressFormAdditionalFieldsTestdataLoader.regionField.country, addressForm);
        expect(await addressForm.getAdditionalFieldLocator().isVisible()).toBeTruthy();
        await checkLabel(addressForm, 'Region *');
    })

    test('Additional "Region" dropdown list',async ({addressForm}) => {
            
        await fillDropdownListAndAcceptChanges(await AddressFormAdditionalFieldsTestdataLoader.regionDropdownList.country, addressForm);
        expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
        await checkLabel(addressForm, 'Region')
    })

    test('Additional "Prefecture" dropdown list',async ({addressForm}) => {
            
        await fillDropdownListAndAcceptChanges(await AddressFormAdditionalFieldsTestdataLoader.prefectureDropdownList.country, addressForm);
        expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
        await checkLabel(addressForm, 'Prefecture *');
    })

    test('Additional "Municipality" field',async ({addressForm}) => {
            
        await fillDropdownListAndAcceptChanges(await AddressFormAdditionalFieldsTestdataLoader.municipalityField.country, addressForm);
        expect(await addressForm.getAdditionalFieldLocator().isVisible()).toBeTruthy();
        await checkLabel(addressForm, 'Municipality');
    })

    test('Additional "State / Zone" dropdown list',async ({addressForm}) => {
            
        await fillDropdownListAndAcceptChanges(await AddressFormAdditionalFieldsTestdataLoader.stateZoneDropdownList.country, addressForm);
        expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();
        await checkLabel(addressForm, 'State / Zone *');
    })
})