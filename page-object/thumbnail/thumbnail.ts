import { Locator } from "@playwright/test";

export interface Thumbnail {

    setLink(link: Locator) : void;
    clickLink();
}