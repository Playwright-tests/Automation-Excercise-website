import * as fs from "fs/promises";
import * as path from 'path';

export class LocalTestdataProvider {

    private static getFullPath(fileName: string) {

        return path.join(__dirname, '../testdata', fileName + '.json')
    }

    static async fetchData(fileName: string) {

        try {
            const data = await fs.readFile(this.getFullPath(fileName), 'utf-8');
            return JSON.parse(data);
        } catch(error) {
            console.error('Could not read the testdata: ' + this.getFullPath(fileName), error);
        }
    }
}