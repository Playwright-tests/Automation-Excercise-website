import {test, expect} from "../../../fixtures/footer";
import { emailFieldStep, nameFieldStep } from "./steps.spec";

test.describe('Text input Verification ',async () => {
    
    const text: string = 'This is the text';

    test('Filling the "Name" field',async ({newsletterForm}) => {

        await nameFieldStep(newsletterForm, text);
        expect(await newsletterForm.getNameFieldContent()).toEqual(text);
    })

    test('Filling the "Email" field',async ({newsletterForm}) => {

        await emailFieldStep(newsletterForm, text);
        expect(await newsletterForm.getEmailFieldContent()).toEqual(text);
    })
})