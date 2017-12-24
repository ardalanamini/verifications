# Verifications

A **TypeScript Ready** universal validation library for developers

[![npm](https://img.shields.io/npm/v/verifications.svg)](https://www.npmjs.com/package/verifications)
[![npm](https://img.shields.io/npm/dm/verifications.svg)](https://www.npmjs.com/package/verifications)
[![GitHub stars](https://img.shields.io/github/stars/ardalanamini/verifications.svg)](https://github.com/ardalanamini/verifications/stargazers)
[![license](https://img.shields.io/github/license/ardalanamini/verifications.svg)](https://github.com/ardalanamini/verifications/blob/master/LICENSE)

[TOC]

### Installation

`npm i -s verifications`

### Usage

#### require / import

```javascript
const Verifications = require('verifications');
// or
import Verifications from 'verifications';
```

#### Available Methods

- NationalID - (static method)
  - verify(code: string, locale?: string): boolean
- CreditCard - (static method)
  - verify(code: string): boolean
  - type(code: string): string | undefined
  - issuer(code: string): { name: string, alias: string, website: string } | undefined
  - identify(code: string): { type: Type, issuer: Issuer } | undefined

##### NationalID

returns true if the code matches any supported format

```javascript
var isNationalIDValid = Verifications
							.NationalID
							.verify('xxx-xxxxxx-x');
```

you can also enforce the locale

```javascript
isNationalIdValid = Verifications
						.NationalID
						.verify('xxx-xx-xxxx', 'US');
```

**Supported Locales:**

- Iran (IR) - کد ملی
- United States (US) - Social Security Number

##### CreditCard

returns true if the code matches any supported format

```javascript
var isCreditCardValid = Verifications
                          .CreditCard
                          .verify('xxxx-xxxx-xxxx-xxxx');
```

returns identity of the card/issuer

```javascript
var isCreditCardValid = Verifications
                          .CreditCard
                          .identify('xxxx-xxxx-xxxx-xxxx');
```

returns type of the card

```javascript
var isCreditCardValid = Verifications
                          .CreditCard
                          .type('xxxx-xxxx-xxxx-xxxx');
```

returns issuer of the card

```javascript
var isCreditCardValid = Verifications
                          .CreditCard
                          .issuer('xxxx-xxxx-xxxx-xxxx');
```

**Luhn verification algorithm (almost all credit cards around the globe)**

- 9 card/issuer types
- 46 active issuers are supported

*****

**for client side usage you're going to need json-loader or something...**
