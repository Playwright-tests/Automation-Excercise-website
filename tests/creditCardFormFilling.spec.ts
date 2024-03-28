import { URLs } from "../enums/URLs";
import { test, expect } from "../fixtures/creditCardForm";
import { CreditCardForm } from "../page-object/place-order-page/creditCardForm";
import { getCreditCardData } from "../testdata-IO/testdataLoader";

const correctData = getCreditCardData('correct');
const incorrectBrand = getCreditCardData('incorrectBrand');
const incorrectNumber = getCreditCardData('incorrectNumber');
const incorrectMonth = getCreditCardData('incorrectMonth');
const incorrectYear = getCreditCardData('incorrectYear');
const yearInPast = getCreditCardData('yearInPast');


test.describe('Setting a credit card data', async () => {
    
    async function actions(creditCardForm: CreditCardForm, brand: string, num: string, cvc: string, month: string, year: string) {
        
        await test.step('Set a brand',async () => {
            await creditCardForm.setBrand(brand);
        })

        await test.step('Set a number',async () => {
            await creditCardForm.setNumber(num);
        })

        await test.step('Set a cvc',async () => {
            await creditCardForm.setCvc(cvc);
        })

        await test.step('Set a month',async () => {
            await creditCardForm.setMonth(month)
        })

        await test.step('Set a year',async () => {
            await creditCardForm.setYear(year);
        })

        await test.step('Click the "Pay and Confirm Order" button',async () => {
            await creditCardForm.clickButton();
        })
    }    

    for(const data of correctData) {

        test('Correct data: {' + data.brand + ', ' + data.number + ', ' + data.cvc + ', ' + data.month + ', ' + data.year + '}',async ({creditCardForm}) => {
            
            await actions(creditCardForm, data.brand, data.number, data.cvc, data.month, data.year);
            expect((await creditCardForm.getPage()).url()).toContain(URLs.PAYMENT_DONE_PAGE);
        })
    }

    for(const data of incorrectBrand) {

        test('Incorrect brand: "' + data.brand + '"',async ({creditCardForm}) => {
            
            await actions(creditCardForm, data.brand, data.number, data.cvc, data.month, data.year);
            expect((await creditCardForm.getPage()).url()).not.toContain(URLs.PAYMENT_DONE_PAGE);
        })
    }

    for(const data of incorrectNumber) {

        test('Incorrect number: "' + data.number + '"',async ({creditCardForm}) => {
            
            await actions(creditCardForm, data.brand, data.number, data.cvc, data.month, data.year);
            expect((await creditCardForm.getPage()).url()).not.toContain(URLs.PAYMENT_DONE_PAGE);
        })
    }

    for(const data of incorrectMonth) {

        test('Incorrect month: "' + data.month + '"',async ({creditCardForm}) => {
            
            await actions(creditCardForm, data.brand, data.number, data.cvc, data.month, data.year);
            expect((await creditCardForm.getPage()).url()).not.toContain(URLs.PAYMENT_DONE_PAGE);
        })
    }

    for(const data of incorrectYear) {

        test('Incorrect year: "' + data.year + '"',async ({creditCardForm}) => {
            
            await actions(creditCardForm, data.brand, data.number, data.cvc, data.month, data.year);
            expect((await creditCardForm.getPage()).url()).not.toContain(URLs.PAYMENT_DONE_PAGE);
        })
    }

    for(const data of yearInPast) {

        test('Year in past: "' + data.year + '"',async ({creditCardForm}) => {
            
            await actions(creditCardForm, data.brand, data.number, data.cvc, data.month, data.year);
            expect((await creditCardForm.getPage()).url()).not.toContain(URLs.PAYMENT_DONE_PAGE);
        })
    }
})