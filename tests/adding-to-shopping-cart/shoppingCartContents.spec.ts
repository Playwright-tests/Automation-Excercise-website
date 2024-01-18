import { test as SC_test, expect as SC_expect } from "../../fixtures/shoppingCart";
import { test as TH_test, expect as TH_expect } from "../../fixtures/thumbnail";
import { ProductPage } from "../../page-object/product-page/productPage";
import { URLs } from "../../enums/URLs";
import { ThumbnailCategory } from "../../enums/thumbnailCategory";
import { ProductThumbnail } from "../../page-object/thumbnail/productThumbnail";
import { ShoppingCart } from "../../page-object/shopping-cart/shoppingCart";

SC_test.describe('Adding product to the shopping cart',async () => {
    
    SC_test('Adding a product from the product page',async ({page, emptyShoppingCart}) => {
        
        const productPage = new ProductPage(page);
        await productPage.goto(URLs.AmariShirtProduct);

        const productName = await productPage.getProductTitle();
        const productPrice = await productPage.getProductPrice();

        await SC_test.step('Set quantity',async () => {
            
            await productPage.getQuantityField().setQuantity("1");
        })

        await SC_test.step('Click the "Add to cart" button',async () => {
            
            await productPage.clickAddToCartButton();
        })

        await emptyShoppingCart.goto(URLs.ShoppingCart);

        SC_expect.soft(await emptyShoppingCart.getRow(0).getProductName()).toEqual(productName);
        SC_expect.soft(await emptyShoppingCart.getRow(0).getPrice()).toEqual(productPrice);
    })

    TH_test('Adding a product from the thumbnail',async ({thumbnailFactory, page}) => {
        
        const productThumbnail = thumbnailFactory.createThumbnail(page, ThumbnailCategory.AllBlackTops, "Black Top") as ProductThumbnail;
        const productName = await productThumbnail.getLinkText();
        const productPrice = await productThumbnail.getPrice();

        await TH_test.step('Click the "Add to cart" button',async () => {
                        
            await productThumbnail.clickAddToCartButton();
        })

        await page.waitForSelector(productThumbnail.getViewCartButtonSelector());
        const shoppingCart = new ShoppingCart(page);
        await shoppingCart.goto(URLs.ShoppingCart);

        TH_expect.soft(await shoppingCart.getRow(0).getProductName()).toEqual(productName);
        TH_expect.soft(await shoppingCart.getRow(0).getPrice()).toEqual(productPrice);
    })
})