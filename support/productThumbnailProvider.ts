import { Page } from "@playwright/test";
import { ProductThumbnail } from "../page-object/thumbnail/productThumbnail";

export class ProductThumbnailProvider {

    static create(page: Page, tycheProduct: string, linkText: string): ProductThumbnail {

        const tycheProducts = page.locator('#tyche_products-' + tycheProduct);
        const link = tycheProducts.getByRole('link', {name: linkText, exact: true});
        const parent = link.locator('xpath=..').locator('xpath=..');
        
        const productThumbnail = new ProductThumbnail(page);
        productThumbnail.setParent(parent);
        productThumbnail.setLink(link);
        productThumbnail.setPrice(parent.locator('.price'));
        productThumbnail.setAddToCartButton(parent.locator('.ajax_add_to_cart')); 

        return productThumbnail;
    }
}