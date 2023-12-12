import { test as base } from "@playwright/test";
import { Header } from "../page-object/header/Header.spec";
import { URLs } from "../enums/URLs.spec";

type HeaderFixture = {

    header: Header
}

export const test = base.extend<HeaderFixture>({

    header:async ({page}, use) => {
        
        const header = new Header(page);

        await header.goto(URLs.HomePage);
        await use(header);
    }
})

export { expect } from "@playwright/test";