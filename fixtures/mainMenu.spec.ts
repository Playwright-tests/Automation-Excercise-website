import { test as base } from "@playwright/test";
import { MainMenu } from "../page-object/main-menu/mainMenu.spec";

type MainMenuFixture = {

    mainMenu: MainMenu
}

export const test = base.extend<MainMenuFixture>({

    mainMenu:async ({page}, use) => {
        
        const mainMenu = new MainMenu(page);

        await mainMenu.goto();
        await use(mainMenu);
    }
})

export { expect } from "@playwright/test";