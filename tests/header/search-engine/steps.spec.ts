import { test } from "@playwright/test";
import { SearchEngine } from "../../../page-object/header/searchEngine";

export async function steps(searchEngine: SearchEngine, phrase: string) {
    
    await test.step('Enter the "' + phrase + '" phrase',async () => {
        
        await searchEngine.setText(phrase);
    })

    await test.step('Click the search button',async () => {
        
        await searchEngine.clickSearchButton();
    })
}