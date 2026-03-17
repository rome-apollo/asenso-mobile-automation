import { $ } from '@wdio/globals';
import { numberedSteps } from '../../helpers/customSteps';
import { assertObject } from '../../helpers/customAssertion';

class LoginScreen {

    get buttonOpenAccount() { return $('//android.widget.Button[@content-desc="OPEN AN ACCOUNT" or @content-desc="Open an Account"]'); }
    get buttonLogin() { return $('//android.widget.Button[@content-desc="LOGIN" or @content-desc="Log in"]'); }
  
    get fieldMobileNumber() { return $('//android.widget.EditText'); }
    get fieldOTP() { return $('//android.widget.EditText'); }
    get fieldPassword() { return $('//android.widget.EditText'); }
    get showPassword() { return $('//android.widget.Button[@content-desc="Show password"]'); }

    get buttonSubmit() { return $('//android.widget.Button[@content-desc="Submit"]'); }
    get buttonVerifyCode() { return $('//android.widget.Button[@content-desc="Verify Code"]'); }
    get buttonShowPassword() { return $('//android.widget.Button[@content-desc="Show password"]'); }
    // get buttonLogin1() { return $('//android.widget.Button[@content-desc="Log in"]'); }
    get buttonChangeAccount() { return $('//android.widget.Button[@content-desc="Change"]'); }

    get textNotice() { return $('//android.view.View[@content-desc="Notice"]'); }
    get textNumberNotRegistered() { return $('//android.view.View[@content-desc="Your number has not been registered yet."]'); }
    // get buttonOpenAnAccount() { return $('//android.widget.Button[@content-desc="Open an Account"]'); }

    get textWarningInvalidOTP() { return $('//android.view.View[@content-desc="Invalid OTP"]'); }

    //android.widget.Button[@content-desc="Retry"]
    //android.view.View[@content-desc="Dismiss"]

    get buttonContinue() { return $('//android.widget.Button[@content-desc="CONTINUE"]'); }
    get buttonGoBack() { return $('//android.widget.Button[@content-desc="GO BACK"]'); }

    get textWelcome() {return $(`//android.view.View[contains(@content-desc,"Welcome Back")]`); }

    async clickButton(button) {
        const tab = {
            'Open Account': this.buttonOpenAccount,
            'Login': this.buttonLogin,
            'Submit': this.buttonSubmit,
            'Verify Code': this.buttonVerifyCode,
            'Show Password': this.buttonShowPassword,
            'Change Account': this.buttonChangeAccount,
        };
        const element = tab[button];
        if (!element) {
            throw new Error(`Invalid button "${button}". Valid options: ${Object.keys(tab).join(', ')}`);
        }
        await element.waitForDisplayed();
        await element.click();
    }

    async inputFieldLogin(field, data) {
        const fields = {
            'Mobile Number': this.fieldMobileNumber,
            'OTP': this.fieldOTP,
            'Password': this.fieldPassword,
        };
        const element = fields[field];
        if (!element) {
            throw new Error(`Invalid field "${field}". Valid options: ${Object.keys(fields).join(', ')}`);
        }
        await element.waitForDisplayed();
        await element.click();
        await numberedSteps.start(`Input the user ${field.toLowerCase()}: ${data}`, async () => {
            await element.setValue(data);
        })
    }

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


    // async clickButton(button) {
    //     if(button === 'Open Account') { 
    //         await this.buttonOpenAccount.waitForDisplayed().then( async () => {
    //             await this.buttonOpenAccount.click();
    //         });
    //     } else if(button === 'Login') { 
    //         await this.buttonLogin.waitForDisplayed().then( async () => {
    //             await this.buttonLogin.click();
    //         });
    //     } else if(button === 'Submit') { 
    //         await this.buttonSubmit.waitForDisplayed().then( async () => {
    //             await this.buttonSubmit.click();
    //         });
    //     } else if(button === 'Verify Code') { 
    //         await this.buttonVerifyCode.waitForDisplayed().then( async () => {
    //             await this.buttonVerifyCode.click();
    //         });
    //     } else if(button === 'Log In') { 
    //         await this.buttonLogin.waitForDisplayed().then( async () => {
    //             await this.buttonLogin.click();
    //         });
    //     } else if(button === 'Show Password') { 
    //         await this.buttonShowPassword.waitForDisplayed().then( async () => {
    //             await this.buttonShowPassword.click();
    //         });
    //     } else {
    //         return console.log('Invalid Selector');
    //     }
    // }

    //    async inputFieldLogin(field, data) {
    //         if(field === 'Mobile Number') { 
    //             await this.fieldMobileNumber.waitForDisplayed().then( async () => {
    //                 await this.fieldMobileNumber.click();
    //                 await numberedSteps.start(`Input the user mobile number: ${data}`, async () => {
    //                     await this.fieldMobileNumber.setValue(data);
    //                 })
    //             });
    //         } else if (field === 'OTP') { 
    //             await this.fieldMobileNumber.waitForDisplayed().then( async () => {
    //                 await this.fieldMobileNumber.click();
    //                 await numberedSteps.start(`Enter the OTP (One Time Password): ${data}`, async () => {
    //                     await this.fieldMobileNumber.setValue(data);
    //                 })
    //             });
    //         } else if (field === 'Password') { 
    //             await this.fieldPassword.waitForDisplayed().then( async () => {
    //                 await this.fieldPassword.click();
    //                 await numberedSteps.start(`Input the user password: ${data}`, async () => {
    //                     await this.fieldPassword.setValue(data);
    //                 })
    //             });
    //         } else {
    //             return console.log('Invalid Selector');
    //         }
    //     }
}

export default LoginScreen;