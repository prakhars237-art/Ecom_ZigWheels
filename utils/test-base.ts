import { test as base, expect } from '@playwright/test';
import { PageFixture } from '../Fixtures/PageFixture';

type TestFixtures = {
  pages: PageFixture;
};

export const test = base.extend<TestFixtures>({
  pages: async ({ page }, use) => {
    const pages = new PageFixture(page);
    await use(pages);
  },
});

export { expect };