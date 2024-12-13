import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //Navagate to Webpage
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  //Navagate to Username 
  await page.getByLabel('Username').click();
  //Enter Username
  await page.getByLabel('Username').fill('admin');
  //Navagate to Password
  await page.getByLabel('Password').click();
  //Enter Password
  await page.getByLabel('Password').fill('password123');
  //Sign In
  await page.getByRole('button', { name: 'Sign in' }).click();
  // Confirming Web Application
  await page.getByRole('button', { name: 'Web Application Main web' }).click();
  // Verfying Implement user authentication in To-do section
  await page.getByRole('heading', { name: 'Implement user authentication' }).click();
  //Verfying Feature button
  await page.getByText('Feature').first().click();
  // Verfying High Priority
  await page.getByText('High Priority').first().click();
});