import { test } from "../../../fixtures/account.spec";
import { AddressForm } from "../../../page-object/account/address-form/addressForm.spec";

export async function dropdownListSteps(country: string, addressForm: AddressForm) {
    
    await test.step('Click the arrow',async () => {
            
        await addressForm.getDropdownList().clickArrow();
    })

    await test.step('Enter "' + country + '" in the field',async () => {
        
        await addressForm.getDropdownList().setCountry(country);
    })
}

export async function addressFormSteps(addressForm: AddressForm, addresFormData: any) {
    
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
        
        await addressForm.setTown(addresFormData.city);
    })

    await test.step('Enter "' + addresFormData.phone + '" in the "Phone" field',async () => {
        
        await addressForm.setPhone(addresFormData.phone);
    })

    await test.step('Enter "' + addresFormData.email + '" in the "Email" field',async () => {
        
        await addressForm.setEmail(addresFormData.email);
    })

    await test.step('Click the "Save address" button',async () => {
        
        await addressForm.clickSaveAddressButton();
    })
}