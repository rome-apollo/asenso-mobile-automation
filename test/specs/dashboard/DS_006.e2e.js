
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
       DS_006: 'DS_006: the Show/Hide icon for the Savings and Loan balance amount should function correctly.',
    }

    it(testScenario.DS_006, async () => {

        addMetadata(metadata.DS_006);
        addBehaviors(behaviorsData.epic, behaviorsData.features, behaviorsData.story);
        addLoggerCLI(metadata.DS_006.testID, testCase.title.dashboard, testScenario.DS_006, metadata.DS_006.description);

        let dashboard = new DashboardScreen();
        let assertion = new DashboardAssertion();
        let activity = new Activity();
        let savingsAmount = '90,500.50';
        let loanAMount = '54,500.00';

        try {
            await numberedSteps.start("Launch the Asenso V3 application.", async () => {
                await activity.launchApp();
            })
            
            await userFlow.userLoginSkip2FA('ap0ll02k26');

            await numberedSteps.start('In the Dashboard screen, go to the Savings and Loan Balanace tab.', async () => {
                await dashboard.clickTabButton('Show/Hide Savings', 'icon');
                await assertion.verifyShowAmountFunction(savingsAmount, 'Individual Savings');
                await activity.takeScreenshot(metadata.DS_006.testID, 'dashboard');
            });

            await numberedSteps.start('Go the Loan Balance tab.', async () => {
                await dashboard.clickTabButton('Loan Balance', 'button');
                await assertion.verifyShowAmountFunction(loanAMount, 'Loan Balance');
                await activity.takeScreenshot(metadata.DS_005.testID, 'dashboard', 1);
            })

            await numberedSteps.start("Exit the Asenso V3 application.", async () => {
                await activity.closeApp();
            });

        } catch (err) {
            await handleError(err, testCase.title.dashboard, metadata.DS_006.testID);
        } 
    });
});