import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class BrandsMenu extends BasePage {

    private readonly SELECTOR = '.nav.nav-pills.nav-stacked';

    constructor(page: Page) {

        super(page);
    }

    private async clickLink(linkName: string) {

        await (await this.getPage()).locator(this.SELECTOR).getByRole('link', {name: linkName}).click();
    }

    async clickPoloLink() {

        await this.clickLink('Polo');
    }

    async clickHAndMLink() {

        await this.clickLink('H&M');
    }

    async clickMadameLink() {

        await this.clickLink('Madame');
    }

    async clickMastAndHarbourLink() {

        await this.clickLink('Mast & Harbour');
    }

    async clickBabyhugLink() {

        await this.clickLink('Babyhug');
    }

    async clickAllySollenJuniorLink() {

        await this.clickLink('Allen Solly Junior');
    }

    async clickKookieKidsLink() {

        await this.clickLink('Kookie Kids');
    }

    async clickBibaLink() {

        await this.clickLink('Biba');
    }
}

