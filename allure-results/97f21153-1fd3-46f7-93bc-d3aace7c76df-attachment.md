# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: findlatestcars.spec.ts >> Find Latest Cars >> Find Latest Cars
- Location: tests\findlatestcars.spec.ts:18:5

# Error details

```
TypeError: _pageFixture.PageFixture is not a constructor
```

# Test source

```ts
  1  | import {test as base, expect} from '@playwright/test';
  2  | import { PageFixture } from '../Fixtures/page-fixture';
  3  | 
  4  | type TestFixtures = {
  5  |   pages: PageFixture;
  6  | };
  7  | 
  8  | export const test = base.extend<TestFixtures>({
  9  |   pages: async ({ page }, use) => {
> 10 |     await use(new PageFixture(page));
     |               ^ TypeError: _pageFixture.PageFixture is not a constructor
  11 |   },
  12 | });
  13 | 
  14 | export{expect};
```