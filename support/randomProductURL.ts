import { TestDataFileNames } from "../enums/testdataFileNames";
import { getStrings } from "../testdata-IO/testdataLoader";

export function getRandomProductURL(): string {

    const data = getStrings(TestDataFileNames.PRODUCT_PAGE_URLS, 'urls');
    const index = Math.floor(Math.random() * (data.length - 1));
    return data[index];
}