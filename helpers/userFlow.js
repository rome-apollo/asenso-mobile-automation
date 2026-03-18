import { numberedSteps } from "./customSteps";
import LoginScreen from "../test/pages/LoginScreen";

export const userFlow = (() => {

    let loginScreen = new LoginScreen();

    const userLogin = async (mobileNumber, otp, password) => {

        if (await loginScreen.buttonChangeAccount.isDisplayed() === true) loginScreen.buttonChangeAccount.click();
        
        await numberedSteps.start("In the initial screen, tap the Login button.", async () => {
            await loginScreen.clickButton('Login');
            await loginScreen.inputFieldLogin('Mobile Number', mobileNumber);
                    
            await numberedSteps.start("Tap the Submit button.", async () => {
                await loginScreen.clickButton('Submit');
            });
        });

        await numberedSteps.start("2FA Authentication, OTP and user Password.", async () => {
            await loginScreen.inputFieldLogin('OTP', otp);

            await numberedSteps.start("Tap the Verify Code button.", async () => {
                await loginScreen.clickButton('Verify Code');
            });
            await loginScreen.inputFieldLogin('Password', password);
        });

        await numberedSteps.start("Tap the Log In button.", async () => {
            await loginScreen.clickButton('Login');
        });
    }

    const userLoginSkip2FA = async (password) => {
        await numberedSteps.start("Enter user password.", async () => {
            await loginScreen.inputFieldLogin('Password', password);
        });

        await numberedSteps.start("Tap the Log In button.", async () => {
            await loginScreen.clickButton('Login');
        });
    }

    return { userLogin, userLoginSkip2FA }
})()