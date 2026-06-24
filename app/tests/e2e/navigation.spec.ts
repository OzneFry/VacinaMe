import { expect, test } from '@playwright/test';

test('redireciona o usuário não autenticado para o login', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('Acesse o sistema de vacinas')).toBeVisible();
  await expect(page.getByRole('button', { name: /entrar/i })).toBeVisible();
});

test('permite acessar as tabs principais após o login', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /entrar/i }).click();

  await expect(page.getByRole('tab', { name: /vacinas/i })).toBeVisible();
  await expect(page.getByRole('tab', { name: /fila/i })).toBeVisible();
  await expect(page.getByRole('tab', { name: /configurações/i })).toBeVisible();
});
