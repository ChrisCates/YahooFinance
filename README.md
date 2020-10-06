# Yahoo Finance

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![NPM](https://img.shields.io/badge/version-1.0.4-blue.svg)
[![Build Status](https://travis-ci.org/ChrisCates/YahooFinance.svg?branch=master)](https://travis-ci.org/ChrisCates/YahooFinance)
[![codecov](https://codecov.io/gh/ChrisCates/YahooFinance/branch/master/graph/badge.svg?token=SA6QDBGQGZ)](undefined)

A flexible API and Library to aggregate data on Stonks. Use it as a command line tool or an importable library. Compatible with both ES5 and ESNext. This library is completely free to use, licensed under MIT.

### Why was this library created?

Pretty much every Node.js library for Yahoo Finance is straight up out of date and does not work properly. There is a Python library... But, it's meh at best... A lot of people have blogged about it, but, I've found it somewhat underwhelming. Furthermore, introducing Python into a codebase that doesn't use Python can cause technical debt. The intention is for this library to be the best tool out there for Yahoo Finance. So feel free to critique the implementation. It's strictly typed with verbose interfaces and type definitions. It's a production quality implementation.

## Getting Started

### As a CLI tool

Install as a global module

```bash
npm install @chriscates/yahoofinance --global
# or
yarn add global @chriscates/yahoofinance
```

Confirm the module works

```bash
yf --help
```

Run commands

```bash
yf summary MSFT

...
```

**Read the full documentation at https://yf.chriscates.ca/docs/bash**

### As a library

Install as a local module

```bash
npm install @chriscates/yahoofinance
```

Import library functions

```typescript
import { GetProfile } from '@chriscates/yahoofinance';

const Profile = await GetProfile('TSLA');
console.log(Profile);
```

Also, ES5 compatible

```typescript
const yahoofinance = require('@chriscates/yahoofinance');
```

**Read the full documentation at https://yf.chriscates.ca/docs/library**

## SEC &amp; EDGAR

For those who are familiar with EDGAR and of course the Securities Exchange Commission. I would be ecstatic if you reached out to them asking them if I can improve their codebase for EDGAR. I actually need a lot of that data and making web scrapers for that project is cumbersome and is potentially very redundant given the amount of time it would take to create a full fledged scraper. Instead, creating a real API that fully annotates all SEC Form Filings from EDGAR would be a win/win/win (community/them/me). So please, reach out if you found this library useful. It would be amazing to have something directly from SEC instead of Yahoo Finance.

---

*Don't be afraid to open issues if there are any!*

