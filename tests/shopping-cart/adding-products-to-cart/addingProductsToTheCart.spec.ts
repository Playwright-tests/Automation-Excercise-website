import { test } from "../../../fixtures/shoppingCart";
import { expect } from "../../../expect/tohaveNotHiddenSelector";
import { ProductToCartDataProvider, ThumbnailDataProvider } from "../../../data-loaders/dataProviders";
import { ProductPage } from "../../../page-object/product-page/productPage";
import { URLs } from "../../../enums/URLs";
import { ProductData, ThumbnailData } from "../../../models/models";
import { ShoppingCart } from "../../../page-object/shopping-cart/shoppingCart";
import { ProductThumbnailProvider } from "../../../support/productThumbnailProvider";
import { setProductDataFromProductThumbnail, setProductsDataFromProductPage } from "./helpers.spec";

const productsToCart = ProductToCartDataProvider.get();
const thumbnails = ThumbnailDataProvider.get();

test.describe('Adding products to the shopping cart',async () => {

    let productData: ProductData[] = [];

    async function checkShoppingCartRowsCount(shoppingCart: ShoppingCart) {

        await expect(await shoppingCart.getPage()).toHaveNotHiddenSelector(shoppingCart.getTableSelector());
        expect(shoppingCart.getTable().getRowsCount()).toEqual(productData.length);        
    }

    async function checkShoppingCartTableCells(shoppingCart: ShoppingCart) {
        
        for(let i = 0; i < productData.length; i++) {

            expect.soft(await shoppingCart.getTable().getProductName(i)).toEqual(productData[i].name);
            expect.soft(await shoppingCart.getTable().getPrice(i)).toEqual(productData[i].price);
            expect.soft(await (await shoppingCart.getTable().getQuantityField(i)).getQuantity()).toEqual(productData[i].quantity);
        }
    }

    test('Adding products from product pages',async ({shoppingCart}) => {

        const baseUrl = "https://skleptest.pl/product/";
        const productPage = new ProductPage(await shoppingCart.getPage());

        for(let i = 0; i < productsToCart.length; i++) {

            await test.step('Go to the page with url: ' + baseUrl + productsToCart[i].url, async () => {
                
                await shoppingCart.goto(baseUrl + productsToCart[i].url);
            })

            await test.step('Enter the "' + productsToCart[i].quantity + '" in the quantity field', async () => {
                
                await (await productPage.getQuantityField()).setQuantity(productsToCart[i].quantity);
            })

            await setProductsDataFromProductPage(productPage, productsToCart[i].quantity, productData);

            await test.step('Click the "Add to cart" button', async () => {
              
                await productPage.clickAddToCartButton();
            })
        }

        await (await shoppingCart.getPage()).goto(URLs.ShoppingCart);
        await shoppingCart.getTable().findRows();
        await checkShoppingCartRowsCount(shoppingCart);
        await checkShoppingCartTableCells(shoppingCart);
    })

    test('Adding products from product thumbnails',async ({shoppingCart}) => {
  
        await (await shoppingCart.getPage()).goto(URLs.HomePage);

        for(let i = 0; i < thumbnails.length; i++) {

            const thumbnail = ProductThumbnailProvider.create(await shoppingCart.getPage(), thumbnails[i].tycheProduct, thumbnails[i].link);

            await test.step('Click the "Add to cart" button', async () => {
                
                await thumbnail.clickAddToCartButton();
            })
            
            await setProductDataFromProductThumbnail(thumbnail, productData);          
        }

        await (await shoppingCart.getPage()).goto(URLs.ShoppingCart);
        await shoppingCart.getTable().findRows();
        await checkShoppingCartRowsCount(shoppingCart);
        await checkShoppingCartTableCells(shoppingCart);
    })
})