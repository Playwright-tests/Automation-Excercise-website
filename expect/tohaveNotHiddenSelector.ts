import {expect as baseExpect, Page, selectors} from "@playwright/test";

export const expect = baseExpect.extend({

    async toHaveNotHiddenSelector(page: Page, selector: string) {

        const assertionName = 'toHaveNotHiddenSelector';
        let pass: boolean;

        try {

            await page.waitForSelector(selector, {timeout: 3000, state: 'visible'});
            pass = true;

        } catch {

            pass = false;
        }

        const message = pass ? () => 'The selector "' + selector + '" is visible' :
                               () => 'The selector "' + selector + '" is not visible';

        return {

            name: assertionName,
            pass,
            message
        }
    }
})