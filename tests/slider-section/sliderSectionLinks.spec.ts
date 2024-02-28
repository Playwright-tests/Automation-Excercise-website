import { LinkDataProvider } from "../../data-loaders/dataProviders";
import { TestScenarios } from "../../enums/testScenarios";
import { test, expect } from "../../fixtures/sliderSection";

const links = LinkDataProvider.get(TestScenarios.SLIDER_SECTION);

test.describe('Slider section links',async () => {
    
    for(const link of links) {

        test('Clicking the "' + link.link + '" link',async ({sliderSection}) => {
            
            await test.step('Click the "' + link.link + '" link',async () => {
                
                await sliderSection.clickLink(link.link);
            })

            await expect(await sliderSection.getPage()).toHaveURL(link.url);
        })
    }
})