import { $ } from '@wdio/globals';
import { numberedSteps } from '../../helpers/customSteps';
import { assertObject } from '../../helpers/customAssertion';

class DashboardScreen  {

    // Header Logo
    get headerLogo() { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View'); }
    get textWelcome() { return $(`//android.view.View[contains(@content-desc,"Welcome Back")]`); }
    
    // Tab Savings and Loan
    get tabButtonIndividualSavings() { return $('//android.view.View[@content-desc="Individual Savings"]'); }
    get tabButtonLoanBalance() { return $('//android.view.View[@content-desc="Loan Balance"]'); }

    get totalIndividualSavings() { return $(`//android.view.View[contains(@content-desc,"Total Individual Savings")]`); }
    get totalLoanBalance() { return $(`//android.view.View[contains(@content-desc,"Total Loan Balance")]`); }

    get totalLoanBalance() { return $(`//android.view.View[contains(@content-desc,"Total Loan Balance")]`); }

    get iconShowHideIndividualSavings() { return $(`//android.view.View[contains(@content-desc,"Total Individual Savings")]/android.widget.Button`); }
    get iconShowHideLoanBalance() { return $(`//android.view.View[contains(@content-desc,"Total Loan Balance")]/android.widget.Button`); }
    // get iconHide() { return $(`//android.view.View[contains(@content-desc,"Total Individual Savings")]/android.widget.Button`); }
    // get iconShow() { return $(`//android.view.View[@content-desc="PHP\n*****\nTotal Individual Savings"]/android.widget.Button`); }
    get iconHide() { return $(`//android.view.View[@content-desc="PHP\n90,500.50\nTotal Individual Savings"]/android.widget.Button`); }
 
    // Menu Elements/Buttons
    get buttonMenuAccounts() { return $('//android.widget.ImageView[@content-desc="Accounts"]'); }
    get buttonMenuLoans() { return $('//android.widget.ImageView[@content-desc="Loans"]'); }
    get buttonMenuRemittance() { return $('//android.widget.ImageView[@content-desc="Remittance"]'); }
    get buttonMenuTransfer() { return $('//android.widget.ImageView[@content-desc="Transfer"]'); }
    get buttonMenuQRCode() { return $('//android.widget.ImageView[@content-desc="QR Code"]'); }
    get buttonMenuPayments() { return $('//android.widget.ImageView[@content-desc="Payments"]'); }
    get buttonMenuELoad() { return $('//android.widget.ImageView[@content-desc="E-Load"]'); }
    get buttonMenuSettings() { return $('//android.widget.ImageView[@content-desc="Settings"]'); }
    get buttonMenuAbout() { return $('//android.widget.ImageView[@content-desc="About"]'); }

    // Button Nav Elements/Buttons
    get textPDIC() { return $('//android.view.View[@content-desc="Deposits are insured by PDIC up to P1,000,000 per depositor."]'); }
    get buttonNavPayments() { return $(`//android.widget.Button[contains(@content-desc,"Payments")]`); }
    get buttonNavDashboard() { return $(`//android.widget.Button[contains(@content-desc,"Dashboard")]`); }
    get buttonNavLogout() { return $(`//android.widget.Button[contains(@content-desc,"Logout")]`); }
   
    async clickTabButton(button, type) {
        const tab = {
            'Loan Balance': this.tabButtonLoanBalance,
            'Individual Savings': this.tabButtonIndividualSavings,
            'Show/Hide Savings': this.iconShowHideIndividualSavings,
            'Show/Hide Loan ': this.iconShowHideLoanBalance,
        };
        
        const element = tab[button];
        if (!element) {
            throw new Error(`clickTabButton: unknown tab "${button}". Valid options: ${Object.keys(tab).join(', ')}`);
        }

        await numberedSteps.start(`Tap the ${button} ${type}.`, async () => {
            await element.waitForDisplayed();
            await element.click();
        })
    }
}

export default DashboardScreen