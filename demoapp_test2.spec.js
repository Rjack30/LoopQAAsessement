import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //Navagate to Webpage
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  //Navagate to username
  await page.getByLabel('Username').click();
  //Enter username
  await page.getByLabel('Username').fill('admin');
  //Navagate to Password
  await page.getByLabel('Password').click();
  //Enter Password
  await page.getByLabel('Password').fill('password123');
  //Sign In
  await page.getByRole('button', { name: 'Sign in' }).click();
  //Navagate to Web application
  await page.getByRole('button', { name: 'Web Application Main web' }).click();
  //Verfying Fix navigation bug in To-do section
  await page.getByRole('heading', { name: 'Fix navigation bug' }).click();
  //Confriming Bug tag
  await page.getByText('Bug', { exact: true }).click();
});