import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class ShoppingCartProcessing extends BasePage {

    readonly animationSelector: string;

    constructor(page: Page) {

        super(page);

        this.animationSelector = '.woocommerce-cart-form.processing';
    }

    getAnimationSelector() {

        return this.animationSelector;
    }
}