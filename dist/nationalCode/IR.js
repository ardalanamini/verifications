"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function verify(code) {
    const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let digits = code.replace(/\D/g, '') // just in case
        .split('') // spliting digits
        .map((digit) => +digit) // parsing digits into number type
        .reverse(); // and finally reversing the array
    if (digits.length !== 10)
        return false;
    const onesDigit = digits[0];
    indexes.map((index) => digits[index - 1] = digits[index - 1] * index);
    let sum = -onesDigit;
    digits.map((digit) => sum += digit);
    sum %= 11;
    if (sum < 2) {
        if (sum === onesDigit)
            return true;
    }
    else {
        sum = 11 - sum;
        if (sum === onesDigit)
            return true;
    }
    return false;
}
exports.verify = verify;
