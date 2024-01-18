import { ThumbnailCategory } from "../../enums/thumbnailCategory";
import { ThumbnailType } from "../../enums/thumbnailType";
import { test, expect } from "../../fixtures/thumbnail";
import { getLinkData } from "../../data-loaders/link";
import { steps } from "./steps.spec";

const links_1 = getLinkData('blogs_1');
const links_2 = getLinkData('blogs_2');

test.use({thumbnailType: ThumbnailType.Blog});

test.describe('Home page links to blogs from the first section',async () => {
    
    for(const link of links_1) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailFactory, page}) => {

            await steps(page, ThumbnailCategory.Recent1, thumbnailFactory, link.linkText);
            await expect(page).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to blogs from the second section',async () => {
    
    for(const link of links_2) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailFactory, page}) => {

            await steps(page, ThumbnailCategory.Recent2, thumbnailFactory, link.linkText);
            await expect(page).toHaveURL(link.url);
        })
    }
})