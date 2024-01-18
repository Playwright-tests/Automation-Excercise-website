import { Page } from "@playwright/test";
import { ThumbnailCategory } from "../../enums/thumbnailCategory";
import { ThumbnailFactory } from "./thumbnailFactory";
import { BlogThumbnail } from "../../page-object/thumbnail/blogThumbnail";

export class BlogThumbnailFactory implements ThumbnailFactory {

    createThumbnail(page: Page, category: ThumbnailCategory, linkText: string): BlogThumbnail {
        
        const parent = page.locator('#tyche_recent-' + category);
        const link = parent.getByRole('link', {name: linkText});

        const blogThumbnail = new BlogThumbnail(page);
        blogThumbnail.setLink(link);

        return blogThumbnail;
    }
}