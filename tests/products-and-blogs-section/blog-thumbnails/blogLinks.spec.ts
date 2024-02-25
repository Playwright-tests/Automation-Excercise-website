import { LinkDataProvider } from "../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../enums/testScenarios";
import { ThumbnailCategory } from "../../../enums/thumbnailCategory";
import { test, expect } from "../../../fixtures/thumbnail";
import { blogsSteps } from "../steps.spec";

const blogs_1 = LinkDataProvider.get(TestScenarios.BLOGS_1);
const blogs_2 = LinkDataProvider.get(TestScenarios.BLOGS_2);

test.describe('Links to blogs',async () => {
    
    for(const blog of blogs_1) {

        test('Clicking the "' + blog.link + '" link',async ({blogThumbnail}) => {

            await blogsSteps(await blogThumbnail.getPage(), ThumbnailCategory.Recent1, blog.link);
            await expect(await blogThumbnail.getPage()).toHaveURL(blog.url);
        })
    }

    for(const blog of blogs_2) {

        test('Clicking the "' + blog.link + '" link',async ({blogThumbnail}) => {

            await blogsSteps(await blogThumbnail.getPage(), ThumbnailCategory.Recent2, blog.link);
            await expect(await blogThumbnail.getPage()).toHaveURL(blog.url);
        })
    }
})