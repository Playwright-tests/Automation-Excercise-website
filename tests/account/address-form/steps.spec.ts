import { test } from "../../../fixtures/account.spec";
import { AddressForm } from "../../../page-object/account/address-form/addressForm.spec";

export async function dropdownListSteps(country: string, addressForm: AddressForm) {
    
    await test.step('Click the arrow',async () => {
            
        await addressForm.getDropdownList().clickArrow();
    })

    await test.step('Enter the "' + country + '" int the field',async () => {
        
        await addressForm.getDropdownList().setCountry(country);
    })
}