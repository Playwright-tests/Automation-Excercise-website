import { ThumbnailCategory } from "../../enums/thumbnailCategory";
import { test, expect } from "../../fixtures/thumbnail";
import { getLinkData } from "../../data-loaders/link";
import { steps } from "./steps.spec";

const allBlackTops = getLinkData('allBlackTopsProducts');
const highHeelShoes = getLinkData('highHeelShoesProducts');
const mostWanted = getLinkData('mostWantedProducts');
const scarfs = getLinkData('scarfsProducts');
const onSale = getLinkData('onSaleProducts');
const featured = getLinkData('featuredProducts');
const trends = getLinkData('trendsProducts');


test.describe('Home page links to products from  the "ALL BLACK TOPS" category',async () => {
    
    for(const link of allBlackTops) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailFactory, page}) => {
            
            await steps(page, ThumbnailCategory.AllBlackTops, thumbnailFactory, link.linkText);
            await expect(page).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "HIGH HEEL SHOES" category',async () => {
    
    for(const link of highHeelShoes) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailFactory, page}) => {
            
            await steps(page, ThumbnailCategory.HighHeelShoes, thumbnailFactory, link.linkText);
            await expect(page).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "MOST WANTED" category',async () => {
    
    for(const link of mostWanted) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailFactory, page}) => {
            
            await steps(page, ThumbnailCategory.MostWanted, thumbnailFactory, link.linkText);
            await expect(page).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "SCARFS" category',async () => {
    
    for(const link of scarfs) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailFactory, page}) => {
            
            await steps(page, ThumbnailCategory.Scarfs, thumbnailFactory, link.linkText);
            await expect(page).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "ON SALE" category',async () => {
    
    for(const link of onSale) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailFactory, page}) => {
            
            await steps(page, ThumbnailCategory.OnSale, thumbnailFactory, link.linkText);
            await expect(page).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "FEATURED" category',async () => {
    
    for(const link of featured) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailFactory, page}) => {
            
            await steps(page, ThumbnailCategory.Featured, thumbnailFactory, link.linkText);
            await expect(page).toHaveURL(link.url);
        })
    }
})

test.describe('Home page links to products from the "TRENDS" category',async () => {
    
    for(const link of trends) {

        test('Clicking the "' + link.linkText + '" link',async ({thumbnailFactory, page}) => {
            
            await steps(page, ThumbnailCategory.Trends, thumbnailFactory, link.linkText);
            await expect(page).toHaveURL(link.url);
        })
    }
})