import { Locator, Page } from "@playwright/test";
import { Thumbnail } from "./thumbnail";
import { BasePage } from "../base/BasePage";

export class BlogThumbnail extends BasePage implements Thumbnail {

    private link: Locator;

    constructor(page: Page) {

        super(page);
    }

    setLink(link: Locator): void {
        
        this.link = link;
    }

    async clickLink() {
        
        await this.link.click();
    }
}