import { test, expect } from "../../../fixtures/login.spec";
import { steps } from "./steps.spec";
import { getCredentials } from "../../../data-loaders/credentials.spec";

const credentials = getCredentials('correctCredentials');

test.describe('Logging in with correct credentials',async () => {
    
    for(const data of credentials) {

        test('Email: "' + data.email + '", Password: "' + data.password + '"',async ({loginForm}) => {
             
            await steps(loginForm, data);
        })
    }
})