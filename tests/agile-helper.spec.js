import { test, expect } from '@playwright/test';

test.describe('Agile helper', () => {

	test.beforeEach(async ({ page }) => {
		await page.goto('https://lejonmanen.github.io/agile-helper/')
	})

	test('titeln "Agile helper" visas', async ({ page }) => {
		await expect(page).toHaveTitle('Agile helper')
	})

	/*
	1b Gör ett test för följande scenario:
	Klicka på knappen med texten "Första"
	Klicka på knappen som innehåller texten "Sprint planning"
	Kontrollera att en rubrik med texten "Sprint planning" är synlig på webbsidan.
	*/
	test('Rubriken "Sprint planning" visas när man öppnar dialogrutan', async ({ page }) => {
		// Alternativ 1
		const firstButton = page.getByRole('button', { name: 'Första' })
		await firstButton.click({ timeout: 500 })  // timeout är valfritt

		// Alternativ 2
		// await page.getByRole('button', { name: 'Första' }).click()

		// Använd /../i för ett "regex" som är case insensitive
		await page.getByRole('button', { name: 'Sprint planning' }).click({ timeout: 500 })

		const heading = page.getByRole('heading', { name: 'Sprint planning' })
		await expect(heading).toBeVisible({ timeout: 500 })
	})
})
