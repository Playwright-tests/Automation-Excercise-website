import { Page } from "@playwright/test";
import { ThumbnailCategory } from "../../enums/thumbnailCategory";
import { Thumbnail } from "../../page-object/thumbnail/thumbnail";

export interface ThumbnailFactory {

    createThumbnail(page: Page, category: ThumbnailCategory, name: string) : Thumbnail;
}