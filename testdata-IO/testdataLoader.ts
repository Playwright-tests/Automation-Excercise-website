import { TestdataReader } from "./testdataReader";

export function getStrings(fileName: string, key: string): string[] {

    let temp = TestdataReader.get(fileName);
    return temp[key];
}