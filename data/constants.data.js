import { Severity } from "allure-js-commons";
import dotenv from 'dotenv';
dotenv.config();

export const project = {
    name: "Asenso Mobile Version 3",
    owner: "Jerome Encinares",
    product: ['asensov3', 'payconnect-switch', 'terminal'], 
    currentSprint: 'X',
    currentBuild: process.env.APP_RELEASE_BUILD_NUMBER,
};

export const features = {
    userAuthentication: "User Authentication ",
    dashboard: "Dashboard Screen ",
};

export const severity = {
    critical: Severity.CRITICAL,
    blocker: Severity.BLOCKER,
    normal: Severity.NORMAL,
    minor: Severity.MINOR,
}

export const testCase = {
    title: {
        userAuthentication: `Sprint ${project.currentSprint}: ${project.name} - ${features.userAuthentication}`,
    },
    description: {
        userAuthentication: {
            UA_001: `The system should not allow the user to login. An error message such as **"[Notice] Your number has not been registered yet."** should be displayed.\n\n### Preconditions\n1. The login page is accessible.\n2. The user attempting to log in is not registered in the system.`,
        },
    }
}