import { test, expect } from '@playwright/test';

test('a página carrega com título e botão', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Minhas tarefas' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Adicionar' })).toBeVisible();
});

test('adicionar e concluir uma tarefa', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Nova tarefa').fill('Estudar CI');
  await page.getByRole('button', { name: 'Adicionar' }).click();
  const item = page.getByText('Estudar CI');
  await expect(item).toBeVisible();
  await item.click();
  await expect(item).toHaveClass(/done/);
});

test('visual: a página inicial não mudou', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('home.png');
});
