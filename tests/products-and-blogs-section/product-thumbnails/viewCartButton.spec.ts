import { ThumbnailCategory } from "../../../enums/thumbnailCategory";
import { test, expect } from "../../../fixtures/thumbnail";
import { expect as nhd_expect } from "../../../expect/tohaveNotHiddenSelector";
import { URLs } from "../../../enums/URLs";
import { ProductThumbnailProvider } from "../../../support/productThumbnailProvider";

test.describe('"View cart" button',async () => {

    let productThumbnail;

    test.beforeEach(async ({page}) => {
        
        productThumbnail = ProductThumbnailProvider.create(page, ThumbnailCategory.AllBlackTops, 'Blank Top');
    })

    test('"View cart" button visibility',async ({page}) => {
        
        await test.step('Click the "Add to cart" button',async () => {
            
            await productThumbnail.clickAddToCartButton();
        })

        await nhd_expect(page).toHaveNotHiddenSelector(productThumbnail.getViewCartButtonSelector());
    })

    test('Clicking the "View cart" button',async ({page}) => {
        
        await test.step('Click the "View cart" button',async () => {
            
            await productThumbnail.clickAddToCartButton();
        })

        await test.step('Click the "View cart" button',async () => {
            
            await productThumbnail.clickViewCartButton();
        })

        await expect(page).toHaveURL(URLs.ShoppingCart);
    })
})