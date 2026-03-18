import LoginScreen from "../pages/LoginScreen";
import { assertObject, assertMessage } from "../../helpers/customAssertion";
import { expect } from "chai";

class LoginAssertion extends LoginScreen{

    // Assertion for TS: UA_001
    async verifyUserNotRegistered() {
        await this.textNumberNotRegistered.waitForDisplayed();
        let actual = {
            noticeMessage: { 
                textDisplayed: await this.textNotice.getAttribute('content-desc') + ' ' + await this.textNumberNotRegistered.getAttribute('content-desc'),
                isDisplayed: await this.textNotice.isDisplayed() || await this.textNumberNotRegistered.isDisplayed()
            },
        }
        let expected = {
            noticeMessage: { 
                textDisplayed: 'Notice Your number has not been registered yet.', 
                isDisplayed: true 
            },
        }
        await assertObject('Chai Assertion: The system should not allow the user to login. An error message such as "[Notice] Your number has not been registered yet." should be displayed.', expected, actual)
    };

    // Assertion for TS: UA_002
    async verifyUserIncorrectOTP() {
        await this.textWarningInvalidOTP.waitForDisplayed();
        let actual = await this.textWarningInvalidOTP.getAttribute('content-desc');
        let expected = 'Invalid OTP'

        await assertMessage('Chai Assertion: The system should not allow the user to login. An error message such as "Invalid OTP" should be displayed.', expected, actual)
    };

    // Assertion for TS: UA_004
    async verifyUserRedirectedToLogin() {
        await this.buttonLogin.waitForDisplayed();

        let actual = {
            loginScreen: { 
                openAccount: {
                    button: await this.buttonOpenAccount.getAttribute('content-desc'), 
                    isDisplayed: await this.buttonOpenAccount.isDisplayed()
                }, 
                login: {
                    button: await this.buttonLogin.getAttribute('content-desc'), 
                    isDisplayed: await this.buttonLogin.isDisplayed()
                }, 
            },
        }
        let expected = {
            loginScreen: { 
                openAccount: { button: 'OPEN AN ACCOUNT', isDisplayed: true },
                login: { button: 'LOGIN', isDisplayed: true }
            },
        }
        await assertObject('Chai Assertion: the user should be redirected to the login screen.', expected, actual)
    };

    // Assertion for TS: UA_005
    async verifyOpenAccountPage() {

        try {
             await this.buttonContinue.waitForDisplayed({timeout: 3000});
        } catch (error) {
            let element = await this.buttonContinue.isDisplayed();
            let actual = { page: 'Open Account', isDisplayed: element, message: element != true ? 'The open account page still not display.' : 'The open account page displayed.' }
            let expected = { page: 'Open Account', isDisplayed: true, message:  'The open account page displayed.'}
            expect(actual).to.deep.equal(expected);
        }

        let actual = {
            openAccountScreen: { 
                continue: {
                    button: await this.buttonContinue.getAttribute('content-desc'), 
                    isDisplayed: await this.buttonContinue.isDisplayed()
                }, 
                back: {
                    button: await this.buttonGoBack.getAttribute('content-desc'), 
                    isDisplayed: await this.buttonGoBack.isDisplayed()
                }, 
            },
        }

        let expected = {
            openAccountScreen: { 
                continue: { button: 'CONTINUE', isDisplayed: true },
                back: { button: 'GO BACK', isDisplayed: true }
            },
        }
        
        await assertObject('Chai Assertion: the user should be redirected to the open account screen.', expected, actual)
    };

    // Assertion for TS: UA_006
    async verifyUserIfLoggedIn(firstName) {
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
        await assertObject('Chai Assertion: the user should be redirected to the dashboard screen.', expected, actual)
    };

}

export default LoginAssertion;