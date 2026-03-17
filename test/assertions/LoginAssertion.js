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

}

export default LoginAssertion;