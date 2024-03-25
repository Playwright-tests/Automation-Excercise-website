import { TestDataFileNames } from "../enums/testdataFileNames";
import { Credentials } from "../types/types";
import { TestdataReader } from "./testdataReader";

export function getStrings(fileName: string, key: string): string[] {

    let temp = TestdataReader.get(fileName);
    return temp[key];
}

export function getCredentials(key: string): Credentials[] {

    let temp = TestdataReader.get(TestDataFileNames.CREDENTIALS);
    return temp[key];
}