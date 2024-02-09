import { AddressDataProvider } from "../../../../data-loaders/dataProviders";
import { URLs } from "../../../../enums/URLs";
import { TestScenarios } from "../../../../enums/testScenarios";
import { test, expect } from "../../../../fixtures/account";
import { fillAddressForm, fillAddressFormAndAcceptChanges } from "../steps.spec";

const addressData = AddressDataProvider.get(); 

test.describe('Submitting',async () => {

    test('Clicking the "Save address" button',async ({addressForm}) => {
        
        await fillAddressFormAndAcceptChanges(addressForm, addressData[TestScenarios.CORRECT]);
        await expect(await addressForm.getPage()).toHaveURL(URLs.AddressFormNavigation);
    })

    test('Pressing ENTER',async ({addressForm}) => {
        
        await fillAddressForm(addressForm, addressData[TestScenarios.CORRECT]);

        await test.step('Press ENTER',async () => {
            
            await (await addressForm.getPage()).keyboard.press('Enter');
        })

        await expect(await addressForm.getPage()).toHaveURL(URLs.AddressFormNavigation);
    })
})