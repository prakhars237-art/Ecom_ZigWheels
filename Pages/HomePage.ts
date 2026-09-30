import { Page , expect} from '@playwright/test';
import { BasePage } from './BasePage';
import alllocators from "../locator/locators.json";

export class HomePage extends BasePage {
    
  private locators = alllocators.HomePage;


    constructor(page: Page) {
    super(page);
    
}       


//private newCarsMenu = () =>
  //  this.page.locator("//span[normalize-space()='NEW CARS']").first();

  // private latestCarLaunchesMenu = () =>
  //  this.page.locator("//a[@data-track-label='nav-car-launches']").first();


async navigateTo() {
    await super.navigateTo('/');
}
async verifyLogo() {
    await expect(
        this.page.locator('[data-track-label="zw-header-logo"]')
    ).toBeVisible();
}
async verifyNewCarsMenu() {
    await expect(
        this.page.locator(this.locators.newCarsMenu)
    ).toBeVisible();
}
 async hoverCarMenu() {
await this.hover(this.locators.newCarsMenu);

 }

 async verifyNewCarsSubMenu() {
    await expect(
        this.page.locator(this.locators.findNewCars)
    ).toBeVisible();

}

async verifyNewCarsSubMenuNotVisible() {
    await expect(
        this.page.locator(this.locators.findNewCars)
    ).not.toBeVisible();
}

async clickSearchNewCars() {
    await this.click(this.locators.findNewCars);
}


async clickOnZigwheelsLog() {

    await this.page.getByRole('link', { name: 'Zigwheels' }).click();
}


async findLatestCars() {
  await this.hover(this.locators.newCarsMenu);

  console.log("newCarsMenu:", this.locators.newCarsMenu);
  console.log("findNewCars:", this.locators.findNewCars);

  await this.click(this.locators.findNewCars);
  await this.page.waitForURL(/.*newcars.*/);
}
async searchCar(carName: string) {
    await this.type(alllocators.Search.SearchBox, carName);
    await this.click(alllocators.Search.SearchBox);
}
async selectSearchSuggestion(carName: string) {
    await this.page
        .getByText(carName, { exact: true })
        .first()
        .click();
        
}
async verifySuggestionNotVisible(carName: string) {
    await expect(
        this.page.getByText(carName, { exact: true }).first()
    ).not.toBeVisible();
}
async clearSearch() {
    await this.click(alllocators.Search.ClearSearch);
    
}
async verifySearchBoxEmpty() {
    await expect(
        this.page.locator(alllocators.Search.SearchBox)
    ).toHaveValue('');
}
async verifySearchSuggestion(carName: string) {
    await expect(
        this.page.getByText(carName, { exact: true }).first()
    ).toBeVisible();
}

async verifyAllBudgetBoxes() {

    const budgetBoxes = this.page.locator(
        alllocators.NewCarsPage.carBudgetBoxes
    );

    const count = await budgetBoxes.count();

    for (let i = 0; i < count; i++) {
        await expect(budgetBoxes.nth(i)).toBeVisible();
    }
}
async clickBudgetBox(index: number) {

    const budgetBoxes = this.page.locator(
        alllocators.NewCarsPage.carBudgetBoxes
    );

    console.log("Current URL:", await this.page.url());
    console.log("Budget boxes count:", await budgetBoxes.count());
    
console.log(await budgetBoxes.allTextContents());
    await budgetBoxes.nth(index).click();

}
async verifyPopularCarsSection() {
  const popularCars =
    this.page.locator(
      alllocators.NewCarsPage.NewCarInIndia_PopularCars
    );

  const count = await popularCars.count();

  expect(count).toBe(5);
    for (let i = 0; i < count; i++) {
    await expect(popularCars.nth(i)).toBeVisible();
  }
}

}