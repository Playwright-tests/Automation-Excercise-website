import { Locator, expect } from "@playwright/test";
import { expect as nhdExpect } from "../../../../expect/tohaveNotHiddenSelector";
import { AddressForm } from "../../../../page-object/address-form/addressForm";
import { URLs } from "../../../../enums/URLs";

export async function positive(addressForm: AddressForm, data: any) {
    
    expect.soft(await addressForm.getFirstName()).toEqual(data.firstName);
    expect.soft(await addressForm.getLastName()).toEqual(data.lastName);
    expect.soft(await addressForm.getCompany()).toEqual(data.company);
    expect.soft(await addressForm.getAddress1()).toEqual(data.address1);
    expect.soft(await addressForm.getAddress2()).toEqual(data.address2);
    expect.soft(await addressForm.getCity()).toEqual(data.city);    
    expect.soft(await addressForm.getPostcode()).toEqual(data.postcode);
    expect.soft(await addressForm.getPhone()).toEqual(data.phone);
    expect.soft(await addressForm.getEmail()).toEqual(data.email);
}

export async function negative(addressForm: AddressForm, data: any) {
    
    await expect(await addressForm.getPage()).toHaveURL(URLs.BillingAddressForm);
    await nhdExpect(await addressForm.getPage()).toHaveNotHiddenSelector(addressForm.getErrorMessageSelector());
    expect(await addressForm.getErrorMessage()).toEqual(data.errorMessage);
}

export async function checkValidationMessage(locator: Locator, expectedMessage: string) {
    
    const validationMessage = await locator.evaluate((element) => {

        const input = element as HTMLInputElement;
        return input.validationMessage;
    })

    expect(validationMessage).toContain(expectedMessage);
}

export async function checkLabel(addressForm: AddressForm, labelTitle: string) {
    
    expect(await addressForm.getAdditionailLabelLocator().isVisible()).toBeTruthy();
    expect(await addressForm.getAdditionailLabelLocator().textContent()).toEqual(labelTitle);
}