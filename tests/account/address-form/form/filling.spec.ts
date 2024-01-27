import { test, expect } from "../../../../fixtures/account";
import { fillAddressFormAndAcceptChanges } from "../steps.spec";
import { positive, negative, checkValidationMessage } from "./assertions.spec";
import { URLs } from "../../../../enums/URLs";
import { AddressForm } from "../../../../page-object/address-form/addressForm";
import { AddressFormTestdataLoader } from "../../../../data-loaders/dataLoaders";


test.describe('Filling the billing address form', async () => {

    test.beforeAll(async () => {
        
        AddressFormTestdataLoader.init();
    })

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

        await actionsForPositiveTests(addressForm, await AddressFormTestdataLoader.correct);
    })

    test('Blank "Company" field',async ({addressForm}) => {
        
        await actionsForPositiveTests(addressForm, await AddressFormTestdataLoader.blankCompanyField);
    })

    test('Blank optional "Street address" field',async ({addressForm}) => {
        
        await actionsForPositiveTests(addressForm, await AddressFormTestdataLoader.blankSecondAddressLineField);
    })

    test('Incorrect first name',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, await AddressFormTestdataLoader.incorrectFirstName);
    })

    test('Incorrect last name',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, await AddressFormTestdataLoader.incorrectLastName);
    })

    test('Incorrect postcode',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, AddressFormTestdataLoader.incorrectPostcode);
    })

    test('Incorrect phone number',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, await AddressFormTestdataLoader.incorrectPhone);
    })

    test('Incorrect email format',async ({addressForm}) => {
        
        await fillAddressFormAndAcceptChanges(addressForm, await AddressFormTestdataLoader.incorrectEmailFormat);
        await checkValidationMessage(addressForm.getEmailFieldLocator(), 'data.errorMessage');
    })

    test('Blank "First name" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, await AddressFormTestdataLoader.blankFirstNameField);
    })


    test('Blank "Last name" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, await AddressFormTestdataLoader.blankLastNameField);
    })


    test('Blank required "Street address" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, await AddressFormTestdataLoader.blankAddressField);
    })


    test('Blank "City" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, await AddressFormTestdataLoader.blankCityField);
    })


    test('Blank "Postcode" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, await AddressFormTestdataLoader.blankPostcodeField);
    })


    test('Blank "Phone" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, await AddressFormTestdataLoader.blankPhoneField);
    })


    test('Blank "Email" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, await AddressFormTestdataLoader.blankEmailField);
    })
})