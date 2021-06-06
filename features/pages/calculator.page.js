/*
Create and export a module with class "LoginPage".
This class behaves as a Child class, which contains the selectors of Login page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/

import BasePage from './base.page';

class CalculatorPage extends BasePage {

    get submitButton () {return $('#btnBorrowCalculater')}
    get applicationType () {return $('//label[@for="application_type_single"]') }
    get yourIncome () {return $('//label[text()="Your income (before tax)"]/..//input') }
    get otherIncome () {return $('//label[text()="Your other income"]/..//input') }
    get livingExpenses () {return $('//label[text()="Living expenses"]/..//input') }
    get currentHomeLoanRepayments () {return $('//label[text()="Current home loan repayments"]/..//input') }
    get otherLoanRepayments () {return $('//label[text()="Other loan repayments"]/..//input') }
    get otherCommitments () {return $('//label[text()="Other commitments"]/..//input') }
    get creditCardLimit () {return $('//label[text()="Total credit card limits"]/..//input') }
    get howMuchToBorrow () {return $('//button[@id="btnBorrowCalculator"]') }

    open() {
      browser.url('https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/')
    }

    getUrl() {
        var strUrl = browser.getUrl();
        console.log("URL is :" + strUrl);
    }

    enterText (){
        this.applicationType.click();
        this.yourIncome.setValue("80000");
        this.otherIncome.serValue("10000");
        this.livingExpenses.setValue("500");
        this.currentHomeLoanRepayments.setValue("0");
        this.otherLoanRepayments.setValue("100");
        this.otherCommitments.setValue("0");
        this.creditCardLimit.setValue("10000");
    }

    submit() {
      this.submitButton.click();
    }
}

export default new CalculatorPage();