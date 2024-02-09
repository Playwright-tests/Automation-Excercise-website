export class TestdataLoader {

    public static get(fileName: string) {

        return JSON.parse(JSON.stringify(require('../testdata/' + fileName)));
    }
}