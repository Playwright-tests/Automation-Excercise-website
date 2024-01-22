import { getAddressFormData } from "../../../data-loaders/addressFormData";
import { URLs } from "../../../enums/URLs";
import { test, expect } from "../../../fixtures/account";
import { fillAddressForm, fillAddressFormAndAcceptChanges } from "./steps.spec";

const correct = getAddressFormData('correct')[0];


test.describe('Submitting',async () => {
    
    test('Clicking the "Save address" button',async ({addressForm}) => {
        
        await fillAddressFormAndAcceptChanges(addressForm, correct);
        await expect(await addressForm.getPage()).toHaveURL(URLs.AddressFormNavigation);
    })

    test('Pressing ENTER',async ({addressForm}) => {
        
        await fillAddressForm(addressForm, correct);

        await test.step('Press ENTER',async () => {
            
            await (await addressForm.getPage()).keyboard.press('Enter');
        })

        await expect(await addressForm.getPage()).toHaveURL(URLs.AddressFormNavigation);
    })
})