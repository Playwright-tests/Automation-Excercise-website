export function removeCurrencySymbol(str: string | null) {

    if(str === null) {

        return 0;
    }

    const trimmed = str?.trim();
    const value = trimmed?.replace('zł', '');

    return value;
}

export function toNumber(str: string | 0) {

    if(str === 0) {

        return 0;
    }

    return parseInt(str, 10);
}