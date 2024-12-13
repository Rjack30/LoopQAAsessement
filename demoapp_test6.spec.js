import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //Navigate to Webpage
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  //Naviagte to Username
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
  //Confirming App icon design is in Done section
  await page.getByRole('heading', { name: 'App icon design' }).click();
  // Confirming Design tag
  await page.getByText('Design', { exact: true }).click();
});