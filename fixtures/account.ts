import { test as base } from "@playwright/test";
import { AccountNavigation } from "../page-object/account/accountNavigation";
import { AccountService } from "../helpers/accountService";
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