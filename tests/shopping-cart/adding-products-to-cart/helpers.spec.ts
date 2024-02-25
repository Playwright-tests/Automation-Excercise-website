import { ProductData } from "../../../models/models"
import { ProductPage } from "../../../page-object/product-page/productPage"
import { ProductThumbnail } from "../../../page-object/thumbnail/productThumbnail"

export async function setProductsDataFromProductPage(productPage: ProductPage, quantityValue: string, productData: ProductData[]) {
        
    productData.push({
        name: await productPage.getProductTitle(),
        price: await productPage.getProductPrice(),
        quantity: quantityValue
    })
}

export async function setProductDataFromProductThumbnail(thumbnail: ProductThumbnail, productData: ProductData[]) {
    
    productData.push({
        name: await thumbnail.getLinkText(),
        price: await thumbnail.getPrice(),
        quantity: '1'
    })
}