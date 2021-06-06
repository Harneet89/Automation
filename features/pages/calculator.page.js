/*
Create and export a module with class "LoginPage".
This class behaves as a Child class, which contains the selectors of Login page UI elements required for the test automation scenarios.
This module can be imported and called from Step Definitions to access the UI elements.
*/

const BasePage = require('./base.page')

class CalculatorPage extends BasePage {

    get yourIncome() { return $('//label[text()="Your income (before tax)"]/..//input') }
    get otherIncome() { return $('//label[text()="Your other income"]/..//input') }
    get livingExpenses() { return $('//label[text()="Living expenses"]/..//input') }
    get currentHomeLoanRepayments() { return $('//label[text()="Current home loan repayments"]/..//input') }
    get otherLoanRepayments() { return $('//label[text()="Other loan repayments"]/..//input') }
    get otherCommitments() { return $('//label[text()="Other commitments"]/..//input') }
    get creditCardLimit() { return $('//label[text()="Total credit card limits"]/..//input') }
    get howMuchToBorrow() { return $('//button[@id="btnBorrowCalculator"]') }

    open() {
        super.open('https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/')
    }

    enterText() {
        
        yourIncome.setValue("80000");
        otherIncome.serValue("10000");
        livingExpenses.setValue("500");
        currentHomeLoanRepayments.setValue("0");
        otherLoanRepayments.setValue("100");
        otherCommitments.setValue("0");
        creditCardLimit.setValue("10000");
    }

    submitDetails() {
        const submit = $('.btnBorrowCalculater=Work out how much I could borrow');
        submit.click();
    }

    startOver() {
        const startOvr = $('//button[@class="start-over"]');
        submit.startOvr();
    }
}

export default new CalculatorPage();