import { MockarooTestdata } from "../enums/mockarooTestData";
import { MockaroTesdataProvider } from "../mockaroo-testdata-provider/mockarooTestDataProvider";

export class CredentialsTestdataLoader {

    static correct: any;
    static incorrectUsername: any;
    static incorrectPassword: any;

    static async init() {

        this.correct = MockaroTesdataProvider.fetchData(MockarooTestdata.LoginCorrect);
        this.incorrectUsername = MockaroTesdataProvider.fetchData(MockarooTestdata.LoginIncorrectUsername);
        this.incorrectPassword = MockaroTesdataProvider.fetchData(MockarooTestdata.LoginIncorrectPassword);
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

        this.correct = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormCorrectData);
        this.incorrectFirstName = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormIncorrectFirstName);
        this.incorrectLastName = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormIncorrectLastName);
        this.incorrectPostcode = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormIncorrectPostcode);
        this.incorrectPhone = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormIncorrectPhone);
        this.incorrectEmailFormat = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormIncorrectEmailFormat);
        this.blankCompanyField = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormBlankCompanyField);
        this.blankSecondAddressLineField = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormBlankSecondAddressLineField);
        this.blankFirstNameField = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormBlankFirstNameField);
        this.blankLastNameField = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormBlankLastNameField);
        this.blankAddressField = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormBlankAddressField);
        this.blankPostcodeField = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormBlankPostcodeField);
        this.blankCityField = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormBlankCityField);
        this.blankPhoneField = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormBlankPhoneField);
        this.blankEmailField = MockaroTesdataProvider.fetchData(MockarooTestdata.AddressFormBlankEmailField);
    }
}