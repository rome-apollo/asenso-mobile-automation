# Asenso Mobile V3 Appium Automation <br>

Automated testing for the Asenso Mobile Version 3 application using Appium, ensuring reliable validation of core features such as authentication, user flow, and other feature handling across Android devices. 
This setup provides consistent, repeatable test execution and helps maintain app quality throughout development.

Here’s a short, clear description for each tool/framework used in Asenso Mobile app automation:

1. **Appium** - Mobile automation framework used to interact with the Asenso Mobile app on real devices and emulators for both Android and iOS.
2. **Appium Inspector** – A visual tool for exploring mobile app elements, inspecting UI components, and generating locator strategies to support automation script development.
3. **WebdriverIO** - Test automation framework that provides a clean and efficient way to write, organize, and run automated scripts for mobile testing.
4. **Mocha** - Test runner used to structure and execute test cases in a readable, BDD/TDD-style format.
5. **Chai** - Assertion library that provides clear, human-readable validations to ensure expected app behavior.
6. **Allure Report** - Reporting tool that generates detailed, visual test reports with steps, attachments, and test history to track automation quality.
7. **GitHub Actions** – CI/CD automation used to deploy Allure reports directly to GitHub Pages for easy access and sharing.
<br>

## Appium Prerequisites

Before running the Asenso Mobile mobile test automation, ensure the following prerequisites are installed and configured:

### 1. Node.js
- Required to run Appium and WebdriverIO.
- Download from: https://nodejs.org  
- Verify installation:
  
  ```bash
  node -v
  npm -v
   ```
### 2. Appium Server
- Core server that interacts with mobile devices.
- Install globally using npm:
  
  ```bash
  npm install -g appium
  appium -v
  3.1.0
  ```

### 3. Appium Inspector
- GUI tool for inspecting mobile elements and generating selectors.
- Download from: https://github.com/appium/appium-inspector/releases

### 4. Java Development Kit (JDK) and Java Runtime Environment (JRE)
- Required for Android automation.
- Confirm installation:

  ```bash
  java -version
  ```

### 5. Android Studio (for Android)
- Provides SDKs, platform tools, and device/emulator management.
- Ensure ANDROID_HOME environment variable is set.

### 6. Git Bash
- Command-line tool for Git version control, script execution, and running automation commands.

### 7. Install Platform Tools - Android Debug Bridge (ADB)
- Confirm installation:

  ```bash
  adb -version
  ```

### 8. Set Environment Variable
- System Variables

  ```bash
   ANDROID_HOME         C:\Users\<USER>\AppData\Local\Android\Sdk 
   ANDROID_SDK_ROOT     C:\Users\<USER>\AppData\Local\Android\Sdk 
   JAVA_HOME            C:\Program Files\Java\jdk-25
  ```

  ```bash
   Path for ADB
   C:\Users\platform-tools or <PLATFORM_TOOLS_DIRECTORY>
  ```

## Cloning and running this project:

1. Clone the repository:
   
   ```bash
   git clone <REPOSITORY_URL>
   cd <REPOSITORY_FOLDER>
   ```

2. Install packages:
   
   ```bash
   npm install or npm i
   ```
   
3. Run the project:
    
   ```bash
   npm run wdio
   ```

3. Run the specif test file:
    
   ```bash
   npm run wdio_spec --feature=<FOLDER> --ts=<TEST_SCRIPT>
   ```

4. Generate Allure Results:

   ```bash
   npm run allure-generate
   ```

5. Open the generated results:

   ```bash
   npm run allure-open
   ```
 