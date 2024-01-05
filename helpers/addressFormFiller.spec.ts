import { Page } from "@playwright/test";
import { AddressForm } from "../page-object/account/address-form/addressForm.spec";

export async function fillAddressForm(page: Page, data: any) {
    
    const addressForm = new AddressForm(page);

    await addressForm.getDropdownList().clickParent();
    await addressForm.getDropdownList().setCountry(data.country);
    await addressForm.getDropdownList().pressEnter();
    await addressForm.setFirstName(data.firstName);
    await addressForm.setLastName(data.lastName);
    await addressForm.setCompany(data.company);
    await addressForm.setAddress_1(data.address1);
    await addressForm.setAddress_2(data.address2);
    await addressForm.setPostcode(data.postcode);
    await addressForm.setTown(data.city);
    await addressForm.setPhone(data.phone);
    await addressForm.setEmail(data.email);
}