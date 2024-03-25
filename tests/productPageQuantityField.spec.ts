import { TestDataFileNames } from "../enums/testdataFileNames";
import { test, expect } from "../fixtures/productPage";
import { expect as HD_Expect } from "../expect/toHaveHiddenSelector";
import { expect as NHD_Expect } from "../expect/tohaveNotHiddenSelector";
import { ProductPage } from "../page-object/product-page/productPage";
import { inputVerification } from "../support/inputVerification";
import { getRandomProductURL } from "../support/randomProductURL";
import { getStrings } from "../testdata-IO/testdataLoader";

test.use({url: getRandomProductURL()});
const quantities = getStrings(TestDataFileNames.INCORRECT_QUANTITIES, 'values');

test.describe('A product page quantity field',async () => {
    
    let minimum: string;

    test.beforeEach(async ({productPage}) => {
        
        minimum = await productPage.getQuantityField().getAttribute('min') ?? '';
    })

    async function actions(productPage: ProductPage, quantity: string, func: any) {
        
        await test.step('Enter the "' + quantity + '"',async () => {
            await productPage.setQuantity(quantity);
        })

        await test.step('Click the "Add to cart" button',async () => {
            await productPage.clickAddToCartButton();
        })

        const validationMessage = await inputVerification(productPage.getQuantityField());
        await func(validationMessage);
    }

    test.skip('Text input validation',async ({productPage}) => {
        
        const quantity: string = '12';

        await test.step('Enter the "' + quantity + '"',async () => {
            await productPage.setQuantity(quantity);
        })

        expect(await productPage.getQuantity()).toEqual(quantity);
    })

    test('{min}', async ({productPage}) => {
        
        await actions(productPage, minimum, async (validationMessage: string) => {
            expect(validationMessage).toEqual('');
            await NHD_Expect(await productPage.getPage())
                    .toHaveNotHiddenSelector(productPage.getConfirmModalDialog().getSelector());
        });
           
    })

    test('{min + 1}',async ({productPage}) => {
        
        await actions(productPage, (parseInt(minimum) + 1).toString(), async (validationMessage: string) => {
            expect(validationMessage).toEqual('');
            await NHD_Expect(await productPage.getPage())
                    .toHaveNotHiddenSelector(productPage.getConfirmModalDialog().getSelector());
        });
    })

    test('{min - 1}',async ({productPage}) => {
        
        await actions(productPage, (parseInt(minimum) - 1).toString(), async (validationMessage: string) => {
            expect(validationMessage).not.toEqual('');
            await HD_Expect(await productPage.getPage())
                    .toHaveHiddenSelector(productPage.getConfirmModalDialog().getSelector());
        });
    })

    for(const quantity of quantities) {

        test('"' + quantity + '" as the incorrect quantity',async ({productPage}) => {
            
            await actions(productPage, quantity, async (validationMessage: string) => {
                expect(validationMessage).not.toEqual('');
                await HD_Expect(await productPage.getPage())
                        .toHaveHiddenSelector(productPage.getConfirmModalDialog().getSelector());
            }); 
        })
    }
})