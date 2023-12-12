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

        this.firstNameField = page.getByLabel('First name *');
        this.lastNameField = page.getByLabel('Last name *');
        this.companyField = page.getByLabel('Company name');
        this.addressField_1 = page.getByPlaceholder('House number and street name');
        this.addressField_2 = page.getByPlaceholder("Apartment, suite, unit etc. (')");
        this.townCityField = page.getByLabel('Town / City *');
        this.stateCountyField = page.getByLabel('State / County *');
        this.regionField = page.getByLabel('Region *');
        this.municipalityField = page.getByLabel('Municipality');
        this.additionalDropdownList = page.locator('#billing_state_field').getByLabel('', {exact: true});
        this.postcodeField = page.getByLabel('Postcode / ZIP *');
        this.phoneField = page.getByLabel('Phone *');
        this.emaiField = page.getByLabel('Email address *');
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

        this.phoneField.fill(phone);
    }

    async setEmail(email: string) {

        this.emaiField.fill(email);
    }

    async clickSaveAddressButton() {

        await this.saveAddressButton.click();
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