import { URLs } from "../enums/URLs";
import { test, expect } from "../fixtures/checkoutPage";
import { CheckoutPage } from "../page-object/checkout-page/checkoutPage";
import { ProductPage } from "../page-object/product-page/productPage";
import { ProductData } from "../types/types";

test.describe('The checkout page table',async () => {
    
    let productData: ProductData;
    let productPage: ProductPage;

    test.beforeEach(async ({withoutProduct}) => {
        
        productPage = new ProductPage(await withoutProduct.getPage());
        productData = {
            name: await productPage.getProductName() ?? '',
            price: await productPage.getProductPrice() ?? '',
            quantity: await productPage.getQuantity()
        }
    })

    function checkNumberOfProducts(checkoutPage: CheckoutPage) {
        
        expect(checkoutPage.getTable().getRowsCount()).toBeGreaterThan(0);
    }

    async function checkTable(checkoutPage: CheckoutPage) {
        
        expect.soft(await checkoutPage.getTable().getProductName(0)).toEqual(productData.name);
        expect.soft(await checkoutPage.getTable().getPrice(0)).toEqual(productData.price);
        expect.soft(await checkoutPage.getTable().getQuantity(0)).toEqual(productData.quantity);
    }

    test('Verification the checkout page table',async ({withoutProduct}) => {
        
        await test.step('Click the "Add to cart" button',async () => {
            await productPage.clickAddToCartButton();
        })

        await (await productPage.getPage()).waitForSelector(productPage.getConfirmModalDialog().getSelector());
        await (await withoutProduct.getPage()).goto(URLs.CHECKOUT_PAGE);
        await withoutProduct.getTable().findRows();
        checkNumberOfProducts(withoutProduct);
        await checkTable(withoutProduct);
    })
})