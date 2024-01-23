import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { QuantityField } from "../quantity-field/quantityField";

export class ProductPage extends BasePage {

    readonly quantityField: QuantityField;
    readonly addToCartButton: Locator;
    readonly message: Locator;
    readonly producTitle: Locator;
    readonly productPrice: Locator;
    readonly messageSelector: string;

    constructor(page: Page) {

        super(page);

        this.messageSelector = '.woocommerce-message';
        this.addToCartButton = page.getByRole('button', {name: 'Add to cart'});
        this.quantityField = QuantityField.createWithoutNth(page);
        this.message = page.locator(this.messageSelector);
        this.producTitle = page.locator('.product_title ');
        this.productPrice = page.locator('p').filter({hasText: "zł"});
    }

    async getProductTitle() {

        return await this.producTitle.textContent();
    }

    async getProductPrice() {

        return await this.productPrice.textContent();
    }

    async clickAddToCartButton() {

        await this.addToCartButton.click();
    }

    getQuantityField() {

        return this.quantityField;
    }

    getMessageSelector() {

        return this.messageSelector;
    }

    async getMessageContent() {

        return await this.message.textContent();
    }
}