import { test, expect } from "../../fixtures/productPage";

test.describe('Text input verification',async () => {
    
    const quantity: string = '50';

    test('Filling the quantity field',async ({productPage}) => {
        
        await test.step('Enter the "' + quantity + '"',async () => {
            
            await (await productPage.getQuantityField()).setQuantity(quantity);
        })

        expect(await (await productPage.getQuantityField()).getQuantity()).toEqual(quantity);
    })
})