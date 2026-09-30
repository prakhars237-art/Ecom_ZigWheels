//import { test, expect } from '@playwright/test';
//import { HomePage } from '../Pages/HomePage';
//import { NewCarsPage } from '../Pages/NewCarsPage';

import { test, expect } from '../utils/test-base';
//import { readCSVData } from '../utils/readCSV';

import searchData from '../test-data/test-data/searchCars.json';


test.describe('Find Latest Cars', () => {

    //let homePage: HomePage;
    //let newCarsPage: NewCarsPage;


    test.beforeEach(async ({ pages }) => {

        //homePage = new HomePage(page);
        //newCarsPage = new NewCarsPage(page);

        await pages.homePage.navigateTo();

    });


    //const testData = readCSVData('test-data/cars.csv');


    test('Parametrized Find Latest Cars', async ({ pages }) => {

        await pages.homePage.findLatestCars();

        await expect(pages.page).toHaveURL(/.*newcars.*/);

        const headingText = await pages.newCarsPage.getHeadingText();

        console.log(headingText);

        expect(headingText).toContain('New Cars');

        await pages.newCarsPage.gotoHyundaiCars();

        await expect(pages.page).toHaveURL(/.*hyundai-cars.*/);

    });


    test('Verify Logo', async ({ pages }) => {

        await pages.homePage.verifyLogo();

    });


    test('Verify New Cars Menu', async ({ pages }) => {

        await pages.homePage.verifyNewCarsMenu();

    });


    test('Verify New Cars Sub Menu', async ({ pages }) => {

        await pages.homePage.hoverCarMenu();

        await pages.homePage.verifyNewCarsSubMenu();

        await pages.homePage.clickSearchNewCars();

        await expect(pages.page).toHaveURL(/.*newcars.*/);

    });


    // Negative test case
    test('Verify New Cars Sub Menu Not Visible', async ({ pages }) => {

        await pages.homePage.verifyNewCarsSubMenuNotVisible();

    });


    // SEARCH-001
    test('SEARCH-001 Verify valid car search', async ({ pages }) => {

        const car = searchData.validCars[1];

        await pages.homePage.searchCar(car.name);

        await pages.homePage.selectSearchSuggestion(car.name);

        await expect(pages.page).toHaveURL(
            new RegExp(car.url)
        );  
//SEARCH-002

    });
test('SEARCH-002 Verify invalid car search', async ({ pages }) => {

    const carName = searchData.invalidCars[0];

    await pages.homePage.searchCar(carName);

    await pages.homePage.verifySuggestionNotVisible(carName);

});
test('SEARCH-003 Verify clear search functionality', async ({ pages }) => {

    await pages.homePage.searchCar('Hyundai Creta');

    await pages.homePage.clearSearch();

    await pages.homePage.verifySearchBoxEmpty();

});
test('SEARCH-004 Verify valid search suggestion', async ({ pages }) => {

    const car = searchData.validCars[0];

    await pages.homePage.searchCar(car.name);

    await pages.homePage.verifySearchSuggestion(car.name);

});
test('SEARCH-005 Verify valid car search for multiple cars', async ({ pages }) => {

    for (const car of searchData.validCars) {

        await pages.homePage.navigateTo();

        await pages.homePage.searchCar(car.name);

        await pages.homePage.selectSearchSuggestion(car.name);

        await expect(pages.page).toHaveURL(
            new RegExp(car.url)
        );

    }

});

test('BUDGET-001 Verify all Cars by Budget boxes', async ({ pages }) => {

    await pages.homePage.verifyAllBudgetBoxes();

});
test('BUDGET-002 Verify all budget boxes navigation', async ({ pages }) => {

    for (let i = 0; i < searchData.budgetCars.length; i++) {

        await pages.homePage.navigateTo();

        await pages.homePage.clickBudgetBox(i);

        await expect(pages.page).toHaveURL(
            new RegExp(searchData.budgetCars[i].url)
        );
    }

});
test('NEWCAR-001 Verify 5 Popular Cars Are displayed', async ({ pages }) => {
  await pages.homePage.verifyPopularCarsSection();
});

});

