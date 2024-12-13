import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //Naviagte to Webpage
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  //Naviagte to Username
  await page.getByLabel('Username').click();
  //Enter Username
  await page.getByLabel('Username').fill('admin');
  //Naviagte to Password
  await page.getByLabel('Password').click();
  //Enter Password
  await page.getByLabel('Password').fill('password123');
  //Sign in
  await page.getByRole('button', { name: 'Sign in' }).click();
  //Navigate to Web application
  await page.getByRole('button', { name: 'Web Application Main web' }).click();
  //Verfying Design system updates is in In Progress tab
  await page.getByRole('heading', { name: 'Design system updates' }).click();
  // Confriming Design tag
  await page.getByText('Design', { exact: true }).click();
});