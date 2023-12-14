import { test, expect } from "../../../fixtures/account.spec";
import { getAddressFormData } from "../../../data-loaders/addressFormData.spec";
import { addressFormSteps, blankFieldsCheck } from "./steps.spec";
import { URLs } from "../../../enums/URLs.spec";
import { checkAddressForm } from "../../../helpers/checkAddressForm.spec";

const correctAddressFormData = getAddressFormData('correct');
const blankFirstNameField = getAddressFormData('withoutFirstName');
const blankLastNameField = getAddressFormData('withoutLastName');
const blankAddressField = getAddressFormData('withoutAddress');
const blankCityField = getAddressFormData('withoutCity');
const blankPostcodeField = getAddressFormData('withoutPostcode');
const blankPhoneField = getAddressFormData('withoutPhone');
const blankEmailField = getAddressFormData('withoutEmail');

test.describe('Filling the billing address form',async () => {
    
    for(const data of correctAddressFormData) {

        test('Correct data',async ({addressForm, page}) => {
            
            await addressFormSteps(addressForm, data);
            await expect(page).toHaveURL(URLs.AddressFormNavigation);
            
            await page.goto(URLs.BillingAddressForm);

            const errors = await checkAddressForm(addressForm, data);
                
            if(errors.length === 0) {

                expect(true).toBeTruthy();

            } else {

                console.error('Validation errors:', errors);
                expect(false).toBeTruthy();
            }
        })
    }
})

test.describe('Blank form fields',async () => {
    
    for(const data of blankFirstNameField) {

        test('Blank "First name" field',async ({addressForm, page}) => {
            
            await addressFormSteps(addressForm, data);
            await blankFieldsCheck(addressForm, data, page);
        })
    }

    for(const data of blankLastNameField) {

        test('Blank "Last name" field',async ({addressForm, page}) => {
            
            await addressFormSteps(addressForm, data);
            await blankFieldsCheck(addressForm, data, page);
        })
    }

    for(const data of blankAddressField) {

        test('Blank required "Street address" field',async ({addressForm, page}) => {
            
            await addressFormSteps(addressForm, data);
            await blankFieldsCheck(addressForm, data, page);
        })
    }

    for(const data of blankCityField) {

        test('Blank "City" field',async ({addressForm, page}) => {
            
            await addressFormSteps(addressForm, data);
            await blankFieldsCheck(addressForm, data, page);
        })
    }

    for(const data of blankPostcodeField) {

        test('Blank "Postcode" field',async ({addressForm, page}) => {
            
            await addressFormSteps(addressForm, data);
            await blankFieldsCheck(addressForm, data, page);
        })
    }

    for(const data of blankPhoneField) {

        test('Blank "Phone" field',async ({addressForm, page}) => {
            
            await addressFormSteps(addressForm, data);
            await blankFieldsCheck(addressForm, data, page);
        })
    }

    for(const data of blankEmailField) {

        test('Blank "Email" field',async ({addressForm, page}) => {
            
            await addressFormSteps(addressForm, data);
            await blankFieldsCheck(addressForm, data, page);
        })
    }
})