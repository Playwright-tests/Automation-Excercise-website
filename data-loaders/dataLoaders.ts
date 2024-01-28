import { BlogsTestdata, MainMenuDropdownListLinksTestdata, MainMenuLinksTestdata, ProductsTestdata, SliderSectionLinksTestdata } from "../enums/localTestdata";
import { AddressFormTestdata, AddressFormAdditionalFieldsTestdata, DropdownListCountryNameTestdata, LoginTestdata } from "../enums/mockarooTestData";
import { getTestdata } from "../services/dataService";
import { JSONReader, LocalTestdataProvider } from "../testdata-providers/localTestdataProvider";

export class LoginTestdataLoader {

    static correct: any;
    static incorrectUsername: any;
    static incorrectPassword: any;
    static blankUsernameField: any;
    static blankPasswordField: any;

    static async init() {

        this.correct = await getTestdata(LoginTestdata.Correct);
        this.incorrectUsername = await getTestdata(LoginTestdata.IncorrectUsername);
        this.incorrectPassword = await getTestdata(LoginTestdata.IncorrectPassword);
        this.blankUsernameField = await getTestdata(LoginTestdata.BlankUsernameField);
        this.blankPasswordField = await getTestdata(LoginTestdata.BlankPasswordField);
    }
}

export class AddressFormAdditionalFieldsTestdataLoader {

    static countyDropdownList: any;
    static districtDropdownList: any;
    static municipalityField: any;
    static prefectureDropdownList: any;
    static provinceDropdownList: any;
    static regionDropdownList: any;
    static regionField: any;
    static stateCountyDropdownList: any;
    static stateCountyField: any;
    static stateDropdownList: any;
    static stateZoneDropdownList: any;

    static async init() {

        this.countyDropdownList = await getTestdata(AddressFormAdditionalFieldsTestdata.CountyDropdownList);
        this.districtDropdownList = await getTestdata(AddressFormAdditionalFieldsTestdata.DistrictDropdownList);
        this.municipalityField = await getTestdata(AddressFormAdditionalFieldsTestdata.MunicipalityField);
        this.prefectureDropdownList = await getTestdata(AddressFormAdditionalFieldsTestdata.PrefectureDropdownList);
        this.provinceDropdownList = await getTestdata(AddressFormAdditionalFieldsTestdata.ProvinceDropdownList);
        this.regionDropdownList = await getTestdata(AddressFormAdditionalFieldsTestdata.RegionDropdownList);
        this.regionField = await getTestdata(AddressFormAdditionalFieldsTestdata.RegionField);
        this.stateCountyDropdownList = await getTestdata(AddressFormAdditionalFieldsTestdata.StateCountyDropdownList);
        this.stateCountyField = await getTestdata(AddressFormAdditionalFieldsTestdata.StateCountyField);
        this.stateDropdownList = await getTestdata(AddressFormAdditionalFieldsTestdata.StateDropdownList);
        this.stateZoneDropdownList = await getTestdata(AddressFormAdditionalFieldsTestdata.StateZoneDropdownList);
    }
}

export class AddressFormTestdataLoader {

    static correct: any;
    static incorrectFirstName: any;
    static incorrectLastName: any;
    static incorrectPostcode: any;
    static incorrectPhone: any;
    static incorrectEmailFormat: any;
    static blankCompanyField: any;
    static blankSecondAddressLineField: any;
    static blankFirstNameField: any;
    static blankLastNameField: any;
    static blankAddressField: any;
    static blankPostcodeField: any;
    static blankCityField: any;
    static blankPhoneField: any;
    static blankEmailField: any;

    static async init() {

        this.correct = await getTestdata(AddressFormTestdata.Correct);
        this.incorrectFirstName = await getTestdata(AddressFormTestdata.IncorrectFirstName);
        this.incorrectLastName = await getTestdata(AddressFormTestdata.IncorrectLastName);
        this.incorrectPostcode = await getTestdata(AddressFormTestdata.IncorrectPostcode);
        this.incorrectPhone = await getTestdata(AddressFormTestdata.IncorrectPhone);
        this.incorrectEmailFormat = await getTestdata(AddressFormTestdata.IncorrectEmailFormat);
        this.blankCompanyField = await getTestdata(AddressFormTestdata.BlankCompanyField);
        this.blankSecondAddressLineField = await getTestdata(AddressFormTestdata.BlankSecondAddressLineField);
        this.blankFirstNameField = await getTestdata(AddressFormTestdata.BlankFirstNameField);
        this.blankLastNameField = await getTestdata(AddressFormTestdata.BlankLastNameField);
        this.blankAddressField = await getTestdata(AddressFormTestdata.BlankAddressField);
        this.blankPostcodeField = await getTestdata(AddressFormTestdata.BlankPostcodeField);
        this.blankCityField = await getTestdata(AddressFormTestdata.BlankCityField);
        this.blankPhoneField = await getTestdata(AddressFormTestdata.BlankPhoneField);
        this.blankEmailField = await getTestdata(AddressFormTestdata.BlankEmailField);
    }
}

export class DropdownListCountryNameTestdataLoader {

    static correct: any;
    static incorrect: any;

    static async init() {

        this.correct = await getTestdata(DropdownListCountryNameTestdata.Correct);
        this.incorrect = await getTestdata(DropdownListCountryNameTestdata.Incorrect);
    }
}

export class ProductsLinksTestdataLoader {

    static allBlackTops: any[];
    static featured: any[];
    static highHeelShoes: any[];
    static mostWanted: any[];
    static onSale: any[];
    static scarfs: any[];
    static trends: any[];

    static init() {

        this.allBlackTops = JSONReader.get(ProductsTestdata.AllBlackTops);
        this.featured = JSONReader.get(ProductsTestdata.Featured);
        this.highHeelShoes = JSONReader.get(ProductsTestdata.HighHeelShoes);
        this.mostWanted = JSONReader.get(ProductsTestdata.MostWanted);
        this.onSale = JSONReader.get(ProductsTestdata.OnSale);
        this.scarfs = JSONReader.get(ProductsTestdata.Scarfs);
        this.trends = JSONReader.get(ProductsTestdata.Trends);
    }
}

export class BlogsLinksTestdataLoader {

    static blogs_1: any[];
    static blogs_2: any[];

    static init() {

        this.blogs_1 = JSONReader.get(BlogsTestdata.Blogs_1);
        this.blogs_2 = JSONReader.get(BlogsTestdata.Blogs_2);
    }
}

export class MainMenuLinksTestdataLoader {

    static links: any[];

    static init() {

        this.links = JSONReader.get(MainMenuLinksTestdata.Links);
    }
}

export class MainMenuDropdownListLinksTestdataLoader {

    static links: any[];

    static init() {

        this.links = JSONReader.get(MainMenuDropdownListLinksTestdata.Links);
    }
}

export class SliderSectionLinksTestdataLoader {

    static links: any[];

    static init() {

        this.links = JSONReader.get(SliderSectionLinksTestdata.Links);
    }
}