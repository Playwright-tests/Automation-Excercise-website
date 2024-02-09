import { TestdataFiles } from "../enums/testdataFiles";
import { TestdataLoader } from "../testdata-loaders/testdataLoader";
import { AddressData, Credentials, LinkData } from "../models/models";

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
