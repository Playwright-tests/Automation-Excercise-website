import { Locator } from "@playwright/test";

export async function inputVerification(locator: Locator) {
    
    const validationMessage = await locator.evaluate((element) => {
        const input = element as HTMLInputElement;
        return input.validationMessage;
    })

    return validationMessage;
}