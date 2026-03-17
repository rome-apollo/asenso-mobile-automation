import { driver, browser } from '@wdio/globals';
import { config } from '../../wdio.conf.js';
import { addAttachment } from '@wdio/allure-reporter';
import { numberedSteps } from '../../helpers/customSteps.js';
import { checkFolderExist } from '../../helpers/checkFileExist.js';

class Activity {

    async launchApp() {
        await driver.activateApp(config.capabilities.at(0)['appium:appPackage']);
        // console.log("Launch Application: ", config.capabilities.at(0)['appium:appPackage'])
    }

    async closeApp() {
        // await driver.terminateApp(config.capabilities.at(0)['appium:appPackage'], {timeout: 0});
        // await driver.terminateApp('com.hihonor.calculator', {timeout: 0});
        await driver.terminateApp('ph.asenso.mobile.dev');
    }

    async takeScreenshot(testCaseId, feature, index){

        checkFolderExist(feature);

        try {
            let path;
            if(index === undefined || index === null){
                path = `test/screenshots/${feature}/Screenshot_${testCaseId}.png`;
            } else {
                path = `test/screenshots/${feature}/Screenshot_${testCaseId}_${index}.png`;
            }
            await numberedSteps.start("Take a screenshot.", async () => {
                console.log('path: ', path)
                const screenshot = await browser.saveScreenshot(path);
                const buffer = Buffer.from(screenshot, 'base64');
                addAttachment(`Screenshot_${testCaseId}.png`, buffer, 'image/png');
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default Activity;
