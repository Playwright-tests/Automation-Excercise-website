import { getVeryLongText } from "../../../data-loaders/veryLongText";
import {test, expect} from "../../../fixtures/footer";
import { emailFieldStep, nameFieldStep } from "./steps.spec";

const veryLongPhrase = getVeryLongText('phrase')[0];
const veryLongEmail = getVeryLongText('email')[0];

test.describe('Newsletter fields content',async () => {
    
    test('Filling the "Name" field',async ({newsletterForm}) => {
        
        const name = 'John Doe';

        await nameFieldStep(newsletterForm, name);
        expect(await newsletterForm.getNameFieldContent()).toEqual(name);
    })

    test('Filling the "Email" field',async ({newsletterForm}) => {
        
        const email = 'myEmail@gmail.com';

        await emailFieldStep(newsletterForm, email);
        expect(await newsletterForm.getEmailFieldContent()).toEqual(email);
    })

    test('Filling the "Name" field with text having 224 characters',async ({newsletterForm}) => {
        
        const text = veryLongPhrase.text.slice(1);
        await nameFieldStep(newsletterForm, veryLongPhrase.text);
        expect((await newsletterForm.getNameFieldContent()).length).toEqual(225);
    })

    test('Filling the "Name" field with text having 225 characters',async ({newsletterForm}) => {
        
        await nameFieldStep(newsletterForm, veryLongPhrase.text);
        expect((await newsletterForm.getNameFieldContent()).length).toEqual(225);
    })

    test('Filling the "Name" field with text having 226 characters',async ({newsletterForm}) => {
        
        await nameFieldStep(newsletterForm, veryLongPhrase.text + '.');
        expect((await newsletterForm.getNameFieldContent()).length).toEqual(225);
    })
})