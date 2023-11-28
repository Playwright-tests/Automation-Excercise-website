import { Page } from "@playwright/test";
import { ThumbnailGenerator } from "./thumbnailGenerator.spec";
import { BlogThumbnail } from "../../page-object/thumbnail/blogThumbnail.spec";

export class BlogThumbnailGenerator implements ThumbnailGenerator {

    createThumbnail(page: Page, category: ThumbnailCategory, linkText: string): BlogThumbnail {
        
        const parent = page.locator('#tyche_recent-' + category);
        const link = parent.getByRole('link', {name: linkText});

        const blogThumbnail = new BlogThumbnail(page);
        blogThumbnail.setLink(link);

        return blogThumbnail;
    }
}