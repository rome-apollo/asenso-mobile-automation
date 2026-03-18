
import { testCase } from "../../../data/constants.data.js";
import { behaviorsData } from "../../../data/user-authentication.data.js";
import { numberedSteps } from "../../../helpers/customSteps.js";
import { handleError } from "../../../helpers/errorHandler.js";
import { addMetadata, addBehaviors, addLoggerCLI} from "../../../helpers/setMetadata.js";
import { metadata } from "../../../data/user-authentication.data.js";
import LoginScreen from "../../pages/LoginScreen.js";
import LoginAssertion from "../../assertions/LoginAssertion.js";
import Activity from "../../pages/Activity.js";

describe(testCase.title.userAuthentication, () => {
    
    let testScenario = {
       UA_006: 'UA_006: should successfully authenticate the user and be redirected to the dashboard or home page.',
    }

    it(testScenario.UA_006, async () => {

        addMetadata(metadata.UA_006);
        addBehaviors(behaviorsData.epic, behaviorsData.features, behaviorsData.story);
        addLoggerCLI(metadata.UA_006.testID, testCase.title.userAuthentication, testScenario.UA_006, metadata.UA_006.description);

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

            await numberedSteps.start("2FA Authentication, OTP and user Password.", async () => {
                await loginScreen.inputFieldLogin('OTP', '123456');

                await numberedSteps.start("Tap the Verify Code button.", async () => {
                    await loginScreen.clickButton('Verify Code');
                });

                await loginScreen.inputFieldLogin('Password', 'ap0ll02k26');
            });


            await numberedSteps.start("Tap the Log In button.", async () => {
                await loginScreen.clickButton('Login');
            });
            await assertion.verifyUserIfLoggedIn('Juan');

            await activity.takeScreenshot(metadata.UA_006.testID, 'user-authentication');
            
            await numberedSteps.start("Exit the Asenso V3 application.", async () => {
                await activity.closeApp();
            });

        } catch (err) {
            await handleError(err, testCase.title.userAuthentication, metadata.UA_006.testID);
        } 
    });
});