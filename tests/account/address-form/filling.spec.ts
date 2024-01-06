import { test, expect } from "../../../fixtures/account";
import { getAddressFormData } from "../../../data-loaders/addressFormData";
import { addressFormSteps, negativeCasesCheck, positiveCasesCheck } from "./steps.spec";
import { URLs } from "../../../enums/URLs";
import { checkAddressForm } from "../../../helpers/checkAddressForm";

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

        await addressFormSteps(addressForm, correct);
        await expect(page).toHaveURL(URLs.AddressFormNavigation);
        await page.goto(URLs.BillingAddressForm);

        const errors = await checkAddressForm(addressForm, correct);
        await positiveCasesCheck(errors);
    })

    test('Blank "Company" field',async ({addressForm, page}) => {
        
        await addressFormSteps(addressForm, blankCompanyField);
        await expect(page).toHaveURL(URLs.AddressFormNavigation);
        await page.goto(URLs.BillingAddressForm);

        const errors = await checkAddressForm(addressForm, blankCompanyField);
        await positiveCasesCheck(errors);
    })

    test('Blank optional "Street address" field',async ({addressForm, page}) => {
        
        await addressFormSteps(addressForm, blankOptionalAddressField);
        await expect(page).toHaveURL(URLs.AddressFormNavigation);
        await page.goto(URLs.BillingAddressForm);

        const errors = await checkAddressForm(addressForm, blankOptionalAddressField);
        await positiveCasesCheck(errors);
    })
})

test.describe('Incorrect data',async () => {
    
    test('Incorrect first name',async ({addressForm, page}) => {
        
        await addressFormSteps(addressForm, incorrectFirstName);
        await negativeCasesCheck(addressForm, incorrectFirstName, page);
    })

    test('Incorrect last name',async ({addressForm, page}) => {
        
        await addressFormSteps(addressForm, incorrectLastName);
        await negativeCasesCheck(addressForm, incorrectLastName, page);
    })

    test('Incorrect postcode',async ({addressForm, page}) => {
        
        await addressFormSteps(addressForm, incorrectPostcode);
        await negativeCasesCheck(addressForm, incorrectPostcode, page);
    })

    test('Incorrect phone number',async ({addressForm, page}) => {
        
        await addressFormSteps(addressForm, incorrectPhoneNumber);
        await negativeCasesCheck(addressForm, incorrectPhoneNumber, page);
    })

    for(const data of incorrectEmail) {

        test('Entering "' + data.email + '" as the incorrect email format',async ({addressForm, page}) => {
            
            await addressFormSteps(addressForm, data);
            await negativeCasesCheck(addressForm, data, page);
        })
    }
})

test.describe('Blank form fields', async () => {

    test('Blank "First name" field', async ({ addressForm, page }) => {

        await addressFormSteps(addressForm, blankFirstNameField);
        await negativeCasesCheck(addressForm, blankFirstNameField, page);
    })


    test('Blank "Last name" field', async ({ addressForm, page }) => {

        await addressFormSteps(addressForm, blankLastNameField);
        await negativeCasesCheck(addressForm, blankLastNameField, page);
    })


    test('Blank required "Street address" field', async ({ addressForm, page }) => {

        await addressFormSteps(addressForm, blankAddressField);
        await negativeCasesCheck(addressForm, blankAddressField, page);
    })


    test('Blank "City" field', async ({ addressForm, page }) => {

        await addressFormSteps(addressForm, blankCityField);
        await negativeCasesCheck(addressForm, blankCityField, page);
    })


    test('Blank "Postcode" field', async ({ addressForm, page }) => {

        await addressFormSteps(addressForm, blankPostcodeField);
        await negativeCasesCheck(addressForm, blankPostcodeField, page);
    })


    test('Blank "Phone" field', async ({ addressForm, page }) => {

        await addressFormSteps(addressForm, blankPhoneField);
        await negativeCasesCheck(addressForm, blankPhoneField, page);
    })


    test('Blank "Email" field', async ({ addressForm, page }) => {

        await addressFormSteps(addressForm, blankEmailField);
        await negativeCasesCheck(addressForm, blankEmailField, page);
    })
})