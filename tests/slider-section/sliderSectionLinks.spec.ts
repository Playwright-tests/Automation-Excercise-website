import { SliderSectionLinksTestdataLoader } from "../../data-loaders/dataLoaders";
import { test, expect } from "../../fixtures/sliderSection";

SliderSectionLinksTestdataLoader.init();

test.describe('Slider section links',async () => {
    
    for(const link of SliderSectionLinksTestdataLoader.links) {

        test('Clicking the "' + link.linkText + '" link',async ({sliderSection}) => {
            
            await test.step('Click the "' + link.linkText + '" link',async () => {
                
                await sliderSection.clickLink(link.linkText);
            })

            await expect(await sliderSection.getPage()).toHaveURL(link.url);
        })
    }
})