import { LinkDataProvider } from "../../../data-loaders/dataProviders";
import { TestScenarios } from "../../../enums/testScenarios";
import { ThumbnailCategory } from "../../../enums/thumbnailCategory";
import { test, expect } from "../../../fixtures/thumbnail";
import { blogsSteps, productsSteps } from "../steps.spec";

const allBlackTops = LinkDataProvider.get(TestScenarios.ALL_BLACK_TOPS);
const highHeelShoes = LinkDataProvider.get(TestScenarios.HIGH_HEEL_SHOES);
const mostWanted = LinkDataProvider.get(TestScenarios.MOST_WANTED);
const scarfs = LinkDataProvider.get(TestScenarios.SCARFS);
const onSale = LinkDataProvider.get(TestScenarios.ON_SALE);
const featured = LinkDataProvider.get(TestScenarios.FEATURED);
const trends = LinkDataProvider.get(TestScenarios.TRENDS);

test.describe('Home page links to products from  the "ALL BLACK TOPS" category',async () => {
    
    for(const link of allBlackTops) {

        test('Clicking the "' + link.link + '" link',async ({productThumbnail}) => {
            
            await productsSteps(await productThumbnail.getPage(), ThumbnailCategory.AllBlackTops, link.link);
            await expect(await productThumbnail.getPage()).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "HIGH HEEL SHOES" category',async () => {
    
    for(const link of highHeelShoes) {

        test('Clicking the "' + link.link + '" link',async ({productThumbnail}) => {
            
            await productsSteps(await productThumbnail.getPage(), ThumbnailCategory.HighHeelShoes, link.link);
            await expect(await productThumbnail.getPage()).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "MOST WANTED" category',async () => {
    
    for(const link of mostWanted) {

        test('Clicking the "' + link.link + '" link',async ({productThumbnail}) => {
            
            await productsSteps(await productThumbnail.getPage(), ThumbnailCategory.MostWanted, link.link);
            await expect(await productThumbnail.getPage()).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "SCARFS" category',async () => {
    
    for(const link of scarfs) {

        test('Clicking the "' + link.link + '" link',async ({productThumbnail}) => {
            
            await productsSteps(await productThumbnail.getPage(), ThumbnailCategory.Scarfs, link.link);
            await expect(await productThumbnail.getPage()).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "ON SALE" category',async () => {
    
    for(const link of onSale) {

        test('Clicking the "' + link.link + '" link',async ({productThumbnail}) => {
            
            await productsSteps(await productThumbnail.getPage(), ThumbnailCategory.OnSale, link.link);
            await expect(await productThumbnail.getPage()).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "FEATURED" category',async () => {
    
    for(const link of featured) {

        test('Clicking the "' + link.link + '" link',async ({productThumbnail}) => {
            
            await productsSteps(await productThumbnail.getPage(), ThumbnailCategory.Featured, link.link);
            await expect(await productThumbnail.getPage()).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "TRENDS" category',async () => {
    
    for(const link of trends) {

        test('Clicking the "' + link.link + '" link',async ({productThumbnail}) => {
            
            await productsSteps(await productThumbnail.getPage(), ThumbnailCategory.Trends, link.link);
            await expect(await productThumbnail.getPage()).toHaveURL(link.url);
        })
    }
})