
import { testCase } from "../../../data/constants.data.js";
import { metadata, behaviorsData } from "../../../data/dashboard.data.js";
import { numberedSteps } from "../../../helpers/customSteps.js";
import { handleError } from "../../../helpers/errorHandler.js";
import { addMetadata, addBehaviors, addLoggerCLI} from "../../../helpers/setMetadata.js";
import Activity from "../../pages/Activity.js";
import { userFlow } from "../../../helpers/userFlow.js";
import DashboardScreen from "../../pages/DashboardScreen.js";
import DashboardAssertion from "../../assertions/DashboardAssertion.js";

describe(testCase.title.dashboard, () => {
    
    let testScenario = {
       DS_007: `DS_007: the navigation options 'Payments', 'Dashboard', and 'Logout' should be visible.`,
    }

    it(testScenario.DS_007, async () => {

        addMetadata(metadata.DS_007);
        addBehaviors(behaviorsData.epic, behaviorsData.features, behaviorsData.story);
        addLoggerCLI(metadata.DS_007.testID, testCase.title.dashboard, testScenario.DS_007, metadata.DS_007.description);

        let dashboard = new DashboardScreen();
        let assertion = new DashboardAssertion();
        let activity = new Activity();

        try {
            await numberedSteps.start("Launch the Asenso V3 application.", async () => {
                await activity.launchApp();
            })
            
            await userFlow.userLoginSkip2FA('ap0ll02k26');

            await numberedSteps.start('In the Dashboard screen, check the botton navigation bar.', async () => {
                await assertion.verifyNavigationBar();
                await activity.takeScreenshot(metadata.DS_007.testID, 'dashboard');
            });

            await numberedSteps.start("Exit the Asenso V3 application.", async () => {
                await activity.closeApp();
            });

        } catch (err) {
            await handleError(err, testCase.title.dashboard, metadata.DS_007.testID);
        } 
    });
});