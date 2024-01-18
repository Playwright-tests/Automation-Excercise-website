import { Page } from "@playwright/test";
import { ThumbnailFactory } from "./thumbnailFactory";
import { ProductThumbnail } from "../../page-object/thumbnail/productThumbnail";
import { ThumbnailCategory } from "../../enums/thumbnailCategory";

export class ProductThumbnailFactory implements ThumbnailFactory {

    createThumbnail(page: Page, category: ThumbnailCategory, linkText: string): ProductThumbnail {

        const tycheProducts = page.locator('#tyche_products-' + category);
        const link = tycheProducts.getByRole('link', {name: linkText, exact: true});
        const parent = link.locator('xpath=..').locator('xpath=..');

        const productThumbnail = new ProductThumbnail(page);
        productThumbnail.setParent(parent);
        productThumbnail.setLink(link);
        productThumbnail.setPrice(parent.locator('.price'));
        productThumbnail.setAddToCartButton(parent.getByRole('link',{name: 'Add to cart'}));

        return productThumbnail;
    }
}