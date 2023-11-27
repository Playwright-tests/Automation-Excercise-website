import { test, expect } from "../../../fixtures/login.spec";
import { getCredentials } from "../../../helpers/credentials.spec";
import { steps } from "./steps.spec";

const credentials = getCredentials('incorrectEmail');

test.describe('Incorrect email or username',async () => {
    
    for(const data of credentials) {

        test('Email/Username: "' + data.email + '", Password "' + data.password,async ({loginForm}) => {
            
            await steps(loginForm, data);
            console.log('ERROR: ' + await loginForm.getError());
        })
    }
})