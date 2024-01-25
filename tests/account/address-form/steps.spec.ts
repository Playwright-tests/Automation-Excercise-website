import { test } from "../../../fixtures/account";
import { AddressForm } from "../../../page-object/address-form/addressForm";

export async function fillDropdownList(country: string, addressForm: AddressForm) {
    
    await test.step('Click the arrow',async () => {
            
        await addressForm.getDropdownList().clickArrow();
    })

    await test.step('Enter "' + country + '" in the field',async () => {
        
        await addressForm.getDropdownList().setCountry(country);
    })
}

export async function fillDropdownListAndAcceptChanges(country: string, addressForm: AddressForm) {
    
    await fillDropdownList(country, addressForm);

    await test.step('Press ENTER',async () => {
        
        await (await addressForm.getPage()).keyboard.press('Enter');
    })
}

export async function typeCountry(country: string, addressForm: AddressForm) {
    
    await test.step('Click the arrow',async () => {
        
        await addressForm.getDropdownList().clickArrow();
    })

    await test.step('Type "' + country + '"',async () => {
        
        await addressForm.getDropdownList().typeCoutry(country);
    })
}

export async function fillAddressForm(addressForm: AddressForm, addresFormData: any) {
    
    await test.step('Click the arrow',async () => {
        
        await addressForm.getDropdownList().clickArrow();
    })

    await test.step('Enter "' + addresFormData.country + '" in the field',async () => {
        
        await addressForm.getDropdownList().setCountry(addresFormData.country);
    })

    await test.step('Press Enter',async () => {
        
        await addressForm.getDropdownList().pressEnter();
    })

    await test.step('Enter "' + addresFormData.firstName + '" in the "First name" field',async () => {
        
        await addressForm.setFirstName(addresFormData.firstName);
    })

    await test.step('Enter "' + addresFormData.lastName + '" in the "Last name" field',async () => {
        
        await addressForm.setLastName(addresFormData.lastName);
    })

    await test.step('Enter "' + addresFormData.company + '" in the "Company" field',async () => {
        
        await addressForm.setCompany(addresFormData.company);
    })

    await test.step('Enter "' + addresFormData.address1 + '" in the "Street addres" field',async () => {
        
        await addressForm.setAddress_1(addresFormData.address1);
    })

    await test.step('Enter "' + addresFormData.address2 + '" in the second "Street address" field',async () => {
        
        await addressForm.setAddress_2(addresFormData.address2);
    })

    await test.step('Enter "' + addresFormData.city + '" in the "Town / City" field',async () => {
        
        await addressForm.setCity(addresFormData.city);
    })

    await test.step('Enter "' + addresFormData.postcode + '" in the "Postcode / ZIP" field',async () => {
        
        await addressForm.setPostcode(addresFormData.postcode);
    })

    await test.step('Enter "' + addresFormData.phone + '" in the "Phone" field',async () => {
        
        await addressForm.setPhone(addresFormData.phone);
    })

    await test.step('Enter "' + addresFormData.email + '" in the "Email" field',async () => {
        
        await addressForm.setEmail(addresFormData.email);
    })
}

export async function fillAddressFormAndAcceptChanges(addressForm: AddressForm, addresFormData: any) {
    
    await fillAddressForm(addressForm, addresFormData);

    await test.step('Click the "Save address" button',async () => {
        
        await addressForm.clickSaveAddressButton();
    })
}

export async function textInputVerificationSteps(func: any, fieldName: string, text: string) {
    
    await test.step('Enter "' + text + '" in the "' + fieldName + '" field',async () => {

        await func();
    })
}