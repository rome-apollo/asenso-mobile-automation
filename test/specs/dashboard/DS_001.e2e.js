
import { testCase } from "../../../data/constants.data.js";
import { metadata, behaviorsData } from "../../../data/dashboard.data.js";
import { numberedSteps } from "../../../helpers/customSteps.js";
import { handleError } from "../../../helpers/errorHandler.js";
import { addMetadata, addBehaviors, addLoggerCLI} from "../../../helpers/setMetadata.js";
import { userFlow } from "../../../helpers/userFlow.js";
import DashboardAssertion from "../../assertions/DashboardAssertion.js";
import Activity from "../../pages/Activity.js";

describe(testCase.title.dashboard, () => {
    
    let testScenario = {
       DS_001: 'DS_001: the Asenso header should be visible at the top of the screen.',
    }

    it(testScenario.DS_001, async () => {

        addMetadata(metadata.DS_001);
        addBehaviors(behaviorsData.epic, behaviorsData.features, behaviorsData.story);
        addLoggerCLI(metadata.DS_001.testID, testCase.title.dashboard, testScenario.DS_001, metadata.DS_001.description);

        let assertion = new DashboardAssertion();
        let activity = new Activity();

        try {
            await numberedSteps.start("Launch the Asenso V3 application.", async () => {
                await activity.launchApp();
            })

            await userFlow.userLogin('09171234567', '123456', 'ap0ll02k26');
            await assertion.verifyHeaderLogo();
            await activity.takeScreenshot(metadata.DS_001.testID, 'dashboard');
            
            await numberedSteps.start("Exit the Asenso V3 application.", async () => {
                await activity.closeApp();
            });

        } catch (err) {
            await handleError(err, testCase.title.dashboard, metadata.DS_001.testID);
        } 
    });
});