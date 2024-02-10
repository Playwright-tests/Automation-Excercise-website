import { Page } from "@playwright/test";
import { StringContainer } from "../../../support/stringContainer";

export async function handlePopup(page: Page, receivedMessage: StringContainer) {
    
    page.on('dialog',async dialog => {
        
        receivedMessage.setValue(dialog.message());
        await dialog.dismiss().catch(() => {});
    })
}