import { test } from "../../../fixtures/shoppingCart";
import { expect } from "../../../expect/tohaveNotHiddenSelector";
import { Product } from "../../../support/product";

test.describe('Shopping cart contents',async () => {
    
    test('Shopping cart after adding a product throught thumbnail on homepage',async ({afterAddingThroughThumbnailOnHomepage}) => {

        await expect(await afterAddingThroughThumbnailOnHomepage.getPage()).toHaveNotHiddenSelector(afterAddingThroughThumbnailOnHomepage.getTableSelector());
        expect.soft(await afterAddingThroughThumbnailOnHomepage.getRow(0).getProductName()).toEqual(Product.getName());
        expect.soft(await afterAddingThroughThumbnailOnHomepage.getRow(0).getPrice()).toEqual(Product.getPrice());
    })

    test('Shopping cart after adding a product through product page',async ({afterAddingThroughProductPage}) => {
        
        await expect(await afterAddingThroughProductPage.getPage()).toHaveNotHiddenSelector(afterAddingThroughProductPage.getTableSelector());
        expect.soft(await afterAddingThroughProductPage.getRow(0).getProductName()).toEqual(Product.getName());
        expect.soft(await afterAddingThroughProductPage.getRow(0).getPrice()).toEqual(Product.getPrice());
    })
})