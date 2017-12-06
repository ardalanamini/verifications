"use strict";
if (!Number.prototype.isOdd) {
    Number.prototype.isOdd = function () {
        return Math.abs(this % 2) === 1;
    };
}
