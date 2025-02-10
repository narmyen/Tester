import { Page } from "@playwright/test"
import { removeUrl } from "../utils"

export class LoginPage {

  baseUrl = 'https://www.saucedemo.com'
  locatorUsername = "#user-name"
  locatorPassword = "#password"
  locatorButtonLogin = "#login-button"

  locatorErrorMessage = "[data-test='error']"

  /**
   * 
   * @param {Page} page 
   */

  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(this.baseUrl);
  }

  async fillUserPassword(username, password) {
    await this.page.locator(this.locatorUsername).fill(username)
    await this.page.locator(this.locatorPassword).fill(password)
  }

  async clickLogin() {
    // await this.page.locator(this.locatorButtonLogin).nth(3).click();
    await this.page.click(this.locatorButtonLogin);
  }

  async getUsername() {
    return await this.page.locator(this.locatorUsername).inputValue()
  }
  async getPassword() {
    return await this.page.locator(this.locatorPassword).inputValue()
  }

  async getErrorMessage() {
    try {
      return await this.page.locator(this.locatorErrorMessage).textContent({ timeout: 1000 })
    } catch (e) { }

    return ""
  }

  isValidUrl() {

    const url = removeUrl(this.page.url())
    // console.log(url === this.baseUrl);
    // console.log(url, this.baseUrl, this.page.url());
    return url === this.baseUrl;
  }
}