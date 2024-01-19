import { getNewsletterData } from "../../../data-loaders/newsletterData";
import { test, expect } from "../../../fixtures/footer";
import { StringContainer } from "../../../utils/stringContainer";
import { handlePopup } from "../signing-up/handlePopup.spec";

const blankEmailField = getNewsletterData('blankEmailField')[0];


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

        expect(receivedMessage.getValue()).toEqual(blankEmailField.message);
    })

    test('Pressing ENTER',async ({newsletterForm}) => {

        await test.step('Click the "Email" field',async () => {
            
            await newsletterForm.clickEmailField();
        })

        await handlePopup(await newsletterForm.getPage(), receivedMessage);

        await test.step('Press ENTER',async () => {
            
            await (await newsletterForm.getPage()).keyboard.press('Enter');
        })

        expect(receivedMessage.getValue()).toEqual(blankEmailField.message);
    })
})