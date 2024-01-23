import { ProductPage } from "../../page-object/product-page/productPage";

export async function getExpectedMessage(productPage: ProductPage) {
    
    const begin = await productPage.getQuantityField().getQuantity() === '1' ? '' : ' ' + await productPage.getQuantityField().getQuantity() + ' ×';
    const verb = await productPage.getQuantityField().getQuantity() === '1' ? 'has' : 'have';

    return 'View cart' + begin + ' “' + await productPage.getProductTitle() + '” ' + verb + ' been added to your cart.';
}