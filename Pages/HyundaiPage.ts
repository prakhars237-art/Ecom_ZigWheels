import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import alllocators from "../locator/locators.json";

export class HyundaiPage extends BasePage {
    
  private locators = alllocators.HomePage;
    constructor(page: Page) {
    super(page);

    }}