import { ThumbnailCategory } from "../../enums/thumbnailCategory.spec";
import { ThumbnailType } from "../../enums/thumbnailType.spec";
import { test, expect } from "../../fixtures/thumbnail.spec";
import { getLinkData } from "../../helpers/link.spec";

const links = getLinkData('blogs_1');

test.use({thumbnailType: ThumbnailType.Blog});

test.describe('Home page links to blogs from the first section',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailGenerator, page}) => {

            const thumbnail = thumbnailGenerator.createThumbnail(page, ThumbnailCategory.Recent1, link.linkText);

            await test.step('Click the "' + link.linkText + '" link',async () => {
                
                await thumbnail.clickLink();
            })

            await expect(page).toHaveURL(link.url);
        })
    }
})