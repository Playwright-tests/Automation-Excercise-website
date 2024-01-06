import { Page } from "@playwright/test";
import { ThumbnailGenerator } from "./thumbnailGenerator.spec";
import { ProductThumbnail } from "../../page-object/thumbnail/productThumbnail.spec";
import { ThumbnailCategory } from "../../enums/thumbnailCategory.spec";

export class ProductThumbnailGenerator implements ThumbnailGenerator {

    createThumbnail(page: Page, category: ThumbnailCategory, linkText: string): ProductThumbnail {

        const tycheProducts = page.locator('#tyche_products-' + category);
        const link = tycheProducts.getByRole('link', {name: linkText, exact: true});
        const parent = link.locator('xpath=".."').locator('xpath=".."');
        const price = parent.locator('.price');
        const addToCartButton = parent.locator('.ajax_add_to_cart');

        const productThumbnail = new ProductThumbnail(page);
        productThumbnail.setLink(link);
        productThumbnail.setPrice(price);
        productThumbnail.setAddToCartButton(addToCartButton);

        return productThumbnail;
    }
}