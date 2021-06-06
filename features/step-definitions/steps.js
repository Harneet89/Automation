import { Given, When, Then } from 'cucumber';
import CalculatorPage from '../pages/calculator.page';
import BasePage from '../pages/base.page';

  Given('the user is on borrowing calculator page', function () {
    CalculatorPage.open();
    console.log ("Page is Displayed");
  });

  When('the user enters the data in calculator', function () {
   CalculatorPage.enterText();
  });

  Then('the user submits the details and validates the capacity', function () {
    CalculatorPage.submitDetails();
    CalculatorPage.startOver();
  });