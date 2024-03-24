import { test as base } from "@playwright/test";
import { ConfirmModalDialog } from "../page-object/confirm-modal-dialog/confirmModalDialog";
import { ProductPage } from "../page-object/product-page/productPage";

export { expect } from "@playwright/test";

export const test = base.extend<{url: string} & {hidden: ConfirmModalDialog} & {visible: ConfirmModalDialog}>({

    url: ['noUrl', {option: true}],

    hidden:async ({page, url}, use) => {
        
        const productPage = new ProductPage(page);
        const hidden = new ConfirmModalDialog(page);
        await productPage.goto(url);
        await use(hidden);
    },

    visible:async ({page, url}, use) => {
        
        const productPage = new ProductPage(page);
        const visible = new ConfirmModalDialog(page);
        await productPage.goto(url);
        await productPage.clickAddToCartButton();
        await use(visible)
    }
})