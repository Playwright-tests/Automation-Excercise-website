import { Page } from "@playwright/test";
import { Thumbnail } from "../../page-object/thumbnail/thumbnail.spec";

export interface ThumbnailGenerator {

    createThumbnail(page: Page, category: ThumbnailCategory, name: string) : Thumbnail;
}