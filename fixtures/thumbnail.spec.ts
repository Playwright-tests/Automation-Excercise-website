import { test as base } from "@playwright/test";
import { ThumbnailType } from "../enums/thumbnailType.spec";
import { ThumbnailProvider } from "../providers/thumbnails/thumbnailProvider.spec";
import { ThumbnailGenerator } from "../providers/thumbnails/thumbnailGenerator.spec";
import { URLs } from "../enums/URLs.spec";

export type ProductThumbnailFixture = {

    thumbnailGenerator: ThumbnailGenerator
}

export type ThumbnailTypeFixture = {

    thumbnailType: ThumbnailType
}


export const test = base.extend<ProductThumbnailFixture & ThumbnailTypeFixture>({

    thumbnailType: [ThumbnailType.Product, {option: true}],

    thumbnailGenerator:async ({thumbnailType, page}, use) => {
        
        const thumbnailGenerator = ThumbnailProvider.getGenerator(thumbnailType);

        await page.goto(URLs.HomePage);
        await use(thumbnailGenerator);
    }
})

export { expect } from "@playwright/test";