import DashboardScreen from "../pages/DashboardScreen";
import { assertObject } from "../../helpers/customAssertion";

export class DashboardAssertion extends DashboardScreen {

    async verifyHeaderLogo() {
        await this.headerLogo.waitForDisplayed();
        let actual = {
            headerLogo: { 
                imageSize: await this.headerLogo.getSize(),
                isDisplayed: await this.headerLogo.waitForDisplayed()
            }
        }
        let expected = {
            headerLogo: { 
                imageSize: { width: 464, height: 166 },
                isDisplayed: true
            },
        }
        await assertObject('Chai Assertion: the Asenso header should be visible at the top of the screen.', expected, actual)
    };

    async verifyWelcomeText(firstName) {
        await this.textWelcome.waitForDisplayed();
        let actual = {
            welcomeText: { 
                buttonLabel: await this.textWelcome.getAttribute('content-desc'), 
                isDisplayed: await this.textWelcome.isDisplayed()
            },
        }
        let expected = {
            welcomeText: { 
                buttonLabel: `Welcome Back, ${firstName}!`, 
                isDisplayed: true 
            },
        }
        await assertObject('Chai Assertion: the welcome text with user first name should be displayed below the Asenso app header.', expected, actual)
    };

    async verifyMenuButtons() {
        await this.buttonMenuAccounts.waitForDisplayed();

        let actual = {
            menuButton: {
                accounts: {
                    buttonLabel: await this.buttonMenuAccounts.getAttribute('content-desc'), 
                    isDisplayed: await this.buttonMenuAccounts.isDisplayed(),
                }
            },
        }
        let expected = {
            menuButton: {
                accounts: {
                    buttonLabel: 'Accounts', 
                    isDisplayed: true,
                }
            },
        }
        await assertObject('Chai Assertion: all elements in the menu should be visible on the screen.', expected, actual)
    };
    
    async verifyIndividualSavingsTab() {
        await this.totalIndividualSavings.waitForDisplayed();
        let text = await this.totalIndividualSavings.getAttribute('content-desc');

        let actual = {
            tabIndividualSavings: {
                buttonLabel: text.replaceAll('\n',' '),
                isDisplayed: await this.totalIndividualSavings.isDisplayed(),
            }
        }

        let expected = {
            tabIndividualSavings: {
                buttonLabel: 'PHP ***** Total Individual Savings', 
                isDisplayed: true,
            }
        }
        await assertObject('Chai Assertion: individual savings tabs should be visible and function correctly', expected, actual)
    }

    async verifyLoanBalanceTab() {
        
        await this.totalLoanBalance.waitForDisplayed();
        let text = await this.totalLoanBalance.getAttribute('content-desc');

        let actual = {
            tabLoanBalance: {
                buttonLabel: text.replaceAll('\n',' '),
                isDisplayed: await this.totalLoanBalance.isDisplayed(),
            }
        }

        let expected = {
            tabLoanBalance: {
                buttonLabel: 'PHP ***** Total Loan Balance', 
                isDisplayed: true,
            }
        }
        await assertObject('Chai Assertion: loan balance tabs should be visible and function correctly', expected, actual)
    }

    // Test Script DS_005
    async verifyAmountInHiddenState(text) {

        const tab = {
            'Individual Savings': this.totalIndividualSavings,
            'Loan Balance': this.totalLoanBalance,
        };

        const element = tab[text];
        
        if (!element) throw new Error(`Text Amount: unknown element "${text}". Valid options: ${Object.keys(tab).join(', ')}`);

        let actual = {
            amountText: {
                amount: (await element.getAttribute('content-desc')).replaceAll('\n',' '), 
                isDisplayed: await element.isDisplayed(),
            }
        }

        let expected = {
            amountText: { amount: `PHP ***** Total ${text}`,  isDisplayed: true }
        }
        
        await assertObject('Chai Assertion: the Individual Savings and Loan Balance amount should be hidden by default.', expected, actual);
    }

    // Test Script DS_006
    async verifyShowAmountFunction(amount, text) {

        const tab = {
            'Individual Savings': this.totalIndividualSavings,
            'Loan Balance': this.totalLoanBalance,
        };

        const element = tab[text];
        
        if (!element) throw new Error(`Text Amount: unknown element "${text}". Valid options: ${Object.keys(tab).join(', ')}`);

        let actual = {
            displayAmount: {
                amountLabel: (await element.getAttribute('content-desc')).replaceAll('\n',' '), 
                isDisplayed: await element.isDisplayed(),
            }
        }

        let expected = {
            displayAmount: {
                amountLabel: `PHP ${amount} Total ${text}`, 
                isDisplayed: true,
            }
        }
        await assertObject('Chai Assertion: show hide should be visible and function correctly.', expected, actual);
    }

    // Assertion: DS_007
    async verifyNavigationBar(){
        const navbarOptions = {
            'Payments': this.buttonNavPayments,
            'Dashboard': this.buttonNavDashboard,
            'Logout': this.buttonNavLogout,
        };

        // const payments = navBar['Payments'];
        // const dashboard = navBar['Dashboard'];
        // const logout = navBar['Logout'];

        const { Payments: payments, Dashboard: dashboard, Logout: logout } = navbarOptions;

        let actual = {
            display: {
                payments: {
                    option:  (await payments.getAttribute('content-desc')).split(' ')[0].replace('\nTab', ''),
                    isDisplayed: await payments.isDisplayed(),
                },
                dashboard: {
                    option:  (await dashboard.getAttribute('content-desc')).split(' ')[0].replace('\nTab', ''),
                    isDisplayed: await dashboard.isDisplayed(),
                },
                logout: {
                    option:  (await logout.getAttribute('content-desc')).split(' ')[0].replace('\nTab', ''),
                    isDisplayed: await logout.isDisplayed(),
                },
            }
        }

        let expected = {
            display: {
                payments: { option: 'Payments', isDisplayed: true },
                dashboard: { option: 'Dashboard', isDisplayed: true },
                logout: { option: 'Logout', isDisplayed: true }
            }
        }
        await assertObject(`Chai Assertion: the navigation options 'Payments', 'Dashboard', and 'Logout' should be visible.`, expected, actual);
    }
}


export default DashboardAssertion



