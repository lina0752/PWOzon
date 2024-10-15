import { test, expect, type Page } from '@playwright/test';
import { assert } from 'console';

test.describe('Register Organization', ()=> {
    test('Check', async ({ page })=> {
        await page.goto('/#/register');

        await page.locator('form.register_form input[name="companyName"]').click()
        await page.locator('form.register_form input[name="companyName"]').fill('My Awesome Organization Name')
        await page.locator('form.register_form input[name="addressline1"]').fill('My Awesome Mailing Address')

        await page.locator('form.register_form input[name="countryAutocomplete"]').fill('Kyrgyzstan')
        await page.locator('form input[name="state"]').fill('Chuy')

        await page.locator('form.register_form input[name="countryAutocomplete"]').click()

        await page.locator('form input[name="code"]').fill('720000')
        await page.locator('form input[name="firstname"]').fill('Bellatrix')
        await page.locator('form input[name="lastname"]').fill('Black')
        await page.locator('form input[name="phone"]').fill('996888111222')
        await page.locator('form input[name="website"]').fill('https://playwright.dev')
        await page.locator('form input[name="email"]').fill('bellatrix.black@tester.com')
        await page.locator('form input[name="confirmEmail"]').fill('bellatrix.black@tester.com')
        await page.locator('form input[name="password"]').fill('12qw!@QW')
        await page.locator('form input[name="confirmPassword"]').fill('12qw!@QW')

        await page.waitForTimeout(10000);

        await assert(true);
    })
})