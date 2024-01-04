import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage.spec";
import { DifferentAddressSection } from "./differentAddressSection.spec";

export class CheckoutPage extends BasePage {

    private differentAddressSection: DifferentAddressSection;

    constructor(page: Page) {

        super(page);

        this.differentAddressSection = new DifferentAddressSection(page);
    }

    getDifferentAddressSection() {

        return this.differentAddressSection;
    }
}