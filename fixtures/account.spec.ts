import { test as base } from "@playwright/test";
import { AccountNavigation } from "../page-object/account/accountNavigation.spec";
import { AccountService } from "../helpers/accountService.spec";

type AccountNavigationFixture = {

    accountNavigation: AccountNavigation
}

export const test = base.extend<AccountNavigationFixture>({

    accountNavigation:async ({page}, use) => {
        
        const accountNavigation = new AccountNavigation(page);
        
        await AccountService.login(page);
        await use(accountNavigation);
    }
})

export { expect } from "@playwright/test";