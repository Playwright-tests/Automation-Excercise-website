import { ThumbnailCategory } from "../../../enums/thumbnailCategory";
import { ThumbnailType } from "../../../enums/thumbnailType";
import { test, expect } from "../../../fixtures/thumbnail";
import { steps } from "../steps.spec";
import { BlogsLinksTestdataLoader } from "../../../data-loaders/dataLoaders";

test.use({thumbnailType: ThumbnailType.Blog});
BlogsLinksTestdataLoader.init();

test.describe('Home page links to blogs from the first section',async () => {
    
    for(const link of BlogsLinksTestdataLoader.blogs_1) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailFactory, page}) => {

            await steps(page, ThumbnailCategory.Recent1, thumbnailFactory, link.linkText);
            await expect(page).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to blogs from the second section',async () => {
    
    for(const link of BlogsLinksTestdataLoader.blogs_2) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailFactory, page}) => {

            await steps(page, ThumbnailCategory.Recent2, thumbnailFactory, link.linkText);
            await expect(page).toHaveURL(link.url);
        })
    }
})