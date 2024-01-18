import { test as base } from "@playwright/test";
import { SliderSection } from "../page-object/slider-section/sliderSection";
import { URLs } from "../enums/URLs";

export { expect } from "@playwright/test";

export type SliderSectionFixture = {

    sliderSection: SliderSection
}

export const test = base.extend<SliderSectionFixture>({

    sliderSection:async ({page}, use) => {
        
        const sliderSection = new SliderSection(page);

        await sliderSection.goto(URLs.HomePage);
        await use(sliderSection);
    }
})