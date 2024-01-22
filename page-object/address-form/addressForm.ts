import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { DropdownList } from "./dropdownList";

export class AddressForm extends BasePage {

    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly companyField: Locator;
    readonly addressField_1: Locator;
    readonly addressField_2: Locator;
    readonly townCityField: Locator;
    readonly postcodeField: Locator;
    readonly phoneField: Locator;
    readonly emaiField: Locator;
    readonly saveAddressButton: Locator;
    readonly errorMessage: Locator;
    readonly errorMessageSelector: string;
    readonly additionalLabel: Locator;
    readonly additionalField: Locator;
    readonly additionalDropdownList: Locator;

    readonly dropdownList: DropdownList;

    constructor(page: Page) {

        super(page);

        this.errorMessageSelector = '.woocommerce-error';
        this.firstNameField = page.locator('#billing_first_name');
        this.lastNameField = page.locator('#billing_last_name');
        this.companyField = page.locator('#billing_company');
        this.addressField_1 = page.locator('#billing_address_1');
        this.addressField_2 = page.locator("#billing_address_2");
        this.townCityField = page.locator('#billing_city');
        this.postcodeField = page.locator('#billing_postcode');
        this.phoneField = page.locator('#billing_phone');
        this.emaiField = page.locator('#billing_email');
        this.saveAddressButton = page.getByRole('button', {name: 'Save address'});
        this.errorMessage = page.locator(this.errorMessageSelector);
        this.additionalLabel = page.locator('label[for="billing_state"]');
        this.additionalField = page.locator('input[id="billing_state"]');
        this.additionalDropdownList = page.locator('select[id="billing_state"]');

        this.dropdownList = new DropdownList(page);
    }

    private async clearAndFill(locator: Locator, text: string) {

        await locator.clear();
        await locator.fill(text);
    }

    async setFirstName(firstName: string) {

        await this.clearAndFill(this.firstNameField, firstName);
    }

    async setLastName(lastName: string) {

        await this.clearAndFill(this.lastNameField, lastName);
    }

    async setCompany(company: string) {

        await this.clearAndFill(this.companyField, company);
    }

    async setAddress_1(address: string) {

        await this.clearAndFill(this.addressField_1, address);
    }

    async setAddress_2(address: string) {

        await this.clearAndFill(this.addressField_2, address);
    }

    async setCity(city: string) {

        await this.clearAndFill(this.townCityField, city);
    }

    async setPostcode(postcode: string) {

        await this.clearAndFill(this.postcodeField, postcode);
    }

    async setPhone(phone: string) {

        await this.clearAndFill(this.phoneField, phone);
    }

    async setEmail(email: string) {

        await this.clearAndFill(this.emaiField, email);
    }

    async clickSaveAddressButton() {

        await this.saveAddressButton.click();
    }

    async getFirstName() {

        return await this.firstNameField.inputValue();
    }

    async getLastName() {

        return await this.lastNameField.inputValue();
    }

    async getCompany() {

        return await this.companyField.inputValue();
    }

    async getAddress1() {

        return await this.addressField_1.inputValue();
    }

    async getAddress2() {

        return await this.addressField_2.inputValue();
    }

    async getCity() {

        return await this.townCityField.inputValue();
    }

    async getPostcode() {

        return await this.postcodeField.inputValue();
    }

    async getPhone() {

        return await this.phoneField.inputValue();
    }

    async getEmail() {

        return await this.emaiField.inputValue();
    }

    getEmailFieldLocator() {

        return this.emaiField;
    }

    getErrorMessageSelector() {

        return this.errorMessageSelector;
    }

    getErrorMessageLocator() {

        return this.errorMessage;
    }

    async getErrorMessage() {

        return await this.errorMessage.locator('li').textContent();
    }

    getDropdownList() {

        return this.dropdownList;
    }

    getAdditionailLabelLocator() {

        return this.additionalLabel;
    }

    getAdditionalFieldLocator() {

        return this.additionalField;
    }

    getAdditionalDropdownListLocator() {

        return this.additionalDropdownList;
    }
}