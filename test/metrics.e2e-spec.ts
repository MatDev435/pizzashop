import { expect, test } from '@playwright/test'

test('month revenue amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 2.000,00', { exact: true })).toBeVisible()
  expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()
})

test('month orders amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200', { exact: true })).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({ hasText: /^200-5% em relação ao mês passado$/ })
      .getByRole('paragraph'),
  ).toBeVisible()
})

test('day orders amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('canceled month amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({ hasText: /^5-5% em relação ao mês passado$/ })
      .getByRole('paragraph'),
  ).toBeVisible()
})
