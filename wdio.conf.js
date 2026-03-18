import * as os from 'os'

export const config = {
    runner: 'local',
    port: 4723,
    // outputDir: './cli-logs', // store all log files
    specs: [
        // './test/specs/**/*.js',
        // './test/specs/*.js',
        './test/specs/authentication/*.e2e.js',
        './test/specs/dashboard/*.e2e.js',
    ],
    exclude: [
        // './test/specs/**/*.e2e.js',
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': process.env.DEVICE_SERIAL,
        'appium:platformVersion': '15',
        'appium:appPackage': 'ph.asenso.mobile.dev',
        'appium:appActivity': 'ph.asenso.mobile.MainActivity',
        'appium:noReset': true,
        'appium:skipDeviceInitialization': true,
        'appium:skipServerInstallation': true 
    }],
    logLevel: 'silent', // Level of logging verbosity: trace | debug | info | warn | error | silent
    bail: 0,
    waitforTimeout: 120000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    // specFileRetries: 2,
    // specFileRetriesDelay: 0,
    // specFileRetriesDeferred: false,
    reporters: [
    'spec',
        [
            'allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
            disableMochaHooks: true,
            disableAssertions: false,
            // addConsoleLogs: true, 
            reportedEnvironmentVars: { 
                'Project': 'Asenso Mobile V3 Application',
                'Device Brand & Model': process.env.DEVICE_MODEL,
                'Android Version': '15',
                'Environment': 'Dev',
                'Node Version': process.version,
                'OS Platform, Release, & Version': `${os.platform()}, ${os.release()}, ${os.version()}`,
            },}
        ]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
    },
}