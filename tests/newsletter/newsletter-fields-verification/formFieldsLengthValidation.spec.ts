import { test, expect } from "../../../fixtures/footer";
import { getVeryLongText } from "../../../data-loaders/veryLongText";
import { emailFieldStep, nameFieldStep } from "./steps.spec";

const veryLongPhrase = getVeryLongText('phrase')[0];
const veryLongEmail = getVeryLongText('email')[0];

test.describe('Form fields length validation',async () => {
    
    let nameFieldMaxLength: number | undefined;
    let emailFieldMaxLength: number | undefined;

    test.beforeEach(async ({newsletterForm}) => {
        
        nameFieldMaxLength = await newsletterForm.getNameFieldMaxLength();
        emailFieldMaxLength = await newsletterForm.getEmailFieldMaxLength();
    })

    test('Filling the "Name" field with text having ' + nameFieldMaxLength + '-1 characters',async ({newsletterForm}) => {
      
        await nameFieldStep(newsletterForm, veryLongPhrase.text.slice(1));
        expect((await newsletterForm.getNameFieldContent()).length).toEqual(veryLongPhrase.text.slice(1).length);
    })

    test('Filling the "Name" field with text having ' + nameFieldMaxLength + ' characters',async ({newsletterForm}) => {
        
        await nameFieldStep(newsletterForm, veryLongPhrase.text);
        expect((await newsletterForm.getNameFieldContent()).length).toEqual(nameFieldMaxLength);
    })

    test('Filling the "Name" field with text having ' + nameFieldMaxLength + '+1 characters',async ({newsletterForm}) => {
        
        await nameFieldStep(newsletterForm, veryLongPhrase.text + '.');
        expect((await newsletterForm.getNameFieldContent()).length).toEqual(nameFieldMaxLength);
    })

    test('Filling the "Email" field with text having ' + emailFieldMaxLength + '-1 characters',async ({newsletterForm}) => {
        
        await emailFieldStep(newsletterForm, veryLongEmail.text.slice(1));
        expect((await newsletterForm.getEmailFieldContent()).length).toEqual(veryLongEmail.text.slice(1).length);
    })

    test('Filling the "Email" field with text having ' + emailFieldMaxLength + ' characters',async ({newsletterForm}) => {
        
        await emailFieldStep(newsletterForm, veryLongEmail.text);
        expect((await newsletterForm.getEmailFieldContent()).length).toEqual(emailFieldMaxLength);
    })

    test('Filling the "Email" field with text having ' + emailFieldMaxLength + '+1 characters',async ({newsletterForm}) => {
        
        await emailFieldStep(newsletterForm, 'L' + veryLongEmail.text);
        expect((await newsletterForm.getEmailFieldContent()).length).toEqual(emailFieldMaxLength);
    })
})