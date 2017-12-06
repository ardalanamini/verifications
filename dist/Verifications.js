"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nationalCode_1 = require("./nationalCode");
const creditCard_1 = require("./creditCard");
class Verifications {
    constructor(locale) {
        this.locale = locale.toUpperCase();
    }
    setLocale(locale) {
        this.locale = locale.toUpperCase();
    }
    get nationalCode() {
        return nationalCode_1.default[this.locale];
    }
    get creditCard() {
        return creditCard_1.default[this.locale];
    }
}
exports.default = Verifications;
