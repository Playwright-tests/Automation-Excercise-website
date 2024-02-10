import { test, expect } from "../../../../fixtures/account";
import { checkLabel } from "./assertions.spec";
import { fillDropdownListAndAcceptChanges } from "../steps.spec";
import { ArraysDataProvider } from "../../../../data-loaders/dataProviders";
import { TestdataFiles } from "../../../../enums/testdataFiles";
import { TestScenarios } from "../../../../enums/testScenarios";
import { AddressForm } from "../../../../page-object/address-form/addressForm";

const countries = ArraysDataProvider.get(TestdataFiles.DYNAMIC_FIELDS);

test.describe('Additional "State / County" field',async () => {

    async function actions(country: string, addressForm: AddressForm, func: any, label: string) {
        
        await fillDropdownListAndAcceptChanges(country, addressForm);

        await func();
        await checkLabel(addressForm, label);
    }
    

    for(const country of countries[TestScenarios.STATE_COUNTY_FIELD]) {

        test('"State / County " field, country: ' + country,async ({addressForm}) => {
            
            await actions(country, addressForm, async () => {
                expect(await addressForm.getAdditionalFieldLocator().isVisible()).toBeTruthy();  
            }, 'State / County *');
        })
    }


    for(const country of countries[TestScenarios.STATE_COUNTY_DROPDOWN_LIST]) {

        test('"State / County dropdown list", country: ' + country,async ({addressForm}) => {
            
            await actions(country, addressForm, async () => {
                expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();  
            }, 'State / County *')
        })    
    }

    for(const country of countries[TestScenarios.COUNTY_DROPDOWN_LIST]) {

        test('"County" dropdown list, country: ' + country,async ({addressForm}) => {
            
            await actions(country, addressForm, async () => {
                expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();  
            }, 'County *');
        })
    }

    for(const country of countries[TestScenarios.STATE_DROPDOWN_LIST]) {

        test('"State" dropdown list, country: ' + country,async ({addressForm}) => {
            
            await actions(country, addressForm, async () => {
                expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();    
            }, 'State *');
        })
    }


    for(const country of countries[TestScenarios.DISTRICT_DROPDOWN_LIST]) {

        test('"District" dropdown list, country: ' + country,async ({addressForm}) => {
            
            await actions(country, addressForm, async () => {
                expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();  
            }, 'District *');
        })
    }

    
    for(const country of countries[TestScenarios.PROVINCE_DROPDOWN_LIST]) {

        test('"Province" dropdown list, country: ' + country,async ({addressForm}) => {
            
            await actions(country, addressForm, async () => {
                expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();  
            }, 'Province *');
        })
    }


    for(const country of countries[TestScenarios.REGION_FIELD]) {

        test('"Region" field, country: ' + country,async ({addressForm}) => {
            
            await actions(country, addressForm, async () => {
                expect(await addressForm.getAdditionalFieldLocator().isVisible()).toBeTruthy();  
            }, 'Region *');
        })
    }


    for(const country of countries[TestScenarios.REGION_DROPDOWN_LIST]) {

        test('"Region" dropdown list, country: ' + country,async ({addressForm}) => {
            
            await actions(country, addressForm, async () => {
                expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();  
            }, 'Region')
        })
    
    }

    
    for(const country of countries[TestScenarios.PREFENCTURE_DROPDOWN_LIST]) {

        test('"Prefecture" dropdown list, country: ' + country,async ({addressForm}) => {
            
            await actions(country, addressForm, async () => {
                expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();    
            }, 'Prefecture *');
        })
    }

    
    for(const country of countries[TestScenarios.MUNICIPALITY_FIELD]) {

        test('"Municipality" field, country: ' + country,async ({addressForm}) => {
            
            await actions(country, addressForm, async () => {
                expect(await addressForm.getAdditionalFieldLocator().isVisible()).toBeTruthy();  
            }, 'Municipality');
        })
    }


    for(const country of countries[TestScenarios.STATE_ZONE_DROPDOWN_LIST]) {

        test('"State / Zone" dropdown list, country: ' + country,async ({addressForm}) => {
            
            await actions(country, addressForm, async () => {
                expect(await addressForm.getAdditionalDropdownListLocator().isVisible()).toBeTruthy();  
            }, 'State / Zone *');
        })
    }
    
})