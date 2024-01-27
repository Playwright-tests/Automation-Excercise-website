import { AddressFormTestdata, LoginTestdata } from "../enums/mockarooTestData";
import { MockaroTesdataProvider } from "../mockaroo-testdata-provider/mockarooTestDataProvider";

export class LoginTestdataLoader {

    static correct: any;
    static incorrectUsername: any;
    static incorrectPassword: any;
    static blankUsernameField: any;
    static blankPasswordField: any;

    static async init() {

        this.correct = MockaroTesdataProvider.fetchData(LoginTestdata.Correct);
        this.incorrectUsername = MockaroTesdataProvider.fetchData(LoginTestdata.IncorrectUsername);
        this.incorrectPassword = MockaroTesdataProvider.fetchData(LoginTestdata.IncorrectPassword);
        this.blankUsernameField = MockaroTesdataProvider.fetchData(LoginTestdata.BlankUsernameField);
        this.blankPasswordField = MockaroTesdataProvider.fetchData(LoginTestdata.BlankPasswordField);
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

        this.correct = MockaroTesdataProvider.fetchData(AddressFormTestdata.Correct);
        this.incorrectFirstName = MockaroTesdataProvider.fetchData(AddressFormTestdata.IncorrectFirstName);
        this.incorrectLastName = MockaroTesdataProvider.fetchData(AddressFormTestdata.IncorrectLastName);
        this.incorrectPostcode = MockaroTesdataProvider.fetchData(AddressFormTestdata.IncorrectPostcode);
        this.incorrectPhone = MockaroTesdataProvider.fetchData(AddressFormTestdata.IncorrectPhone);
        this.incorrectEmailFormat = MockaroTesdataProvider.fetchData(AddressFormTestdata.IncorrectEmailFormat);
        this.blankCompanyField = MockaroTesdataProvider.fetchData(AddressFormTestdata.BlankCompanyField);
        this.blankSecondAddressLineField = MockaroTesdataProvider.fetchData(AddressFormTestdata.BlankSecondAddressLineField);
        this.blankFirstNameField = MockaroTesdataProvider.fetchData(AddressFormTestdata.BlankFirstNameField);
        this.blankLastNameField = MockaroTesdataProvider.fetchData(AddressFormTestdata.BlankLastNameField);
        this.blankAddressField = MockaroTesdataProvider.fetchData(AddressFormTestdata.BlankAddressField);
        this.blankPostcodeField = MockaroTesdataProvider.fetchData(AddressFormTestdata.BlankPostcodeField);
        this.blankCityField = MockaroTesdataProvider.fetchData(AddressFormTestdata.BlankCityField);
        this.blankPhoneField = MockaroTesdataProvider.fetchData(AddressFormTestdata.BlankPhoneField);
        this.blankEmailField = MockaroTesdataProvider.fetchData(AddressFormTestdata.BlankEmailField);
    }
}