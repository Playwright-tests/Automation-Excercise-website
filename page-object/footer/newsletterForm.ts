import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class NewsletterForm extends BasePage {

    readonly nameField: Locator;
    readonly emailField: Locator;
    readonly subscribeButton: Locator;
    readonly message: Locator;

    constructor(page: Page) {
        
        super(page);

        this.nameField = page.locator('#es_txt_name');
        this.emailField = page.locator('#es_txt_email');
        this.subscribeButton = page.locator('#es_txt_button');
        this.message = page.locator('#es_msg');
    }

    async setName(name: string) {

        await this.nameField.fill(name);
    }

    async setEmail(email: string) {

        await this.emailField.fill(email);
    }

    async clickSubscribeButton() {

        await this.subscribeButton.click();
    }

    async getNameFieldContent() {

        return await this.nameField.inputValue();
    }

    async getEmailFieldContent() {

        return await this.emailField.inputValue();
    }

    getMessageLocator() {

        return this.message; 
    }
}