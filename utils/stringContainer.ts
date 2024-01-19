export class StringContainer {

    private value: string;

    constructor() {

        this.value = '';
    }

    setValue(v: string) {

        this.value = v;
    }

    getValue() {

        return this.value;
    }
}