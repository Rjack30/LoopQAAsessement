import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //Naviagate to webpage
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  // Naviagate to Username
  await page.getByLabel('Username').click();
  //Enter Username
  await page.getByLabel('Username').fill('admin');
  //Navigate to Password
  await page.getByLabel('Password').click();
  //Enter Password
  await page.getByLabel('Password').fill('password123');
  //Sign In
  await page.getByRole('button', { name: 'Sign in' }).click();
  //Navigate to Mobile Application Native
  await page.getByRole('button', { name: 'Mobile Application Native' }).click();
  //Confirming Push notification system is in To-Do section
  await page.getByRole('heading', { name: 'Push notification system' }).click();
  // Confirming Feature tag
  await page.locator('div').filter({ hasText: /^Feature$/ }).locator('span').click();
});