import { ThumbnailCategory } from "../../enums/thumbnailCategory.spec";
import { test, expect } from "../../fixtures/thumbnail.spec";
import { getLinkData } from "../../helpers/link.spec";

const links = getLinkData('allBlackTopsProducts');

test.describe('Home page links to products from "ALL BLACK TOPS" category',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailGenerator, page}) => {
            
            const thumbnail = thumbnailGenerator.createThumbnail(page, ThumbnailCategory.AllBlackTops, link.linkText);

            await test.step('Click the "' + link.linkText + '" link',async () => {
                
                await thumbnail.clickLink();
            })
        })
    }
})