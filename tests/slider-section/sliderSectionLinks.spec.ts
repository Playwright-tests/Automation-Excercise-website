import { getLinkData } from "../../data-loaders/link";
import { test, expect } from "../../fixtures/sliderSection";

const links = getLinkData('sliderSectionLinks');


test.describe('Slider section links',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.linkText + '" link',async ({sliderSection}) => {
            
            await test.step('Click the "' + link.linkText + '" link',async () => {
                
                await sliderSection.clickLink(link.linkText);
            })

            await expect(await sliderSection.getPage()).toHaveURL(link.url);
        })
    }
})