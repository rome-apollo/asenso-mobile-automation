
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
       DS_005: 'DS_005: the Individual Savings and Loan Balance amount is in hidden state by default.',
    }

    it(testScenario.DS_005, async () => {

        addMetadata(metadata.DS_005);
        addBehaviors(behaviorsData.epic, behaviorsData.features, behaviorsData.story);
        addLoggerCLI(metadata.DS_005.testID, testCase.title.dashboard, testScenario.DS_005, metadata.DS_005.description);

        let dashboard = new DashboardScreen();
        let assertion = new DashboardAssertion();
        let activity = new Activity();

        try {
            await numberedSteps.start("Launch the Asenso V3 application.", async () => {
                await activity.launchApp();
            })
            
            await userFlow.userLoginSkip2FA('ap0ll02k26');

            await numberedSteps.start('In the Dashboard screen, go to the Savings and Loan Balance tab.', async () => {
                await assertion.verifyAmountInHiddenState('Individual Savings');
                await activity.takeScreenshot(metadata.DS_005.testID, 'dashboard');
            })

            await numberedSteps.start('Go the Loan Balance tab.', async () => {
                await dashboard.clickTabButton('Loan Balance', 'tab');
                await assertion.verifyAmountInHiddenState('Loan Balance');
                await activity.takeScreenshot(metadata.DS_005.testID, 'dashboard', 1);
            })

            await numberedSteps.start("Exit the Asenso V3 application.", async () => {
                await activity.closeApp();
            });

        } catch (err) {
            await handleError(err, testCase.title.dashboard, metadata.DS_005.testID);
        } 
    });
});