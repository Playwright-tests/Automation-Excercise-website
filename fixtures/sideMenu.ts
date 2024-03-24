import { test as base } from "@playwright/test";
import { CategoryMenu } from "../page-object/side-menu/categoryMenu";
import { URLs } from "../enums/URLs";
import { WomenDropdownList } from "../page-object/side-menu/womenDropdownList";
import { MenDropdownList } from "../page-object/side-menu/menDropdownList";
import { KidsDropdownList } from "../page-object/side-menu/kidsDropdownList";
import { BrandsMenu } from "../page-object/side-menu/brandsMenu";

export { expect } from "@playwright/test";

export const test = base.extend<{categoryMenu: CategoryMenu} & {womenDropdownList: WomenDropdownList} &
                                {menDropdownList: MenDropdownList} & {kidsDropdownList: KidsDropdownList} &
                                {brandsMenu: BrandsMenu}>({

    categoryMenu:async ({page}, use) => {
        
        const categoryMenu = new CategoryMenu(page);
        await categoryMenu.goto(URLs.HOME_PAGE);
        await use(categoryMenu);
    },

    womenDropdownList:async ({page}, use) => {
        
        const categoryMenu = new CategoryMenu(page);
        const womenDropdownList = new WomenDropdownList(page);
        await categoryMenu.goto(URLs.HOME_PAGE);
        await categoryMenu.clickWomenLink();
        await use(womenDropdownList);
    },

    menDropdownList:async ({page}, use) => {
        
        const categoryMenu = new CategoryMenu(page);
        const menDropdownList = new MenDropdownList(page);
        await categoryMenu.goto(URLs.HOME_PAGE);
        await categoryMenu.clickMenLink();
        await use(menDropdownList);
    },

    kidsDropdownList:async ({page}, use) => {
        
        const categoryMenu = new CategoryMenu(page);
        const kidsDropdownList = new KidsDropdownList(page);
        await categoryMenu.goto(URLs.HOME_PAGE);
        await categoryMenu.clickKidsLink();
        await use(kidsDropdownList);
    },

    brandsMenu:async ({page}, use) => {
        
        const brandsMenu = new BrandsMenu(page);
        await brandsMenu.goto(URLs.HOME_PAGE);
        await use(brandsMenu);
    }
})