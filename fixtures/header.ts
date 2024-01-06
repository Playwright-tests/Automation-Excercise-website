import { test as base } from "@playwright/test";
import { Header } from "../page-object/header/header";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";


export const test = base.extend<{header: Header}>({

    header:async ({page}, use) => {
        
        const header = new Header(page);

        await header.goto(URLs.HomePage);
        await use(header);
    }
})