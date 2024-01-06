import { test as base } from "@playwright/test";
import { ThumbnailType } from "../enums/thumbnailType";
import { ThumbnailProvider } from "../providers/thumbnails/thumbnailProvider";
import { ThumbnailGenerator } from "../providers/thumbnails/thumbnailGenerator";
import { URLs } from "../enums/URLs";

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