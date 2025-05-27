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

	// 1c Namnförslag - utgå från user story om det finns
	// Sprint review och retrospective
	// Kontrollera att rubrikerna sprint review och retrospective kan visas
	// Som en användare vill jag kunna läsa om sprint review och retrospective
	test('Kontrollera att rubrikerna sprint review och retrospective kan visas', async ({ page }) => {
		/*
		1 Klicka på knappen med texten "Sista"
		2 Klicka på knappen "Sprint review"
		3 Kontrollera att en rubrik med texten "Sprint review" är synlig på webbsidan.
		4 Klicka på knappen "Dags för retrospective"
		5 Klicka på knappen "Sprint retrospective"
		6 Kontrollera att rubriken "Sprint retrospective" visas.
		*/
		// 1-3
		await page.getByRole('button', { name: 'Sista' }).click()
		await page.getByRole('button', { name: 'Sprint review' }).click()
		const reviewHeading = page.getByRole('heading', { name: 'Sprint review' })
		await expect(reviewHeading).toBeVisible()

		// 4-6
		await page.getByRole('button', { name: 'Dags för retrospective' }).click()
		await page.getByRole('button', { name: 'Sprint retrospective' }).click()
		const retroHeading = page.getByRole('heading', { name: 'Sprint retrospective' })
		await expect(retroHeading).toBeVisible()
	})
})
