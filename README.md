# Verifications

universal validation library for developers

[![npm](https://img.shields.io/npm/v/verifications.svg)](https://www.npmjs.com/package/verifications)
[![npm](https://img.shields.io/npm/dt/verifications.svg)](https://www.npmjs.com/package/verifications)
[![GitHub stars](https://img.shields.io/github/stars/ardalanamini/verifications.svg)](https://github.com/ardalanamini/verifications/stargazers)
[![license](https://img.shields.io/github/license/ardalanamini/verifications.svg)](https://github.com/ardalanamini/verifications/blob/master/LICENSE)

### Installation

`npm install --save verifications`

### Usage

```javascript
const Verifications = require('verifications');

var isCreditCardValid = new Verifications('IR')
                              .creditCard
                              .verify('xxxx-xxxx-xxxx-xxxx');
// or
isCreditCardValid = new Verifications()
                          .setLocale('IR')
                          .creditCard
                          .verify('xxxx-xxxx-xxxx-xxxx');
```

### Available Locales

- IR (default)

### Available Methods

- nationalCode
  - verify(code: string): boolean
- creditCard
  - verify(code: string): boolean
  - identify(code: string): { valid: voolean, type?: string, bank?: { name: string, alias: string, website: string } }
