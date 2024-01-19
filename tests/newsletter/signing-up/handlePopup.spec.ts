import { Page } from "@playwright/test";
import { StringContainer } from "../../../utils/stringContainer";

export async function handlePopup(page: Page, receivedMessage: StringContainer) {
    
    page.on('dialog',async dialog => {
        
        receivedMessage.setValue(dialog.message());
        await dialog.dismiss().catch(() => {});
    })
}