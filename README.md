# Verifications

A **TypeScript Ready** universal verification library (Server-Side and Client-Side) for developers.

[![npm](https://img.shields.io/npm/v/verifications.svg)](https://www.npmjs.com/package/verifications)
[![npm](https://img.shields.io/npm/dm/verifications.svg)](https://www.npmjs.com/package/verifications)
[![GitHub stars](https://img.shields.io/github/stars/ardalanamini/verifications.svg)](https://github.com/ardalanamini/verifications/stargazers)
[![license](https://img.shields.io/github/license/ardalanamini/verifications.svg)](https://github.com/ardalanamini/verifications/blob/master/LICENSE)

[TOC]

## Installation

`npm i -s verifications`

## Usage

### require / import

```javascript
// Node.js :
const Verifications = require('verifications');
// ES6 :
import Verifications from 'verifications';
// Typescript :
import * as Verifications from 'verifications';
```

### Available Methods

- NationalID
  - verify(code: string, locale?: string): boolean
- CreditCard
  - verify(code: string): boolean
  - type(code: string): string | undefined
  - issuer(code: string): { name: string, alias: string, website: string } | undefined
  - identify(code: string): { type: Type, issuer: Issuer } | undefined
- Phone
  - identify(number: string): identity: { [key: string]: any } | undefined
  - country(number: string): { name: string, alias: string } | undefined
  - fancy(number: string): string
  - normalize(number: string): string

#### NationalID

##### Verify

```javascript
Verifications
	.NationalID
	.verify('xxx-xxxxxx-x');
// returns true if the code matches any supported format
```

you can also enforce the locale

```javascript
Verifications
	.NationalID
	.verify('xxx-xx-xxxx', 'US');
```

**Supported Locales:**

- Iran (IR) - کد ملی
- United States (US) - Social Security Number (SSN)
- United Kingdom (UK) - National Insurance Number (NINO)

#### CreditCard


##### Verify

```javascript
Verifications
	.CreditCard
	.verify('xxxx-xxxx-xxxx-xxxx');
// returns true if the code matches any supported format
```

##### Identify

```javascript
Verifications
	.CreditCard
	.identify('xxxx-xxxx-xxxx-xxxx');
// returns identity of the card/issuer
```

##### Type

```javascript
Verifications
	.CreditCard
	.type('xxxx-xxxx-xxxx-xxxx');
// returns type of the card
```

##### Issuer

```javascript
Verifications
	.CreditCard
	.issuer('xxxx-xxxx-xxxx-xxxx');
// returns issuer of the card
```

**Luhn verification algorithm (almost all credit cards around the globe)**

- 9 card/issuer types
- 46 active issuers are supported

#### Phone

##### Identify

```javascript
Verifications
	.Phone
	.identify('+xx (xxx) xxx xxxx');
// returns the identity of the number or undefined
```

##### Country

```javascript
Verifications
	.Phone
	.country('+xx (xxx) xxx xxxx');
// returns the country of the number or undefined
```

##### Fancy

```javascript
Verifications
	.Phone
	.fancy('00xx xx x xxx x x xx');
// returns the beautified format if supported or the given number
```

##### Normalize

```javascript
Verifications
	.Phone
	.normalize('+xx (xxx) xxx xxxx');
// returns numbers only -> xxxxxxxxxxxx
```
