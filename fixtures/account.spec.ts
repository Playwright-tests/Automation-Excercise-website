import { test as base } from "@playwright/test";
import { AccountNavigation } from "../page-object/account/accountNavigation.spec";
import { AccountService } from "../helpers/accountService.spec";
import { type } from "os";
import { AddressFormNavigation } from "../page-object/account/addressFormNavigation.spec";
import { getLinkData } from "../data-loaders/link.spec";

type AccountNavigationFixture = {

    accountNavigation: AccountNavigation
}

type AddressFormNavigationFixture = {

    addressFormNavigation: AddressFormNavigation
}

export const test = base.extend<AccountNavigationFixture & AddressFormNavigationFixture>({

    accountNavigation:async ({page}, use) => {
        
        const accountNavigation = new AccountNavigation(page);
        
        await AccountService.login(page);
        await use(accountNavigation);
    },

    addressFormNavigation:async ({page}, use) => {
        
        const accountNavigation = new AccountNavigation(page);
        const addressFormNavigation = new AddressFormNavigation(page);

        const link = getLinkData('accountNavigation');

        await AccountService.login(page);
        await accountNavigation.clickLink(link[3].linkText);
        await use(addressFormNavigation);
    }
})

export { expect } from "@playwright/test";