import { test, expect } from "../../../fixtures/account";
import { getAddressFormData } from "../../../data-loaders/addressFormData";
import { fillDropdownListAndAcceptChanges, fillAddressFormAndAcceptChanges } from "./steps.spec";
import { positive, negative, checkValidationMessage } from "./assertions.spec";
import { URLs } from "../../../enums/URLs";

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

    test('Correct data', async ({ addressForm, page }) => {

        await fillAddressFormAndAcceptChanges(addressForm, correct);
        await expect(page).toHaveURL(URLs.AddressFormNavigation);
        await page.goto(URLs.BillingAddressForm);
        await positive(addressForm, correct);
    })

    test('Blank "Company" field',async ({addressForm}) => {
        
        await fillAddressFormAndAcceptChanges(addressForm, blankCompanyField);
        await expect(await addressForm.getPage()).toHaveURL(URLs.AddressFormNavigation);
        await (await addressForm.getPage()).goto(URLs.BillingAddressForm);
        await positive(addressForm, correct);
    })

    test('Blank optional "Street address" field',async ({addressForm}) => {
        
        await fillAddressFormAndAcceptChanges(addressForm, blankOptionalAddressField);
        await expect(await addressForm.getPage()).toHaveURL(URLs.AddressFormNavigation);
        await (await addressForm.getPage()).goto(URLs.BillingAddressForm);
        await positive(addressForm, correct);
    })

    test('Incorrect first name',async ({addressForm}) => {
        
        await fillAddressFormAndAcceptChanges(addressForm, incorrectFirstName);
        await negative(addressForm, incorrectFirstName);
    })

    test('Incorrect last name',async ({addressForm}) => {
        
        await fillAddressFormAndAcceptChanges(addressForm, incorrectLastName);
        await negative(addressForm, incorrectLastName);
    })

    test('Incorrect postcode',async ({addressForm}) => {
        
        await fillAddressFormAndAcceptChanges(addressForm, incorrectPostcode);
        await negative(addressForm, incorrectPostcode);
    })

    test('Incorrect phone number',async ({addressForm}) => {
        
        await fillAddressFormAndAcceptChanges(addressForm, incorrectPhoneNumber);
        await negative(addressForm, incorrectPhoneNumber);
    })

    for(const data of incorrectEmail) {

        test('Entering "' + data.email + '" as the incorrect email format',async ({addressForm}) => {
            
            await fillAddressFormAndAcceptChanges(addressForm, data);
            await checkValidationMessage(addressForm.getEmailFieldLocator(), 'data.errorMessage');
        })
    }

    test('Blank "First name" field', async ({ addressForm}) => {

        await fillAddressFormAndAcceptChanges(addressForm, blankFirstNameField);
        await negative(addressForm, blankFirstNameField);
    })


    test('Blank "Last name" field', async ({ addressForm, page }) => {

        await fillAddressFormAndAcceptChanges(addressForm, blankLastNameField);
        await negative(addressForm, blankLastNameField);
    })


    test('Blank required "Street address" field', async ({ addressForm, page }) => {

        await fillAddressFormAndAcceptChanges(addressForm, blankAddressField);
        await negative(addressForm, blankAddressField);
    })


    test('Blank "City" field', async ({ addressForm, page }) => {

        await fillAddressFormAndAcceptChanges(addressForm, blankCityField);
        await negative(addressForm, blankCityField);
    })


    test('Blank "Postcode" field', async ({ addressForm, page }) => {

        await fillAddressFormAndAcceptChanges(addressForm, blankPostcodeField);
        await negative(addressForm, blankPostcodeField);
    })


    test('Blank "Phone" field', async ({ addressForm, page }) => {

        await fillAddressFormAndAcceptChanges(addressForm, blankPhoneField);
        await negative(addressForm, blankPhoneField);
    })


    test('Blank "Email" field', async ({ addressForm, page }) => {

        await fillAddressFormAndAcceptChanges(addressForm, blankEmailField);
        await negative(addressForm, blankEmailField);
    })
})