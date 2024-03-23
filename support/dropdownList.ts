import { test, expect, Page } from "@playwright/test";

export async function menuAction(page: Page, linkName: string, expectedURL: string, func: any) {
    
    await test.step('Click the "' + linkName + '" link',async () => {
        await func();
    })

    await expect(page).toHaveURL(expectedURL);
}