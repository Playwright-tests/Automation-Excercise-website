import { test, expect } from "../fixtures/confirmModalDialog";
import { expect as HD_Expect } from "../expect/toHaveHiddenSelector";
import { expect as NHD_Expect } from "../expect/tohaveNotHiddenSelector";
import { ProductPage } from "../page-object/product-page/productPage";
import { getRandomProductURL } from "../support/randomProductURL";
import { URLs } from "../enums/URLs";

test.use({url: getRandomProductURL()});

test.describe('The modal confirm dialog',async () => {

    test('The confirm modal dialog visibility',async ({hidden}) => {
        
        const productPage = new ProductPage(await hidden.getPage());

        await test.step('Click the "Add to cart" button',async () => {
            await productPage.clickAddToCartButton();
        })

        await NHD_Expect(await hidden.getPage()).toHaveNotHiddenSelector(hidden.getSelector());
    })

    test('The "View Cart" link',async ({visible}) => {
        
        await test.step('Click the "View Cart" link',async () => {
            await visible.clickViewCartLink();
        })

        await expect(await visible.getPage()).toHaveURL(URLs.SHOPPING_CART_PAGE);
    })

    test('The "Continue Shopping" button',async ({visible}) => {
        
        await test.step('Clic the "Continue Shopping" button',async () => {
            await visible.clickContinueShoppingButton();
        })

        await HD_Expect(await visible.getPage()).toHaveHiddenSelector(visible.getSelector());
    })
})