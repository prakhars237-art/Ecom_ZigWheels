import { Page } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { NewCarsPage } from '../Pages/NewCarsPage';
import { TataPage } from '../Pages/TataPage';
import { MarutiPage } from '../Pages/MarutiPage';
import { HyundaiPage } from '../Pages/HyundaiPage';
import { MahindraPage } from '../Pages/MahindraPage';

export class PageFixture {
  readonly homePage: HomePage;
  readonly newCarsPage: NewCarsPage;
  readonly tataPage: TataPage;
  readonly marutiPage: MarutiPage;
  readonly hyundaiPage: HyundaiPage;
  readonly mahindraPage: MahindraPage;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.newCarsPage = new NewCarsPage(page);
    this.tataPage = new TataPage(page);
    this.marutiPage = new MarutiPage(page);
    this.hyundaiPage = new HyundaiPage(page);
    this.mahindraPage = new MahindraPage(page);
  }
  get basePage() {
    return this.homePage;
  }
}