import { test as base } from "@playwright/test";
import { AccountNavigation } from "../page-object/account/accountNavigation.spec";
import { AccountService } from "../helpers/accountService.spec";
import { AddressFormNavigation } from "../page-object/account/addressFormNavigation.spec";
import { AddressForm } from "../page-object/account/address-form/addressForm.spec";
import { URLs } from "../enums/URLs.spec";

type AccountNavigationFixture = {

    accountNavigation: AccountNavigation
}

type AddressFormNavigationFixture = {

    addressFormNavigation: AddressFormNavigation
}

type AddressFormFixture = {

    addressForm: AddressForm
}


export const test = base.extend<AccountNavigationFixture & AddressFormNavigationFixture & AddressFormFixture>({

    accountNavigation:async ({page}, use) => {
        
        const accountNavigation = new AccountNavigation(page);
        
        await AccountService.login(page);
        await use(accountNavigation);
    },

    addressFormNavigation:async ({page}, use) => {
        
        const accountNavigation = new AccountNavigation(page);
        const addressFormNavigation = new AddressFormNavigation(page);

        await AccountService.login(page);
        await accountNavigation.goto(URLs.AddressFormNavigation);
        await use(addressFormNavigation);
    },

    addressForm:async ({page}, use) => {
        
        const addressForm = new AddressForm(page);

        await AccountService.login(page);
        await addressForm.goto(URLs.BillingAddressForm);
        await use(addressForm);
    }
})

export { expect } from "@playwright/test";