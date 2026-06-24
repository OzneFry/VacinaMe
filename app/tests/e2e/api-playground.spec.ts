import { expect, test, type Page } from '@playwright/test';
import path from 'node:path';

const screenshotsDir = path.resolve(__dirname, 'screenshots');

async function saveScreenshot(page: Page, name: string) {
  await page.screenshot({ path: path.join(screenshotsDir, `${name}.png`), fullPage: true });
}

test.beforeEach(async ({ page }) => {
  await page.route('**/vaccines', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { id: 1, nome: 'Pfizer', local: 'UBS Central', data: '2025-07-01' },
        { id: 2, nome: 'Coronavac', local: 'Posto Saúde Norte', data: '2025-07-03' },
      ]),
    });
  });

  await page.goto('/');
});

test('renderiza a tela principal da aplicação', async ({ page }) => {
  await expect(page.getByText('API Playground')).toBeVisible();
  await expect(page.getByText('Esta tela consome uma API local com fetch, useState e useEffect.')).toBeVisible();
  await saveScreenshot(page, 'home-render');
});

test('carrega dados de vacinas e exibe a lista', async ({ page }) => {
  await expect(page.getByText('Carregando vacinas...')).toBeVisible({ timeout: 10000 });
  await expect(page.getByText('Pfizer')).toBeVisible({ timeout: 20000 });
  await expect(page.getByText('Coronavac')).toBeVisible();
  await saveScreenshot(page, 'vaccines-list');
});

test('exibe os detalhes das vacinas após o carregamento', async ({ page }) => {
  await expect(page.getByText('Pfizer')).toBeVisible({ timeout: 20000 });
  await expect(page.getByText('Local: UBS Central')).toBeVisible();
  await expect(page.getByText('Data: 2025-07-01')).toBeVisible();
});

test('mostra estado de loading durante o carregamento inicial', async ({ page }) => {
  await expect(page.getByText('Carregando vacinas...')).toBeVisible();
  await expect(page.getByText('Carregando vacinas...')).toHaveText('Carregando vacinas...');
});

test('renderiza a lista com mais de uma vacina', async ({ page }) => {
  await expect(page.getByText('Pfizer')).toBeVisible({ timeout: 20000 });
  await expect(page.getByText('Coronavac')).toBeVisible();
  await expect(page.getByText('Local: UBS Central')).toBeVisible();
});

test('valida dados exibidos na interface', async ({ page }) => {
  await expect(page.getByText('Pfizer')).toBeVisible({ timeout: 20000 });
  await expect(page.getByText('UBS Central')).toBeVisible();
  await expect(page.getByText('2025-07-01')).toBeVisible();
});

test('re-renderiza a interface após a resposta da API', async ({ page }) => {
  await expect(page.getByText('Pfizer')).toBeVisible({ timeout: 20000 });
  await expect(page.getByText('Carregando vacinas...')).toHaveCount(0);
  await expect(page.getByText('Pfizer')).toBeVisible();
});

test('exibe fallback para cenário sem dados', async ({ page }) => {
  await page.unroute('**/vaccines');
  await page.route('**/vaccines', async (route) => {
    await route.fulfill({ status: 200, contentType: 'application/json', body: '[]' });
  });
  await page.reload();
  await expect(page.getByText('Nenhuma vacina disponível no momento.')).toBeVisible();
  await saveScreenshot(page, 'empty-state');
});

test('exibe estado de erro quando a API mock falha', async ({ page }) => {
  await page.unroute('**/vaccines');
  await page.route('**/vaccines', async (route) => {
    await route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ error: 'fail' }) });
  });
  await page.reload();
  await expect(page.getByText('Não foi possível carregar os dados da API.')).toBeVisible();
  await saveScreenshot(page, 'error-state');
});

test('preserva a estrutura básica da tela após o carregamento', async ({ page }) => {
  await expect(page.getByText('API Playground')).toBeVisible();
  await expect(page.getByText('Esta tela consome uma API local com fetch, useState e useEffect.')).toBeVisible();
  await expect(page.getByText('Pfizer')).toBeVisible({ timeout: 20000 });
});
