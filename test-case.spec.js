// run: npx playwright codegen https://www.saucedemo.com/
import { test, expect } from '@playwright/test';

const username = ['standard_user', 'problem_user', 'performance_glitch_user'];
const password = 'secret_sauce';
const randomusername = username[Math.floor(Math.random() * username.length)];

test('PositiveTest', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  
  await page.locator('[data-test="username"]').fill(randomusername);
  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
  
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('NegativeTest', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    
    await page.locator('[data-test="username"]').fill(randomusername);
    await page.locator('[data-test="password"]').click();
  
    await page.locator('[data-test="password"]').fill('anisya');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});

test('Checkout', async ({ page }) => {
var randomstring = require("randomstring");
const firstname = randomstring.generate(10);
const lastname = randomstring.generate({
    length: 10,
    charset: 'alphabetic',
});
const postalcode = randomstring.generate({
    length: 8,
    charset: 'numeric',
});

const product = [
    'add-to-cart-sauce-labs-backpack',
    'add-to-cart-sauce-labs-bike-light',
    'add-to-cart-sauce-labs-bolt-t-shirt',
    'add-to-cart-sauce-labs-fleece-jacket',
    'add-to-cart-sauce-labs-onesie',
    'add-to-cart-test.allthethings()-t-shirt-(red)'];
const buttonproduct = product[Math.floor(Math.random() * product.length)];

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();

    await page.locator('[data-test="username"]').fill(randomusername);
    await page.locator('[data-test="password"]').click();

    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    await page.locator(`[data-test=${buttonproduct}]`).click();

    await page.locator('a:has-text("1")').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill(firstname);
    
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill(lastname);

    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill(postalcode);
    
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    
    await page.locator('[data-test="back-to-products"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

