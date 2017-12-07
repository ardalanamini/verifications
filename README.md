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

var isNationalIdValid = new Verifications()
                                .nationalId
                                .verify('xxx-xxxxxx-x');

isNationalIdValid = new Verifications('US')
                                .nationalId
                                .verify('xxx-xx-xxxx');
// or
isNationalIdValid = new Verifications()
                            .setLocale('US')
                            .nationalId
                            .verify('xxx-xx-xxxx');

var isCreditCardValid = Verifications
                          .CreditCard
                          .verify('xxxx-xxxx-xxxx-xxxx');
```

* for client side usage you're going to need json-loader or something...

##### Available Methods

- nationalId - (needs locale)
  - verify(code: string): boolean
- CreditCard - (static method)
  - verify(code: string): boolean
  - type(code: string): string | undefined
  - issuer(code: string): { name: string, alias: string, website: string } | undefined
  - identify(code: string): { type: Type, issuer: Issuer } | undefined

### nationalId

**Supported countries:**

- Iran (IR) - کد ملی
- United States (US) - Social Security Number

### CreditCard

**Luhn verification algorithm (almost all credit cards around the globe)**

- 9 card/issuer types
- 46 active issuers are supported
