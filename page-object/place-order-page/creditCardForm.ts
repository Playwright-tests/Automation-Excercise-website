import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class CreditCardForm extends BasePage {

    private readonly NAME_ON_CART_FIELD: Locator;
    private readonly CARD_NUMBER_FIELD: Locator;
    private readonly CVC_FIELD: Locator;
    private readonly EXPIRATION_MONTH_FIELD: Locator;
    private readonly EXPIRATION_YEAR_FIELD: Locator;

    constructor(page: Page) {

        super(page);

        this.NAME_ON_CART_FIELD = page.locator('input[name="name_on_card"]');
        this.CARD_NUMBER_FIELD = page.locator('input[name="card_number"]');
        this.CVC_FIELD = page.locator('input[name="cvc"]');
        this.EXPIRATION_MONTH_FIELD = page.locator('input[name="expiry_month"]');
        this.EXPIRATION_YEAR_FIELD = page.locator('input[name="expiry_year"]');
    }

    async setBrand(brand: string) {

        await this.NAME_ON_CART_FIELD.fill(brand);
    }

    async setNumber(num: string) {

        await this.CARD_NUMBER_FIELD.fill(num);
    }

    async setCvc(cvc: string) {

        await this.CVC_FIELD.fill(cvc);
    }

    async setMonth(month: string) {

        await this.EXPIRATION_MONTH_FIELD.fill(month);
    }

    async setYear(year: string) {

        this.EXPIRATION_YEAR_FIELD.fill(year);
    }

    async getBrand() {

        return await this.NAME_ON_CART_FIELD.textContent();
    }

    async getNumber() {

        return await this.CARD_NUMBER_FIELD.textContent();
    }

    async getCvc() {

        return await this.CVC_FIELD.textContent();
    }

    async getMonth() {

        return await this.EXPIRATION_MONTH_FIELD.textContent();
    }

    async getYear() {

        return await this.EXPIRATION_YEAR_FIELD.textContent();
    }
}