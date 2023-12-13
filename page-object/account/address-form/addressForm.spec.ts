import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/BasePage.spec";
import { DropdownList } from "./dropdownList.spec";

export class AddressForm extends BasePage {

    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly companyField: Locator;
    readonly addressField_1: Locator;
    readonly addressField_2: Locator;
    readonly townCityField: Locator;
    readonly stateCountyField: Locator;
    readonly regionField: Locator;
    readonly municipalityField: Locator;
    readonly additionalDropdownList: Locator;
    readonly postcodeField: Locator;
    readonly phoneField: Locator;
    readonly emaiField: Locator;
    readonly saveAddressButton: Locator;

    readonly dropdownList: DropdownList;

    constructor(page: Page) {

        super(page);

        this.firstNameField = page.locator('#billing_first_name');
        this.lastNameField = page.locator('#billing_last_name');
        this.companyField = page.locator('#billing_company');
        this.addressField_1 = page.locator('#billing_address_1');
        this.addressField_2 = page.locator("#billing_address_2");
        this.townCityField = page.locator('#billing_city');
        this.stateCountyField = page.getByLabel('State / County *');
        this.regionField = page.getByLabel('Region *');
        this.municipalityField = page.getByLabel('Municipality');
        this.additionalDropdownList = page.locator('#billing_state_field').getByLabel('', {exact: true});
        this.postcodeField = page.locator('#billing_postcode');
        this.phoneField = page.locator('#billing_phone');
        this.emaiField = page.locator('#billing_email');
        this.saveAddressButton = page.getByRole('button', {name: 'Save address'});

        this.dropdownList = new DropdownList(page);
    }

    async setFirstName(firstName: string) {

        await this.firstNameField.fill(firstName);
    }

    async setLastName(lastName: string) {

        await this.lastNameField.fill(lastName);
    }

    async setCompany(company: string) {

        await this.companyField.fill(company);
    }

    async setAddress_1(address: string) {

        await this.addressField_1.fill(address);
    }

    async setAddress_2(address: string) {

        await this.addressField_2.fill(address);
    }

    async setTown(town: string) {

        await this.townCityField.fill(town);
    }

    async setState(state: string) {

        await this.stateCountyField.fill(state);
    }

    async setRegion(region: string) {

        await this.regionField.fill(region);
    }

    async setMunicipality(municipality: string) {

        await this.municipalityField.fill(municipality);
    }

    async setPostcode(postcode: string) {

        await this.postcodeField.fill(postcode);
    }

    async setPhone(phone: string) {

        await this.phoneField.fill(phone);
    }

    async setEmail(email: string) {

        await this.emaiField.fill(email);
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

        return await this.phoneField.textContent();
    }

    async getEmail() {

        return await this.emaiField.textContent();
    }

    getStateCountyField() {

        return this.stateCountyField;
    }

    getRegionField() {

        return this.regionField;
    }

    getMunicipalityField() {

        return this.municipalityField;
    }

    getAdditionalDropdownList() {

        return this.additionalDropdownList;
    }

    getDropdownList() {

        return this.dropdownList;
    }
}