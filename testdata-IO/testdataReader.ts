export class TestdataReader {

    public static get(fileName: string) {

        return JSON.parse(JSON.stringify(require('../testdata/' + fileName)));
    }
}