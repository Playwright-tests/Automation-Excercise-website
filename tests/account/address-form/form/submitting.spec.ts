import { AddressFormTestdataLoader } from "../../../../data-loaders/mockarooDataLoaders";
import { URLs } from "../../../../enums/URLs";
import { test, expect } from "../../../../fixtures/account";
import { fillAddressForm, fillAddressFormAndAcceptChanges } from "../steps.spec";


test.describe('Submitting',async () => {
    
    test.beforeAll(async () => {
        
        AddressFormTestdataLoader.init();
    })

    test('Clicking the "Save address" button',async ({addressForm}) => {
        
        await fillAddressFormAndAcceptChanges(addressForm, AddressFormTestdataLoader.correct);
        await expect(await addressForm.getPage()).toHaveURL(URLs.AddressFormNavigation);
    })

    test('Pressing ENTER',async ({addressForm}) => {
        
        await fillAddressForm(addressForm, AddressFormTestdataLoader.correct);

        await test.step('Press ENTER',async () => {
            
            await (await addressForm.getPage()).keyboard.press('Enter');
        })

        await expect(await addressForm.getPage()).toHaveURL(URLs.AddressFormNavigation);
    })
})