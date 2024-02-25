import { Page, test } from "@playwright/test";
import { ThumbnailCategory } from "../../enums/thumbnailCategory";
import { BlogThumbnailProvider } from "../../support/blogThumbnailProvider";
import { ProductThumbnailProvider } from "../../support/productThumbnailProvider";

export async function blogsSteps(page: Page, category: ThumbnailCategory, linkText: string) {
    
    const thumbnail = BlogThumbnailProvider.create(page, category, linkText);

    await test.step('Click the "' + linkText + '"',async () => {
        
        await thumbnail.clickLink();
    })
}

export async function productsSteps(page: Page, tycheProduct: string, linkText: string) {
    
    const thumbnail = ProductThumbnailProvider.create(page, tycheProduct, linkText);

    await test.step('Click the "' + linkText + '"',async () => {
        
        await thumbnail.clickLink();
    })
}