import { test, expect } from "../../../fixtures/footer";
import { expect as hdExpect } from "../../../expect/tohaveNotHiddenSelector";
import { getNewsletterData } from "../../../data-loaders/newsletterData";
import { handlePopup } from "./handlePopup.spec";
import { steps } from "./steps.spec";
import { StringContainer } from "../../../utils/stringContainer";

const correctCredentials = getNewsletterData('correctCredentials')[0];
const blankNameField = getNewsletterData('blankNameField')[0];
const blankEmailField = getNewsletterData('blankEmailField')[0];
const incorrectEmailFormat = getNewsletterData('incorrectEmailFormat');

test.describe('Correct credentials',async () => {

    let receivedMessage: StringContainer;

    test.beforeEach(async () => {
        
        receivedMessage = new StringContainer();
    })
    
    test('Correct credentials',async ({newsletterForm}) => {

        await steps(newsletterForm, correctCredentials, handlePopup(await newsletterForm.getPage(), receivedMessage));

        await hdExpect(await newsletterForm.getPage()).toHaveNotHiddenSelector(newsletterForm.getMessageSelector());
        expect(receivedMessage.getValue()).toEqual('');
    })

    test('Blank the "Name" field',async ({newsletterForm}) => {
            
        await steps(newsletterForm, blankNameField, handlePopup(await newsletterForm.getPage(), receivedMessage));

        await hdExpect(await newsletterForm.getPage()).toHaveNotHiddenSelector(newsletterForm.getMessageSelector());
        expect(receivedMessage.getValue()).toEqual('');
    })

    test('Blank "Email" field',async ({newsletterForm}) => {
            
        await steps(newsletterForm, blankEmailField, await handlePopup(await newsletterForm.getPage(), receivedMessage));

        expect(receivedMessage.getValue()).toEqual(blankEmailField.message);
    })

    test.describe('Incorrect email format',async () => {
    
        for(const data of incorrectEmailFormat) {
    
            test('Name: "' + data.name + '", Email: "' + data.email,async ({newsletterForm}) => {
                
                await steps(newsletterForm, data, handlePopup(await newsletterForm.getPage(), receivedMessage));
                
                expect(receivedMessage.getValue()).toEqual(data.message);
            })
        }
    })
})