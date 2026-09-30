import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import alllocators from '../locator/locators.json';

export class NewCarsPage extends BasePage {
  private locators = alllocators.NewCarsPage;
  constructor(page: Page) {
    super(page);
  }
async getHeadingText():Promise<string> {
    return await this.getText(this.locators.newCarsHeading);
}

async gotoTataCars() {
    await this.click(this.locators.TataCars);
}

async gotoHyundaiCars() {
    await this.click(this.locators.HyundaiCars);

}

async gotoMarutiCars() {
    await this.click(this.locators.MarutiCars); 
}

async gotoMahindraCars() {
    await this.click(this.locators.MahindraCars);       
}
}
