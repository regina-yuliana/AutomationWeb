import { test, expect } from '@playwright/test';

const number = '62895365365020';
const password = '12345678';
const color = ['Coklat', 'Biru', 'Putih', 'Pink', 'kuning'];
const randomcolor = color[Math.floor(Math.random()*color.length)];

// LOG-IN:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
test('Log-in Test', async ({ page }) => {
  await page.goto('https://staging.evermosa2z.com/login');
  await page.getByPlaceholder('Nomor Telepon Anda').click();
  await page.getByPlaceholder('Nomor Telepon Anda').fill(number);

  await page.getByPlaceholder('Kata Sandi Anda').click();
  await page.getByPlaceholder('Kata Sandi Anda').fill(password);

  await page.getByRole('button', { name: 'Masuk' }).click();
  await expect.soft(page).toHaveURL('https://staging.evermosa2z.com/catalog');

  await page.goto('https://staging.evermosa2z.com/catalog');

  await page.getByRole('link', { name: 'Akun' }).click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/user');

  await page.getByRole('link', { name: 'Keluar Aplikasi' }).click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/login');
});


// CHECKOUT::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
test('FAILED-TEST', async ({ page }) => {
  await page.goto('https://staging.evermosa2z.com/login');

  await page.getByPlaceholder('Nomor Telepon Anda').click();
  await page.getByPlaceholder('Nomor Telepon Anda').fill('62895365365020');
  
  await page.getByPlaceholder('Kata Sandi Anda').click();
  await page.getByPlaceholder('Kata Sandi Anda').fill('12345678');
  
  await page.getByRole('button', { name: 'Masuk' }).click();
  await expect.soft(page).toHaveURL('https://staging.evermosa2z.com/catalog');
  
  await page.getByRole('link', { name: 'Jualan apa sekarang ?' }).click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/search');
  
  await page.getByPlaceholder('Cari Produk di Evermos…').click();
  await page.getByPlaceholder('Cari Produk di Evermos…').fill('tas');
  await page.getByPlaceholder('Cari Produk di Evermos…').press('Enter');
  await expect(page).toHaveURL('https://staging.evermosa2z.com/browse?text=tas&orderBy=0&navSource=search_result');
  
  await page.getByRole('link', {name: 'Tas Selempang'}).click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/view?modelSlug=tas-selempang&navSource=search_result');
  
  await page.locator('[class="variantOptions"]').getByText(randomcolor).click();
  
  await page.getByRole('link', { name: 'Beli Sekarang' }).click(); 
  await expect(page.locator('[class="appLayoutHeading__title"]')).toContainText('Detail Pengiriman');
  
  await page.locator('div:nth-child(3) > i > span').click({clickCount: 3});

  await page.locator('a:has-text("Lanjutkan")').click(); //tokonya tutup

  await page.getByRole('button', { name: 'Lihat Keranjang' }).click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/order');
  
  await page.getByRole('link', { name: 'Lanjut ke Checkout' }).click();
  await expect(page.locator('[class="appLayoutHeading__title"]')).toContainText('Checkout');
  
  await page.getByRole('link', { name: 'Proses Sekarang' }).click();
  
  await page.getByRole('button', { name: 'Bayar' }).click();
  await expect(page).toHaveURL('https://staging.everbayar.com/58c054b5-bdce-4d2e-b200-32ee8967f5f3?id=b70c1d0e-14f1-4e80-b116-1262b7f4282b&checkout_id=908b1bb7-f3d1-4c31-9067-2e3a3c9e4089&redirect_url=');
  
  await page.goto('https://staging.everbayar.com/58c054b5-bdce-4d2e-b200-32ee8967f5f3?id=b70c1d0e-14f1-4e80-b116-1262b7f4282b&checkout_id=908b1bb7-f3d1-4c31-9067-2e3a3c9e4089&redirect_url=');
  
  await page.locator('a:has-text("Danamon OnlineInternet Banking & m-Banking")').click();
  await expect(page).toHaveURL('https://app.sandbox.midtrans.com/snap/v3/redirection/74a0c878-e726-48e9-8a21-45bb519d4ded#/danamon-online');
  
  await page.getByRole('button', { name: 'Pay now' }).click();
  await expect(page).toHaveURL('https://simulator.sandbox.midtrans.com/danamon/online/bdiecommerce');
  
  await page.getByRole('button', { name: 'Pay' }).click();
  await expect(page).toHaveURL('https://simulator.sandbox.midtrans.com/danamon/online/payment');
  
  await page.getByRole('button', { name: 'Back to merchant website' }).click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/order/complete?merchant_id=G245139253&order_id=8260-1668657766&status_code=200&transaction_status=settlement');
  
  await page.getByRole('link', { name: 'Lihat Daftar Pesanan' }).click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/transaction/evermos?tab=paid');
});

// SEARCH PRODUCTS FEATURE::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
test('PRODUCT SEARCH', async ({ page }) => {
  await page.goto('https://staging.evermosa2z.com/login');
  
  await page.getByPlaceholder('Nomor Telepon Anda').click();
  await page.getByPlaceholder('Nomor Telepon Anda').fill('62895365365020');
  
  await page.getByPlaceholder('Kata Sandi Anda').click();
  await page.getByPlaceholder('Kata Sandi Anda').fill('12345678');
  
  await page.getByRole('button', { name: 'Masuk' }).click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/catalog');
  
  await page.getByRole('link', { name: 'Jualan apa sekarang ?' }).click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/search');
  
  await page.getByPlaceholder('Cari Produk di Evermos…').click();
  await page.getByPlaceholder('Cari Produk di Evermos…').fill('tunik');
  await page.getByPlaceholder('Cari Produk di Evermos…').press('Enter');
  await expect(page).toHaveURL('https://staging.evermosa2z.com/browse?text=tunik&orderBy=0&navSource=search_result');
  
  await page.getByText('Mutif Tunik Tunik Anak LMG 123').click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/view?modelSlug=mutif-tunik-tunik-anak-lmg-123&navSource=search_result');

  await page.locator('.appHead__button').first().click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/browse?text=tunik&orderBy=0&navSource=search_result'); 

  await page.getByPlaceholder('Cari Produk di Evermos…').click();
  await page.getByPlaceholder('Cari Produk di Evermos…').fill('sepatu');
  await page.getByPlaceholder('Cari Produk di Evermos…').press('Enter');
  await expect(page).toHaveURL('https://staging.evermosa2z.com/browse?text=sepatu&orderBy=0&navSource=search_result');
  
  await page.getByPlaceholder('Cari Produk di Evermos…').click();
  await page.getByPlaceholder('Cari Produk di Evermos…').fill('bunga telang');
  await page.getByPlaceholder('Cari Produk di Evermos…').press('Enter');
  await expect(page).toHaveURL('https://staging.evermosa2z.com/browse?text=bunga%20telang&orderBy=0&navSource=search_result');
  
  await page.locator('.appLayoutHeading__button').first().click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/browse?text=sepatu&orderBy=0&navSource=search_result');
  
  await page.locator('.appLayoutHeading__button').first().click();
  await expect(page).toHaveURL('https://staging.evermosa2z.com/browse?text=tunik&orderBy=0&navSource=search_result');
  
  await page.locator()
});