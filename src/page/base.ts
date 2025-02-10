import { LoginPage } from "./login.page"
import { test as base } from '@playwright/test'

type baseFixture = {
  loginPage: LoginPage,
}

export const test = base.extend<baseFixture>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
})
