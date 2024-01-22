import { test, expect } from "../../../../fixtures/account";
import { textInputVerificationSteps } from "../commons/steps.spec";

test.describe('Text input verification',async () => {
    
    const text: string = 'My text';

    test('Filling the "First name" field',async ({addressForm}) => {
        
        await textInputVerificationSteps(async () => { await addressForm.setFirstName(text) }, 'First name', text);
        expect(await addressForm.getFirstName()).toEqual(text);
    })

    test('Filling the "Last name" field',async ({addressForm}) => {
        
        await textInputVerificationSteps(async () => { await addressForm.setLastName(text) }, 'Last name', text);
        expect(await addressForm.getLastName()).toEqual(text);
    })

    test('Filling the "Company name" field',async ({addressForm}) => {
        
        await textInputVerificationSteps(async () => { await addressForm.setCompany(text) }, 'Company name', text);
        expect(await addressForm.getCompany()).toEqual(text);
    })

    test('Filling the "Street address" field',async ({addressForm}) => {
        
        await textInputVerificationSteps(async () => { await addressForm.setAddress_1(text) }, 'Street address', text);
        expect(await addressForm.getAddress1()).toEqual(text);
    })

    test('Filling the additional "Street address" field',async ({addressForm}) => {
        
        await textInputVerificationSteps(async () => { await addressForm.setAddress_2(text) }, 'Street Address', text);
        expect(await addressForm.getAddress2()).toEqual(text);
    })

    test('Filling the "Town / City" field',async ({addressForm}) => {
        
        await textInputVerificationSteps(async () => { await addressForm.setCity(text) }, 'Town / City', text);
        expect(await addressForm.getCity()).toEqual(text);
    })

    test('Filling the "Postcode / ZIP" field',async ({addressForm}) => {
        
        await textInputVerificationSteps(async () => { await addressForm.setPostcode(text) }, 'Postcode / ZIP', text);
        expect(await addressForm.getPostcode()).toEqual(text);
    })

    test('Filling the "Phone" field',async ({addressForm}) => {
        
        await textInputVerificationSteps(async () => { await addressForm.setPhone(text) }, 'Phone', text);
        expect(await addressForm.getPhone()).toEqual(text);
    })

    test('Filling the "Email address" field',async ({addressForm}) => {
        
        await textInputVerificationSteps(async () => { await addressForm.setEmail(text) }, 'Email address', text);
        expect(await addressForm.getEmail()).toEqual(text);
    })
})