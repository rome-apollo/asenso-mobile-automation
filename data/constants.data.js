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
        dashboard: `Sprint ${project.currentSprint}: ${project.name} - ${features.dashboard}`,
    },
    description: {
        userAuthentication: {
            UA_001: `The system should successfully authenticate the user and be redirected to the dashboard/home page.\n\n### Preconditions\n1. The user account is already registered in the system.\n2. The user has valid login credentials (e.g., username/email and password).\n3. The system login page is accessible.`,
            UA_002: `The system should not allow the user to login. An error message such as "[Notice] Your number has not been registered yet." should be displayed.\n\n### Preconditions\n1. The login page is accessible.\n2. The user attempting to log in is not registered in the system.`,
            UA_003: `The system should not allow the user to login. An error message such as "Invalid OTP" should be displayed.\n\n### Preconditions\n1. The login page is accessible.\n2. The user account is already registered in the system.\n3. The entered one time password (OTP) is incorrect.`,
            UA_004: `The system should not allow the user to login when incorrect password is entered.\n\n### Preconditions\n1. The login page is accessible.\n2. The user account is already registered in the system.\n3. The entered one time password (OTP) is incorrect.`,
            UA_005: `The system should allow the user to log out successfully.\n\n### Preconditions\n1. The login page is accessible.\n2. The user account is already registered in the system.\n3. The entered one time password (OTP) is incorrect.`,
            UA_006: `The 'Change' button or switch account should function correctly and redirected to login screen.\n\n### Preconditions\n1. The login page is accessible.\n2. The user account is already registered in the system.\n3. The entered one time password (OTP) is incorrect.`,
            UA_007: `the 'Open an Account' button when entered number is not registered yet should function correctly and redirected to login screen.\n\n### Preconditions\n1. The login page is accessible.\n2. The user account is already registered in the system.\n3. The entered one time password (OTP) is incorrect.`,
        },
        dashboard: {    
            DS_001: `The Asenso header should be visible at the top of the screen.\n\n### Preconditions\n1. The user has a valid registered account.\n2. The user is successfully logged in to the application.\n3. The Dashboard screen is loaded.`,
            DS_002: `The welcome text with user first name should be displayed below the Asenso app header.\n\n### Preconditions\n1. The user has a valid registered account.\n2. The user is successfully logged in to the application.\n3. The Dashboard screen is loaded.`,
            DS_003: `All elements in the menu should be visible on the screen.\n\n### Preconditions\n1. The user has a valid registered account.\n2. The user is successfully logged in to the application.\n3. The Dashboard screen is loaded.`,
            DS_004: `The Individual Savings and Loan Balance tabs should be visible and function correctly.\n\n### Preconditions\n1. The user has a valid registered account.\n2. The user is successfully logged in to the application.\n3. The Dashboard screen is loaded.`,
            DS_005: `The Individual Savings and Loan Balance amount is in hidden state by default.\n\n### Preconditions\n1. The user has a valid registered account.\n2. The user is successfully logged in to the application.\n3. The Dashboard screen is loaded.`,
            DS_006: `The Show/Hide option for the Savings and Loan balance amount should function correctly.\n\n### Preconditions\n1. The user has a valid registered account.\n2. The user is successfully logged in to the application.\n3. The Dashboard screen is loaded.`,
            DS_007: `the bottom navigation options 'Payments', 'Dashboard', and 'Logout' should be visible.\n\n### Preconditions\n1. The user has a valid registered account.\n2. The user is successfully logged in to the application.\n3. The Dashboard screen is loaded.`,
        }
    }
}