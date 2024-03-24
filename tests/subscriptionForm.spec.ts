import { test, expect} from "../fixtures/subscriptionForm";
import { expect as NHD_Expect } from "../expect/tohaveNotHiddenSelector";
import { getStrings } from "../testdata-IO/testdataLoader";
import { TestDataFileNames } from "../enums/testdataFileNames";
import { SubscriptionForm } from "../page-object/subscription-form/subscriptionForm";
import { inputVerification } from "../support/inputVerification";

const correctEmails = getStrings(TestDataFileNames.SUBSCRIPTION, 'correct');
const incorrectEmails = getStrings(TestDataFileNames.SUBSCRIPTION, 'incorrect');

test.describe('Subscription form',async () => {
    
    async function actions(subscriptionForm: SubscriptionForm, email: string) {
        
        await test.step('Type the "' + email + '"',async () => {
            await subscriptionForm.setEmail(email);
        })

        await test.step('Click the button',async () => {
            await subscriptionForm.clickButton();
        })
    }

    test('Text input validation',async ({subscriptionForm}) => {
        
        const email: string = 'email@domain.com';

        await test.step('Enter the "' + email + '"',async () => {
            await subscriptionForm.setEmail(email);
        })

        expect(await subscriptionForm.getEmail()).toEqual(email);
    })

    for(const email of correctEmails) {

        test('Typiyng the "' + email + '"',async ({subscriptionForm}) => {
            
            await actions(subscriptionForm, email);
            await NHD_Expect(await subscriptionForm.getPage()).toHaveNotHiddenSelector(subscriptionForm.getSuccessSubscribeSelector());
        })
    }

    for(const email of incorrectEmails) {

        test('Typiyng the "' + email + '"',async ({subscriptionForm}) => {
            
            await actions(subscriptionForm, email);
            const validationMessage = await inputVerification(subscriptionForm.getField());
            expect(validationMessage).not.toEqual('');
        })
    }
})