const assert = require('assert');

describe('SauceDemo Test', () => {
it('should open saucedemo.com and assert the URL', async () => {
// Buka URL
await browser.url('https://www.saucedemo.com').waitForDisplayed({ timeout: 100000 });

// Lakukan assertion pada URL
constcurrentURL = await browser.getUrl();
constexpectedURL = 'https://www.saucedemo.com/';

awaitassert.strictEqual(currentURL, expectedURL, `URL is not as expected. Actual: ${currentURL}, Expected: ${expectedURL}`);
    });
});