import { test, expect } from "../../../../fixtures/account";
import { fillAddressFormAndAcceptChanges } from "../steps.spec";
import { positive, negative, checkValidationMessage } from "./assertions.spec";
import { URLs } from "../../../../enums/URLs";
import { AddressForm } from "../../../../page-object/address-form/addressForm";
import { AddressDataProvider } from "../../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../../enums/testScenarios";

const addressData = AddressDataProvider.get();

test.describe('Filling the billing address form', async () => {

    async function actionsForPositiveTests(addressForm: AddressForm, data: any) {
        
        await fillAddressFormAndAcceptChanges(addressForm, data);
        await expect(await addressForm.getPage()).toHaveURL(URLs.AddressFormNavigation);
        await (await addressForm.getPage()).goto(URLs.BillingAddressForm);
        await positive(addressForm, data);
    }

    async function actionsForNegativeTests(addressForm: AddressForm, data: any) {
        
        await fillAddressFormAndAcceptChanges(addressForm, data);
        await negative(addressForm, data);
    }

    test('Correct data', async ({addressForm}) => {

        await actionsForPositiveTests(addressForm, addressData[TestScenarios.CORRECT]);
    })

    test('Blank "Company" field',async ({addressForm}) => {
        
        await actionsForPositiveTests(addressForm, addressData[TestScenarios.BLANK_COMPANY_FIELD]);
    })

    test('Blank optional "Street address" field',async ({addressForm}) => {
        
        await actionsForPositiveTests(addressForm, addressData[TestScenarios.BLANK_ADDRESS_FILED_LINE2]);
    })

    test('Incorrect first name',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, addressData[TestScenarios.INCORRECT_FIRST_NAME]);
    })

    test('Incorrect last name',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, addressData[TestScenarios.INCORRECT_LAST_NAME]);
    })

    test('Incorrect postcode',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, addressData[TestScenarios.INCORRECT_POSTCODE]);
    })

    test('Incorrect phone number',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, addressData[TestScenarios.INCORRECT_PHONE]);
    })

    test('Incorrect email format',async ({addressForm}) => {
        
        await fillAddressFormAndAcceptChanges(addressForm, addressData[TestScenarios.INCORRECT_EMAIL]);
        await checkValidationMessage(addressForm.getEmailFieldLocator(), 'data.errorMessage');
    })

    test('Blank "First name" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, addressData[TestScenarios.BLANK_FIRST_NAME_FIELD]);
    })


    test('Blank "Last name" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, addressData[TestScenarios.BLANK_LAST_NAME_FIELD]);
    })


    test('Blank required "Street address" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, addressData[TestScenarios.BLANK_ADDRESS_FIELD]);
    })


    test('Blank "City" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, addressData[TestScenarios.BLANK_CITY_FIELD]);
    })


    test('Blank "Postcode" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, addressData[TestScenarios.BLANK_POSTCODE_FIELD]);
    })


    test('Blank "Phone" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, addressData[TestScenarios.BLANK_PHONE_FIELD]);
    })


    test('Blank "Email" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, addressData[TestScenarios.BLANK_EMAIL_FIELD]);
    })
})