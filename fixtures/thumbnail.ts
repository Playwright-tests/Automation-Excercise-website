import { test as base } from "@playwright/test";
import { URLs } from "../enums/URLs";
import { ProductThumbnail } from "../page-object/thumbnail/productThumbnail";
import { BlogThumbnail } from "../page-object/thumbnail/blogThumbnail";

export { expect } from "@playwright/test";

export type ProductThumbnailFixture = {

    productThumbnail: ProductThumbnail
}

export type BlogThumbnailFixture = {

    blogThumbnail: BlogThumbnail;
}


export const test = base.extend<ProductThumbnailFixture & BlogThumbnailFixture>({

    productThumbnail:async ({page}, use) => {
        
        const productThumbnail = new ProductThumbnail(page);

        await productThumbnail.goto(URLs.HomePage);
        await use(productThumbnail);
    },

    blogThumbnail:async ({page}, use) => {
        
        const blogThumbnail = new BlogThumbnail(page);

        await blogThumbnail.goto(URLs.HomePage);
        await use(blogThumbnail);
    }
})