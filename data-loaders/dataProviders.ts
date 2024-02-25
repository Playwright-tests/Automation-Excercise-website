import { TestdataFiles } from "../enums/testdataFiles";
import { TestdataLoader } from "../testdata-loaders/testdataLoader";
import { AddressData, Credentials, LinkData, NewsletterData, ProductToCart, ThumbnailData } from "../models/models";

export class ArraysDataProvider {

    public static get(fileName: string) {

        let data: any;
        data = TestdataLoader.get(fileName);
        return data;
    }
}

export class LinkDataProvider {

    public static get(scenario: string) {

        let linkData: LinkData[];
        const data = TestdataLoader.get(TestdataFiles.LINKS);
        linkData = data[scenario];
        return linkData;
    }
}

export class CredentialsDataProvider {

    public static get() {

        let credentials: Credentials[];
        credentials = TestdataLoader.get(TestdataFiles.CREDENTIALS);
        return credentials;
    }
}

export class AddressDataProvider {

    public static get() {

        let addressData: AddressData[];
        addressData = TestdataLoader.get(TestdataFiles.ADDRESS);
        return addressData;
    }
}

export class NewsletterDataProvider {

    public static get() {

        let newsletterData: NewsletterData;
        newsletterData = TestdataLoader.get(TestdataFiles.NEWSLETTER);
        return newsletterData;
    }
}

export class ProductToCartDataProvider {

    public static get() {

        let productsToCart: ProductToCart[];
        const temp = TestdataLoader.get(TestdataFiles.PRODUCTS_TO_CART);
        productsToCart = temp.products;
        return productsToCart;
    }
}

export class ThumbnailDataProvider {

    public static get() {

        let thumbnailData: ThumbnailData[];
        const temp = TestdataLoader.get(TestdataFiles.THUMBNAIL_DATA);
        thumbnailData = temp.thumbnails;
        return thumbnailData;
    }
}
