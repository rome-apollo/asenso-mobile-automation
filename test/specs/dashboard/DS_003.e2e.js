
import { testCase } from "../../../data/constants.data.js";
import { metadata, behaviorsData } from "../../../data/dashboard.data.js";
import { numberedSteps } from "../../../helpers/customSteps.js";
import { handleError } from "../../../helpers/errorHandler.js";
import { addMetadata, addBehaviors, addLoggerCLI} from "../../../helpers/setMetadata.js";
import Activity from "../../pages/Activity.js";
import { userFlow } from "../../../helpers/userFlow.js";
import DashboardAssertion from "../../assertions/DashboardAssertion.js";

describe(testCase.title.dashboard, () => {
    
    let testScenario = {
       DS_003: 'DS_003: all elements in the menu should be visible on the screen.',
    }

    it(testScenario.DS_003, async () => {

        addMetadata(metadata.DS_003);
        addBehaviors(behaviorsData.epic, behaviorsData.features, behaviorsData.story);
        addLoggerCLI(metadata.DS_003.testID, testCase.title.dashboard, testScenario.DS_003, metadata.DS_003.description);

        let assertion = new DashboardAssertion();
        let activity = new Activity();
 
        try {
            await numberedSteps.start("Launch the Asenso V3 application.", async () => {
                await activity.launchApp();
            })
            
            await userFlow.userLoginSkip2FA('ap0ll02k26');
            await assertion.verifyMenuButtons();

            await activity.takeScreenshot(metadata.DS_003.testID, 'dashboard');
            
            await numberedSteps.start("Exit the Asenso V3 application.", async () => {
                await activity.closeApp();
            });

        } catch (err) {
            await handleError(err, testCase.title.dashboard, metadata.DS_003.testID);
        } 
    });
});