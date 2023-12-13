import { Page } from "@playwright/test";
import { ThumbnailCategory } from "../../enums/thumbnailCategory.spec";
import { Thumbnail } from "../../page-object/thumbnail/thumbnail.spec";

export interface ThumbnailGenerator {

    createThumbnail(page: Page, category: ThumbnailCategory, name: string) : Thumbnail;
}