"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const banks = {
    '02229': {
        name: 'Bank Pasargad',
        alias: 'BPI',
        website: 'https://www.bpi.ir'
    },
    '02806': {
        name: 'Shahr Bank',
        alias: 'Shahr Bank',
        website: 'http://shahr-bank.ir'
    },
    '02908': {
        name: 'Tose\'e Ta\'avon Bank',
        alias: 'Tose\'e Ta\'avon Bank',
        website: 'http://www.ttbank.ir'
    },
    '02938': {
        name: 'Bank Day',
        alias: 'Bank Day',
        website: 'http://www.bank-day.ir/'
    },
    '03769': {
        name: 'Bank Saderat Iran',
        alias: 'BSI',
        website: 'http://www.bsi.ir/'
    },
    '03770': {
        name: 'Keshavarzi Bank',
        alias: 'BKI',
        website: 'http://www.bki.ir'
    },
    '03799': {
        name: 'Bank Melli Iran',
        alias: 'BMI',
        website: 'https://bmi.ir'
    },
    '10433': {
        name: 'Bank Mellat',
        alias: 'Bank Mellat',
        website: 'https://www.bankmellat.ir'
    },
    '21986': {
        name: 'Saman Bank',
        alias: 'SB',
        website: 'https://www.sb24.com'
    },
    '22106': {
        name: 'Parsian Bank',
        alias: 'Parsian Bank',
        website: 'http://www.persian-bank.ir'
    },
    '27353': {
        name: 'Tejarat Bank',
        alias: 'Tejarat Bank',
        website: 'https://www.tejaratbank.ir'
    },
    '27381': {
        name: 'Ansar Bank',
        alias: 'Ansar Bank',
        website: 'https://www.ansarbank.com'
    },
    '27412': {
        name: 'Eghtesad Novin Bank',
        alias: 'EN Bank',
        website: 'https://www.enbank.ir'
    },
    '27488': {
        name: 'Karafarin Bank',
        alias: 'Karafarin Bank',
        website: 'http://www.karafarinbank.ir'
    },
    '27648': {
        name: 'Export Development Bank of Iran',
        alias: 'EDBI',
        website: 'https://www.edbi.ir'
    },
    '27760': {
        name: 'Post Bank of Iran',
        alias: 'Post Bank of Iran',
        website: 'http://www.postbank.ir'
    },
    '27961': {
        name: 'Bank of Industry and Mine',
        alias: 'BIM',
        website: 'http://www.bim.ir'
    },
    '28023': {
        name: 'Bank Maskan',
        alias: 'Bank Maskan',
        website: 'http://bank-maskan.ir'
    },
    '36214': {
        name: 'Ayandeh Bank',
        alias: 'BA',
        website: 'https://www.ba24.ir'
    },
    '39346': {
        name: 'Sina Bank',
        alias: 'Sina Bank',
        website: 'https://www.sinabank.ir'
    },
    '39370': {
        name: 'Mehr Eqtesad Bank',
        alias: 'ME Bank',
        website: 'https://www.mebank.ir'
    },
    '39607': {
        name: 'Sarmayeh Bank',
        alias: 'Sarmayeh Bank',
        website: 'https://www.sbank.ir'
    },
    '89210': {
        name: 'Bank Sepah',
        alias: 'Bank Sepah',
        website: 'https://www.ebanksepah.ir'
    },
    '89463': {
        name: 'Refah Bank',
        alias: 'Refah Bank',
        website: 'http://refah-bank.ir'
    },
};
const types = {
    '3': 'travel',
    '5': 'bank',
    '6': 'bank' // bank or financial institution
};
/**
 *
 * @see http://www.aliarash.com/article/creditcart/credit-debit-cart.htm
 */
function verify(code) {
    const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let digits = code.replace(/\D/g, '') // just in case
        .split('') // spliting digits
        .map((digit) => +digit); // parsing digits into number type
    if (digits.length !== 16)
        return false;
    const onesDigit = digits[0];
    indexes.map((index) => {
        if (index % 2 === 1) {
            digits[index - 1] *= 2;
            if (digits[index - 1] > 9)
                digits[index - 1] -= 9;
        }
    });
    let sum = 0;
    digits.map((digit) => sum += digit);
    return sum % 10 === 0;
}
exports.verify = verify;
function identify(code) {
    code = code.replace(/\D/g, '');
    let valid = verify(code);
    return {
        valid,
        type: valid ? types[code[0]] : undefined,
        bank: valid ? banks[code.slice(1, 5)] : undefined
    };
}
exports.identify = identify;
