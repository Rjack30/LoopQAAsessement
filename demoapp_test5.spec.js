import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //Navigate to WebPage
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  //Naviagate to UserName
  await page.getByLabel('Username').click();
  //Enter Username
  await page.getByLabel('Username').fill('admin');
  //Naviagte to Password
  await page.getByLabel('Password').click();
  //Enter Password
  await page.getByLabel('Password').fill('password123');
  //Sign In
  await page.getByRole('button', { name: 'Sign in' }).click();
  //Naviagte to Mobile Application Native
  await page.getByRole('button', { name: 'Mobile Application Native' }).click();
  //Verfying Offline mode in In-Progress sectiuon
  await page.getByRole('heading', { name: 'Offline mode' }).click();
  // Confirm Feature tag
  await page.getByText('Feature').nth(1).click();
  // Confirm High Priority tag
  await page.getByText('High Priority').click();
});