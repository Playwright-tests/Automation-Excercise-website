import { test, expect } from "../../../fixtures/footer";
import { expect as hdExpect } from "../../../expect/tohaveNotHiddenSelector";
import { handlePopup } from "./handlePopup.spec";
import { steps } from "./steps.spec";
import { StringContainer } from "../../../support/stringContainer";
import { NewsletterDataProvider } from "../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../enums/testScenarios";

const newsletterData = NewsletterDataProvider.get();

test.describe('Correct credentials',async () => {

    let receivedMessage: StringContainer;

    test.beforeEach(async () => {
        
        receivedMessage = new StringContainer();
    })
    
    test('Correct credentials',async ({newsletterForm}) => {

        await steps(newsletterForm, newsletterData[TestScenarios.CORRECT], handlePopup(await newsletterForm.getPage(), receivedMessage));

        await hdExpect(await newsletterForm.getPage()).toHaveNotHiddenSelector(newsletterForm.getMessageSelector());
        expect(receivedMessage.getValue()).toEqual('');
    })

    test('Blank the "Name" field',async ({newsletterForm}) => {
            
        await steps(newsletterForm, newsletterData[TestScenarios.BLANK_NAME_FIELD], handlePopup(await newsletterForm.getPage(), receivedMessage));

        await hdExpect(await newsletterForm.getPage()).toHaveNotHiddenSelector(newsletterForm.getMessageSelector());
        expect(receivedMessage.getValue()).toEqual('');
    })

    test('Blank "Email" field',async ({newsletterForm}) => {
            
        await steps(newsletterForm, newsletterData[TestScenarios.BLANK_EMAIL_FIELD], await handlePopup(await newsletterForm.getPage(), receivedMessage));

        expect(receivedMessage.getValue()).toEqual(newsletterData[TestScenarios.BLANK_EMAIL_FIELD].message);
    })

    test('Incorrect email',async ({newsletterForm}) => {
                
        await steps(newsletterForm, newsletterData[TestScenarios.INCORRECT_EMAIL], handlePopup(await newsletterForm.getPage(), receivedMessage));
        
        expect(receivedMessage.getValue()).toEqual(newsletterData[TestScenarios.INCORRECT_EMAIL].message);
    })
})