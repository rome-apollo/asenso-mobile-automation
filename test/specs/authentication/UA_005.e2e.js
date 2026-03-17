
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
       UA_005: `UA_005: the 'Open an Account' button when entered number is not registered yet should function correctly and redirected to login screen.`,
    }

    it(testScenario.UA_005, async () => {

        addMetadata(metadata.UA_005);
        addBehaviors(behaviorsData.epic, behaviorsData.features, behaviorsData.story);
        addLoggerCLI(metadata.UA_005.testID, testCase.title.userAuthentication, testScenario.UA_005, metadata.UA_005.description);

        let loginScreen = new LoginScreen();
        let assertion = new LoginAssertion();
        let activity = new Activity();

        try {
            await numberedSteps.start("Launch the Asenso V3 application.", async () => {
                await activity.launchApp();
            })

            await numberedSteps.start("In the initial screen, tap the Login button.", async () => {
                await loginScreen.clickButton('Login');
                await loginScreen.inputFieldLogin('Mobile Number', '09123456789');

                await numberedSteps.start("Tap the Submit button.", async () => {
                    await loginScreen.clickButton('Submit');
                });
            });

            await numberedSteps.start("Tap the label Open Account.", async () => {
                await loginScreen.clickButton('Open Account');
            });

            await assertion.verifyOpenAccountPage();
            await activity.takeScreenshot(metadata.UA_005.testID, 'user-authentication');
            
            await numberedSteps.start("Exit the Asenso V3 application.", async () => {
                await activity.closeApp();
            });

        } catch (err) {
            await handleError(err, testCase.title.userAuthentication, metadata.UA_005.testID);
        } 
    });
});