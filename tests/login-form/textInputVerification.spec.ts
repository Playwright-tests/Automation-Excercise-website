import { test, expect } from "../../fixtures/login";

test.describe('Text input verification',async () => {
    
    let text: string = 'This is the text';

    test('Filling the "Username or email address" field',async ({loginForm}) => {
        
        await test.step('Enter the "' + text + '"',async () => {
            
            await loginForm.setUsername(text);
        })

        expect(await loginForm.getUsernameFieldContent()).toEqual(text);
    })

    test('Filling the "Password" field',async ({loginForm}) => {
        
        await test.step('Enter the "' + text + '"',async () => {
            
            await loginForm.setPassword(text);
        })

        expect(await loginForm.getPasswordFieldContent()).toEqual(text);
    })
})