import { test, expect } from '@playwright/test';

test.describe('Agile helper', () => {

	test.beforeEach(async ({ page }) => {
		await page.goto('https://lejonmanen.github.io/agile-helper/')
	})

	test('titeln "Agile helper" visas', async ({ page }) => {
		await expect(page).toHaveTitle('Agile helper')
	})
})
