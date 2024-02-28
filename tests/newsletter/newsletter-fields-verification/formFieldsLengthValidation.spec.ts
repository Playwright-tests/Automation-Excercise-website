import { NewsletterFieldsDataProvider } from "../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../enums/testScenarios";
import { test, expect } from "../../../fixtures/footer";
import { expect as hdExpect } from "../../../expect/toHaveHiddenSelector";
import { expect as nhdExpect } from "../../../expect/tohaveNotHiddenSelector";
import { StringContainer } from "../../../support/stringContainer";
import { handlePopup } from "../signing-up/handlePopup.spec";
import { steps } from "../signing-up/steps.spec";
import { NewsletterForm } from "../../../page-object/footer/newsletterForm";
import { NewsletterData, NewsletterFieldsData } from "../../../models/models";

const nameFieldData = NewsletterFieldsDataProvider.get(TestScenarios.NAME_FIELD);
const emailFieldData = NewsletterFieldsDataProvider.get(TestScenarios.EMAIL_FIELD);

test.describe('Form fields length validation',async () => {

    let receivedMessage: StringContainer;

    test.beforeEach(async () => {
        
        receivedMessage = new StringContainer();
    })

    async function actions(newsletterForm: NewsletterForm, data: NewsletterData, expectedMessage: string, exp: any) {
        
        await steps(newsletterForm, nameFieldData.maxMinusOne, handlePopup(await newsletterForm.getPage(), receivedMessage));
        expect(receivedMessage.getValue()).toEqual(expectedMessage);
    }

    test('Name field text length = {max - 1}',async ({newsletterForm}) => {
      
        await actions(newsletterForm, nameFieldData.maxMinusOne, '', async () => {
            
            await nhdExpect(await newsletterForm.getPage()).toHaveNotHiddenSelector(newsletterForm.getMessageSelector());
        })
    })

    test('Name field text length = {max}',async ({newsletterForm}) => {
        
        await actions(newsletterForm, nameFieldData.max, '', async () => {
            
            await nhdExpect(await newsletterForm.getPage()).toHaveNotHiddenSelector(newsletterForm.getMessageSelector());
        })
    })

    test('Name field text length = {max + 1}',async ({newsletterForm}) => {
        
        await actions(newsletterForm, nameFieldData.maxPlusOne, 'The number of characters cannot exceed 225', async () => {
            
            await hdExpect(await newsletterForm.getPage()).toHaveHiddenSelector(newsletterForm.getMessageSelector());
        })
    })

    test('Email field text length = {max - 1}',async ({newsletterForm}) => {
        
        await actions(newsletterForm, emailFieldData.maxMinusOne, '', async () => {
            
            await nhdExpect(await newsletterForm.getPage()).toHaveNotHiddenSelector(newsletterForm.getMessageSelector());
        })
    })

    test('Email field text length = {max}',async ({newsletterForm}) => {
        
        await actions(newsletterForm, emailFieldData.max, '', async () => {
            
            await nhdExpect(await newsletterForm.getPage()).toHaveNotHiddenSelector(newsletterForm.getMessageSelector());
        })
    })

    test('Email field text length = {max + 1}',async ({newsletterForm}) => {
  
        await actions(newsletterForm, emailFieldData.maxPlusOne, 'The number of characters cannot exceed 225', async () => {
            
            await hdExpect(await newsletterForm.getPage()).toHaveHiddenSelector(newsletterForm.getMessageSelector());
        })
    })
})