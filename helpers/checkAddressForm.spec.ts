import { AddressForm } from "../page-object/account/address-form/addressForm.spec";

export async function checkAddressForm(addressForm: AddressForm, data: any) {
    
    const errors: string[] = [];

    if(await addressForm.getFirstName() !== data.firstName) {
        errors.push('Incorrect first name- expected: "' + data.firstName + '", received: "' + await addressForm.getFirstName() + '"');
    }

    if(await addressForm.getLastName() !== data.lastName) {
        errors.push('Incorrect last name- expected: "' + data.lastName + '", received: "' + await addressForm.getLastName() + '"');
    }

    if(await addressForm.getCompany() !== data.company) {
        errors.push('Incorrect company- expected: "' + data.company + '", received: "' + await addressForm.getCompany() + '"');
    }

    if(await addressForm.getAddress1() !== data.address1) {
        errors.push('Incorrect address in the first field- expected: "' + data.address1 + '", received: "' + await addressForm.getAddress1() + '"');
    }

    if(await addressForm.getAddress2() !== data.address2) {
        errors.push('Incorrect address in the second field- expected: "' + data.address2 + '", received: "' + await addressForm.getAddress2() + '"');
    }

    if(await addressForm.getCity() !== data.city) {
        errors.push('Incorrect town / city- expected: "' + data.city + '", received: "' + await addressForm.getCity() + '"');
    }

    if(await addressForm.getPostcode() !== data.postcode) {
        errors.push('Incorrect postcode- expected: "' + data.postcode + '", received: "' + await addressForm.getPostcode() + '"');
    }

    if(await addressForm.getPhone() !== data.phone) {
        errors.push('Incorrect phone- expected: "' + data.phone + '", received: "' + await addressForm.getPhone() + '"');
    }

    if(await addressForm.getEmail() !== data.email) {
        errors.push('Incorrect email- expected: "' + data.email + '", received: "' + await addressForm.getEmail() + '"');
    }

    return errors;
}