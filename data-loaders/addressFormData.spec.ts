import { getJSONArray } from "./JSONArray.spec";

export function getAddressFormData(node: string) {

    let JSONArray = getJSONArray('addressForm');
    
    let addressFormData: { 
        country: string,
        firstName: string,
        lastName: string,
        company: string,
        address1: string,
        address2: string,
        city: string,
        postcode: string,
        phone: string,
        email: string;    
        errorMessage: string
    }[] = [];

    for(const data of JSONArray[node]) {

        let temp = {
            country: data.country,
            firstName: data.firstName,
            lastName: data.lastName,
            company: data.company,
            address1: data.address1,
            address2: data.address2,
            city: data.city,
            postcode: data.postcode,
            phone: data.phone,
            email: data.email,
            errorMessage: data.errorMessage
        };

        addressFormData.push(temp);
    }

    return addressFormData;
}