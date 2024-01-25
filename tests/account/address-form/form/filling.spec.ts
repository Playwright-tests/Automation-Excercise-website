import { test, expect } from "../../../../fixtures/account";
import { getAddressFormData } from "../../../../data-loaders/addressFormData";
import { fillDropdownListAndAcceptChanges, fillAddressFormAndAcceptChanges } from "../steps.spec";
import { positive, negative, checkValidationMessage } from "./assertions.spec";
import { URLs } from "../../../../enums/URLs";
import { AddressForm } from "../../../../page-object/address-form/addressForm";

const correct = getAddressFormData('correct')[0];
const blankCompanyField = getAddressFormData('blankCompanyField')[0];
const blankOptionalAddressField = getAddressFormData('blankOptionalAddressField')[0];
const incorrectFirstName = getAddressFormData('incorrectFirstName')[0];
const incorrectLastName = getAddressFormData('incorrectLastName')[0];
const incorrectPostcode = getAddressFormData('incorrectPostcode')[0];
const incorrectPhoneNumber = getAddressFormData('incorrectPhoneNumber')[0];
const incorrectEmail = getAddressFormData('incorrectEmail');
const blankFirstNameField = getAddressFormData('withoutFirstName')[0];
const blankLastNameField = getAddressFormData('withoutLastName')[0];
const blankAddressField = getAddressFormData('withoutAddress')[0];
const blankCityField = getAddressFormData('withoutCity')[0];
const blankPostcodeField = getAddressFormData('withoutPostcode')[0];
const blankPhoneField = getAddressFormData('withoutPhone')[0];
const blankEmailField = getAddressFormData('withoutEmail')[0];

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

        await actionsForPositiveTests(addressForm, correct);
    })

    test('Blank "Company" field',async ({addressForm}) => {
        
        await actionsForPositiveTests(addressForm, blankCompanyField)
    })

    test('Blank optional "Street address" field',async ({addressForm}) => {
        
        await actionsForPositiveTests(addressForm, blankOptionalAddressField);
    })

    test('Incorrect first name',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, incorrectFirstName);
    })

    test('Incorrect last name',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, incorrectLastName);
    })

    test('Incorrect postcode',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, incorrectPostcode);
    })

    test('Incorrect phone number',async ({addressForm}) => {
        
        await actionsForNegativeTests(addressForm, incorrectPhoneNumber);
    })

    for(const data of incorrectEmail) {

        test('Entering "' + data.email + '" as the incorrect email format',async ({addressForm}) => {
            
            await fillAddressFormAndAcceptChanges(addressForm, data);
            await checkValidationMessage(addressForm.getEmailFieldLocator(), 'data.errorMessage');
        })
    }

    test('Blank "First name" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, blankFirstNameField);
    })


    test('Blank "Last name" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, blankLastNameField);
    })


    test('Blank required "Street address" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, blankAddressField);
    })


    test('Blank "City" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, blankCityField);
    })


    test('Blank "Postcode" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, blankPostcodeField);
    })


    test('Blank "Phone" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, blankPhoneField);
    })


    test('Blank "Email" field', async ({addressForm}) => {

        await actionsForNegativeTests(addressForm, blankEmailField);
    })
})