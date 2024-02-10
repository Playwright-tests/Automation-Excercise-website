import { NewsletterDataProvider } from "../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../enums/testScenarios";
import { test, expect } from "../../../fixtures/footer";
import { StringContainer } from "../../../support/stringContainer";
import { handlePopup } from "../signing-up/handlePopup.spec";

const newsletterData = NewsletterDataProvider.get();


test.describe('Submitting',async () => {

    let receivedMessage: StringContainer;

    test.beforeEach(async () => {
    
        receivedMessage = new StringContainer();
    })
    
    test('Clicking the "Subscribe" button',async ({newsletterForm, page}) => {

        await handlePopup(page, receivedMessage);

        await test.step('Click the "Subscribe" button',async () => {
            
            await newsletterForm.clickSubscribeButton();
        })

        expect(receivedMessage.getValue()).toEqual(newsletterData[TestScenarios.BLANK_EMAIL_FIELD].message);
    })

    test('Pressing ENTER',async ({newsletterForm}) => {

        await test.step('Click the "Email" field',async () => {
            
            await newsletterForm.clickEmailField();
        })

        await handlePopup(await newsletterForm.getPage(), receivedMessage);

        await test.step('Press ENTER',async () => {
            
            await (await newsletterForm.getPage()).keyboard.press('Enter');
        })

        expect(receivedMessage.getValue()).toEqual(newsletterData[TestScenarios.BLANK_EMAIL_FIELD].message);
    })
})