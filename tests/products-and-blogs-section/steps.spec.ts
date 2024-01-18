import { Page, test } from "@playwright/test";
import { ThumbnailCategory } from "../../enums/thumbnailCategory";
import { ThumbnailFactory } from "../../providers/thumbnails/thumbnailFactory";

export async function steps(page: Page, category: ThumbnailCategory, factory: ThumbnailFactory, linkText: string) {
    
    const thumbnail = factory.createThumbnail(page, category, linkText);

    await test.step('Click the "' + linkText + '"',async () => {
        
        await thumbnail.clickLink();
    })
}