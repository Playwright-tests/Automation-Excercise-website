import { Page, expect } from "@playwright/test";

export function handlePopup(page: Page, message: string) {
    
    page.once('dialog', dialog => {

        expect(dialog.message()).toEqual(message);
        dialog.dismiss().catch(() => {});
    })
}