import * as allure from "allure-js-commons";
import { numberedSteps } from "./customSteps";
import { config } from "../wdio.conf";
import chalk from "chalk";
import dotenv from 'dotenv'; dotenv.config({ quiet: true });

export const addMetadata = async ({ testID, description, owner, tags , severity, opProject, opTicketID}) => {
    await allure.testCaseId(testID);
    await allure.description(description);
    await allure.owner(owner);
    await allure.tags(...tags);
    await allure.severity(severity);
    // await allure.link(`https://${process.env.PAYCONNECT_ENVIRONMENT.toLowerCase()}-dashboard.payconnect.io/`, "Payconnect 2.0 Portal");
    await allure.issue(`https://project.apollo.com.ph/projects/${opProject}/work_packages/${opTicketID}/activity`, `Open Project: #${opTicketID}`);
}

export const addBehaviors = async (epic, feature, story) => {
    await allure.epic(epic);
    await allure.feature(feature);
    await allure.story(story);
}

export const addLoggerCLI = (testID, title, scenario, description) => {
    numberedSteps.reset();
    if(config.logLevel === 'silent') {
        console.log();
        console.log(chalk.bold(`${title} (${testID})`));
            console.log(chalk.white(`Scenario: `, chalk.white(scenario.replace(`${testID}: `, ''))));
        console.log(chalk.white(`Description: `, chalk.white(description.replace('###', '').replace(/\*\*/g, ''))));
        console.log();
    }
}