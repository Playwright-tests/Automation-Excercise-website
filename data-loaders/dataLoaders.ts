import { AddressFormTestdata, DropdownListAdditionalFieldsTestdata, DropdownListCountryNameTestdata, LoginTestdata } from "../enums/mockarooTestData";
import { getTestdata } from "../services/dataService";

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

export class DropdownListAdditionalFieldsTestdataLoader {

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

        this.countyDropdownList = await getTestdata(DropdownListAdditionalFieldsTestdata.CountyDropdownList);
        this.districtDropdownList = await getTestdata(DropdownListAdditionalFieldsTestdata.DistrictDropdownList);
        this.municipalityField = await getTestdata(DropdownListAdditionalFieldsTestdata.MunicipalityField);
        this.prefectureDropdownList = await getTestdata(DropdownListAdditionalFieldsTestdata.PrefectureDropdownList);
        this.provinceDropdownList = await getTestdata(DropdownListAdditionalFieldsTestdata.ProvinceDropdownList);
        this.regionDropdownList = await getTestdata(DropdownListAdditionalFieldsTestdata.RegionDropdownList);
        this.regionField = await getTestdata(DropdownListAdditionalFieldsTestdata.RegionField);
        this.stateCountyDropdownList = await getTestdata(DropdownListAdditionalFieldsTestdata.StateCountyDropdownList);
        this.stateCountyField = await getTestdata(DropdownListAdditionalFieldsTestdata.StateCountyField);
        this.stateDropdownList = await getTestdata(DropdownListAdditionalFieldsTestdata.StateDropdownList);
        this.stateZoneDropdownList = await getTestdata(DropdownListAdditionalFieldsTestdata.StateZoneDropdownList);
    }
}