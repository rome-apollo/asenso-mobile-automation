
import { testCase } from "../../../data/constants.data.js";
import { behaviorsData } from "../../../data/user-authentication.data.js";
import { numberedSteps } from "../../../helpers/customSteps.js";
import { handleError } from "../../../helpers/errorHandler.js";
import { addMetadata, addBehaviors, addLoggerCLI } from "../../../helpers/setMetadata.js";
import { metadata } from "../../../data/user-authentication.data.js";
import LoginScreen from "../../pages/LoginScreen.js";
import LoginAssertion from "../../assertions/LoginAssertion.js";
import Activity from "../../pages/Activity.js";

describe(testCase.title.userAuthentication, () => {
    
    let testScenario = {
       UA_002: 'UA_002: should not allow the user to login when otp is entered.',
    }

    it(testScenario.UA_002, async () => {

        addMetadata(metadata.UA_002);
        addBehaviors(behaviorsData.epic, behaviorsData.features, behaviorsData.story);
        addLoggerCLI(metadata.UA_002.testID, testCase.title.userAuthentication, testScenario.UA_002, metadata.UA_002.description);

        let loginScreen = new LoginScreen();
        let assertion = new LoginAssertion();
        let activity = new Activity();

        try {
            await numberedSteps.start("Launch the Asenso V3 application.", async () => {
                await activity.launchApp();
            })

            await numberedSteps.start("In the initial screen, tap the Login button.", async () => {
                await loginScreen.clickButton('Login');
                await loginScreen.inputFieldLogin('Mobile Number', '09171234567');

                await numberedSteps.start("Tap the Submit button.", async () => {
                    await loginScreen.clickButton('Submit');
                });
            });

            await numberedSteps.start("2FA Authentication, OTP (Incorrect)", async () => {
                await loginScreen.inputFieldLogin('OTP', '111111');
            });

            await numberedSteps.start("Tap the Verify Code button.", async () => {
                await loginScreen.clickButton('Verify Code');
            });

            await assertion.verifyUserIncorrectOTP();
            await activity.takeScreenshot(metadata.UA_002.testID, 'user-authentication');
            
            await numberedSteps.start("Exit the Asenso V3 application.", async () => {
                await activity.closeApp();
            });

        } catch (err) {
            await handleError(err, testCase.title.userAuthentication, metadata.UA_002.testID);
        } 
    });
});