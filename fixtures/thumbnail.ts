import { test as base } from "@playwright/test";
import { ThumbnailType } from "../enums/thumbnailType";
import { ThumbnailProvider } from "../providers/thumbnails/thumbnailProvider";
import { ThumbnailFactory } from "../providers/thumbnails/thumbnailFactory";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";

export type ProductThumbnailFixture = {

    thumbnailFactory: ThumbnailFactory
}

export type ThumbnailTypeFixture = {

    thumbnailType: ThumbnailType
}


export const test = base.extend<ProductThumbnailFixture & ThumbnailTypeFixture>({

    thumbnailType: [ThumbnailType.Product, {option: true}],

    thumbnailFactory:async ({thumbnailType, page}, use) => {
        
        const thumbnailFactory = ThumbnailProvider.getFactory(thumbnailType);

        await page.goto(URLs.HomePage);
        await use(thumbnailFactory);
    }
})