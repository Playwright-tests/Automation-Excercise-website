import { test, expect } from "../../../fixtures/footer.spec";
import { getNewsletterData } from "../../../data-loaders/newsletterData.spec";
import { handlePopup } from "./handlePopup.spec";
import { steps } from "./steps.spec";

const correctCredentials = getNewsletterData('correctCredentials');
const blankNameField = getNewsletterData('blankNameField');
const incorrectEmailFormat = getNewsletterData('incorrectEmailFormat');
const blankEmailField = getNewsletterData('blankEmailField');

test.describe('Correct credentials',async () => {
    
    for(const data of correctCredentials) {

        test('Name: "' + data.name + '", Email: "' + data.email + '"',async ({newsletterForm}) => {
            
            await steps(newsletterForm, data, () => { });
            expect(await newsletterForm.getMessageLocator().isVisible()).toBeTruthy();
            expect(await newsletterForm.getMessageLocator().textContent()).toEqual(data.message);
        })
    }
})

test.describe('Blank the "Name" field',async () => {
    
    for(const data of blankNameField) {

        test('Blank the "Name" field and Email: "' + data.email + '"',async ({newsletterForm}) => {
            
            await steps(newsletterForm, data, () => { });
            expect(await newsletterForm.getMessageLocator().isVisible()).toBeTruthy();
            expect(await newsletterForm.getMessageLocator().textContent()).toEqual(data.message);
        })
    }
})

test.describe('Incorrect email format',async () => {
    
    for(const data of incorrectEmailFormat) {

        test('Name: "' + data.name + '", Email: "' + data.email,async ({newsletterForm, page}) => {
            
            await steps(newsletterForm, data, () => {});
        })
    }
})

test.describe('Blank the "Email" field',async () => {
    
    for(const data of blankEmailField) {

        test('Name: "' + data.name + '" and blank the "Email" field',async ({newsletterForm, page}) => {
            
            await steps(newsletterForm, data, handlePopup(page, data.message));
            expect(await newsletterForm.getMessageLocator().isVisible()).toBeFalsy();
        })
    }
})