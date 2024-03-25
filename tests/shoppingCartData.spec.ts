import { test, expect } from "../fixtures/shoppingCart";
import { getStrings } from "../testdata-IO/testdataLoader";
import { TestDataFileNames } from "../enums/testdataFileNames";
import { ProductData } from "../types/types";
import { ProductPage } from "../page-object/product-page/productPage";
import { URLs } from "../enums/URLs";
import { ConfirmModalDialog } from "../page-object/product-page/confirmModalDialog";
import { ShoppingCart } from "../page-object/shopping-cart/shoppingCart";
import { calculateTotal } from "../support/calculateTotal";

const productPageURLs = getStrings(TestDataFileNames.PRODUCT_PAGE_URLS, 'urls');

test.describe('The shopping cart data',async () => {
    
    let productPage: ProductPage;
    let confirmModalDialog: ConfirmModalDialog;
    let productData: ProductData[] = [];

    test.beforeEach(async ({page}) => {
        
        productPage = new ProductPage(page);
        confirmModalDialog = new ConfirmModalDialog(page);
    })

    async function setData() {

        productData.push({
            name: await productPage.getProductName() ?? '',
            price: await productPage.getProductPrice() ?? '',
            quantity: await productPage.getQuantity() ?? ''
        });
    }

    function checkNumberOfProducts(shoppingCart: ShoppingCart) {
        
        expect(shoppingCart.getTable().getRowsCount()).toEqual(productPageURLs.length);
    }

    async function checkData(shoppingCart: ShoppingCart) {
        
        for(let i = 0; i < productData.length; i++) {

            expect.soft(await shoppingCart.getTable().getProductName(i)).toEqual(productData[i].name);
            expect.soft(await shoppingCart.getTable().getPrice(i)).toEqual(productData[i].price);
            expect.soft(await shoppingCart.getTable().getQuantity(i)).toEqual(productData[i].quantity);
        }
    }

    async function checkTotal(shoppingCart: ShoppingCart) {
        
        for(let i = 0; i < productData.length; i++) {

            const expectedTotal = calculateTotal(productData[i].price, productData[i].quantity);
            expect(await shoppingCart.getTable().getTotal(i)).toEqual(expectedTotal);
        }
    }

    test('Adding products to the shopping cart',async ({empty}) => {
        
        for(const url of productPageURLs) {
            await (await empty.getPage()).goto(url);
            await setData();
            await productPage.clickAddToCartButton();
            await (await empty.getPage()).waitForSelector(confirmModalDialog.getSelector());
        }

        await (await empty.getPage()).goto(URLs.SHOPPING_CART_PAGE);
        await empty.getTable().findRows();
        checkNumberOfProducts(empty);
        await checkData(empty);
        await checkTotal(empty);
    })
})