import { test, expect } from "../fixtures/creditCardForm";

test.describe('The credit card form',async () => {

    test('The "Name on card" field text input validation',async ({creditCardForm}) => {
        
        const brand = 'Visa';

        await test.step('Enter a brand',async () => {
            await creditCardForm.setBrand(brand);
        })

        expect(await creditCardForm.getBrand()).toEqual(brand);
    })

    test('The "Card number" field text input validation',async ({creditCardForm}) => {
        
        const cardNumber = '1234567890';

        await test.step('Enter a card number',async () => {
            await creditCardForm.setNumber(cardNumber);
        })

        expect(await creditCardForm.getNumber()).toEqual(cardNumber);
    })

    test('The "CVC" field text input validation',async ({creditCardForm}) => {
        
        const cvc = '111';

        await test.step('Enter a cvc',async () => {
            await creditCardForm.setCvc(cvc);
        })

        expect(await creditCardForm.getCvc()).toEqual(cvc);
    })

    test('The "Month" field text input validation',async ({creditCardForm}) => {
        
        const month = '05';

        await test.step('Enter a month',async () => {
            await creditCardForm.setMonth(month);
        })

        expect(await creditCardForm.getMonth()).toEqual(month);
    })

    test('The "Year" field text input validation',async ({creditCardForm}) => {
        
        const year = '2024';

        await test.step('Enter a year',async () => {
            await creditCardForm.setYear(year);
        })

        expect(await creditCardForm.getYear()).toEqual(year);
    })
})