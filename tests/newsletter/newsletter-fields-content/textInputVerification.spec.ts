import {test, expect} from "../../../fixtures/footer";
import { emailFieldStep, nameFieldStep } from "./steps.spec";

test.describe('Text input Verification ',async () => {
    
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
})