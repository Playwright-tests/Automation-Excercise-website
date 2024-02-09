import { test as base } from "@playwright/test";
import { AccountNavigation } from "../page-object/account/accountNavigation";
import { login } from "../helpers/accountService";
import { AddressFormNavigation } from "../page-object/account/addressFormNavigation";
import { AddressForm } from "../page-object/address-form/addressForm";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";

type AccountFixture = {

    accountNavigation: AccountNavigation,
    addressFormNavigation: AddressFormNavigation,
    addressForm: AddressForm
}

export const test = base.extend<AccountFixture>({

    accountNavigation:async ({page}, use) => {
        
        const accountNavigation = new AccountNavigation(page);
        
        await login(page);
        await use(accountNavigation);
    },

    addressFormNavigation:async ({page}, use) => {
        
        const accountNavigation = new AccountNavigation(page);
        const addressFormNavigation = new AddressFormNavigation(page);

        await login(page);
        await accountNavigation.goto(URLs.AddressFormNavigation);
        await use(addressFormNavigation);
    },

    addressForm:async ({page}, use) => {
        
        const addressForm = new AddressForm(page);

        await login(page);
        await addressForm.goto(URLs.BillingAddressForm);
        await use(addressForm);
    }
})