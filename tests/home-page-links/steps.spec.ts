import { Page, test } from "@playwright/test";
import { ThumbnailCategory } from "../../enums/thumbnailCategory.spec";
import { ThumbnailGenerator } from "../../providers/thumbnails/thumbnailGenerator.spec";

export async function steps(page: Page, category: ThumbnailCategory, generator: ThumbnailGenerator, linkText: string) {
    
    const thumbnail = generator.createThumbnail(page, category, linkText);

    await test.step('Click the "' + linkText + '"',async () => {
        
        await thumbnail.clickLink();
    })
}