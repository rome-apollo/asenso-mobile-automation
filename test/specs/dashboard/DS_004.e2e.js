
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
       DS_004: 'DS_004: the Individual Savings and Loan Balance tabs should be visible and function correctly.',
    }

    it(testScenario.DS_004, async () => {

        addMetadata(metadata.DS_004);
        addBehaviors(behaviorsData.epic, behaviorsData.features, behaviorsData.story);
        addLoggerCLI(metadata.DS_004.testID, testCase.title.dashboard, testScenario.DS_004, metadata.DS_004.description);

        let dashboard = new DashboardScreen();
        let assertion = new DashboardAssertion();
        let activity = new Activity();

        try {
            await numberedSteps.start("Launch the Asenso V3 application.", async () => {
                await activity.launchApp();
            })
            
            await userFlow.userLoginSkip2FA('ap0ll02k26');

            await numberedSteps.start('Tap the Load Balance tab.', async () => {
                await dashboard.clickTabButton('Loan Balance', 'button');
                await assertion.verifyLoanBalanceTab();
                await activity.takeScreenshot(metadata.DS_004.testID, 'dashboard');
            })

            await numberedSteps.start('Tap the Individual Savings tab.', async () => {
                await dashboard.clickTabButton('Individual Savings', 'button');
                await assertion.verifyIndividualSavingsTab();
                await activity.takeScreenshot(metadata.DS_004.testID, 'dashboard', 1);
            })

            await numberedSteps.start("Exit the Asenso V3 application.", async () => {
                await activity.closeApp();
            });

        } catch (err) {
            await handleError(err, testCase.title.dashboard, metadata.DS_004.testID);
        } 
    });
});