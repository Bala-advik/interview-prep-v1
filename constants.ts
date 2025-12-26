import { QuizData } from "./types";

export const DEFAULT_QUIZ_JSON: QuizData = {
  title: "Frontend Engineering Basics",
  description: "A quick check on React, CSS, and JavaScript fundamentals.",
  sections: [
    {
      id: "sec-1",
      title: "React Fundamentals",
      questions: [
        {
          id: "q-1-1",
          text: "Which hook is used to perform side effects in function components?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          correctOptionIndex: 1,
          explanation:
            "useEffect is designed to handle side effects like data fetching, subscriptions, or manually changing the DOM.",
        },
        {
          id: "q-1-2",
          text: "What prevents a React component from re-rendering if props haven't changed?",
          options: [
            "React.memo",
            "useMemo",
            "shouldComponentUpdate",
            "All of the above",
          ],
          correctOptionIndex: 3,
          explanation:
            "React.memo (HOC), useMemo (hook), and shouldComponentUpdate (class lifecycle) are all mechanisms to optimize rendering performance.",
        },
      ],
    },
    {
      id: "sec-2",
      title: "CSS & Styling",
      questions: [
        {
          id: "q-2-1",
          text: "In Flexbox, which property aligns items along the cross axis?",
          options: [
            "justify-content",
            "align-items",
            "flex-direction",
            "align-content",
          ],
          correctOptionIndex: 1,
          explanation:
            "align-items controls alignment along the cross axis, whereas justify-content handles the main axis.",
        },
      ],
    },
  ],
};

export const REACT_QUIZ: QuizData = {
  title: "React.js Mastery",
  description: "Deep dive into React hooks, lifecycle, and patterns.",
  sections: [
    {
      id: "react-core",
      title: "Core Concepts",
      questions: [
        {
          id: "r-1",
          text: "What is the primary purpose of the Virtual DOM?",
          options: [
            "To directly manipulate the browser DOM for speed",
            "To create a copy of the DOM in memory for efficient diffing",
            "To replace the browser DOM entirely",
            "To store component state",
          ],
          correctOptionIndex: 1,
          explanation:
            "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to detect changes (diffing) and efficiently update only the necessary parts of the real DOM (reconciliation).",
        },
        {
          id: "r-2",
          text: "Which of the following is NOT a rule of Hooks?",
          options: [
            "Only call Hooks at the top level",
            "Only call Hooks from React functions",
            "Hooks can be called inside loops or conditions",
            "Hooks must be imported from React",
          ],
          correctOptionIndex: 2,
          explanation:
            "Hooks must strictly be called at the top level of your component. Calling them inside loops, conditions, or nested functions can mess up the internal order React relies on to preserve state.",
        },
      ],
    },
    {
      id: "react-hooks",
      title: "Advanced Hooks",
      questions: [
        {
          id: "r-3",
          text: "When would you use `useLayoutEffect` instead of `useEffect`?",
          options: [
            "For all API calls",
            "When you need to synchronously read layout from the DOM before painting",
            "When using Redux",
            "To replace `componentDidMount`",
          ],
          correctOptionIndex: 1,
          explanation:
            "useLayoutEffect fires synchronously after all DOM mutations. Use it to read layout from the DOM and synchronously re-render (e.g., measuring an element) to prevent visual flickering.",
        },
        {
          id: "r-4",
          text: "What does `useRef` return?",
          options: [
            "The current state value",
            "A mutable ref object with a .current property",
            "A read-only DOM node",
            "The previous render's props",
          ],
          correctOptionIndex: 1,
          explanation:
            "useRef returns a mutable ref object whose .current property is initialized to the passed argument. The returned object persists for the full lifetime of the component.",
        },
      ],
    },
  ],
};

export const NODE_QUIZ: QuizData = {
  title: "Node.js Backend Expert",
  description: "Server-side JavaScript, Event Loop, and Streams.",
  sections: [
    {
      id: "node-basics",
      title: "Event Loop & Async",
      questions: [
        {
          id: "n-1",
          text: "Which phase of the Event Loop executes `setImmediate` callbacks?",
          options: [
            "Timers phase",
            "Poll phase",
            "Check phase",
            "Close callbacks phase",
          ],
          correctOptionIndex: 2,
          explanation:
            "setImmediate() callbacks are executed in the 'Check' phase of the Event Loop, which occurs immediately after the 'Poll' phase has completed.",
        },
        {
          id: "n-2",
          text: "What is the default thread pool size in Node.js libuv?",
          options: ["1", "4", "8", "Unlimited"],
          correctOptionIndex: 1,
          explanation:
            "By default, libuv's thread pool size is 4. This can be adjusted using the UV_THREADPOOL_SIZE environment variable.",
        },
      ],
    },
    {
      id: "node-streams",
      title: "Buffers & Streams",
      questions: [
        {
          id: "n-3",
          text: "Which method connects a Readable stream to a Writable stream?",
          options: [
            "stream.connect()",
            "stream.pipe()",
            "stream.write()",
            "stream.transfer()",
          ],
          correctOptionIndex: 1,
          explanation:
            "The pipe() method is the standard way to attach a readable stream to a writable stream, handling flow control automatically.",
        },
        {
          id: "n-4",
          text: "What happens if you write to a buffer past its allocated size?",
          options: [
            "It automatically resizes",
            "It throws an error",
            "It overwrites the beginning",
            "It does nothing (data is lost)",
          ],
          correctOptionIndex: 3,
          explanation:
            "Buffers in Node.js are fixed-size chunks of memory. Writing past the end typically does nothing or is truncated; it does not automatically resize like a standard Array.",
        },
      ],
    },
  ],
};

export const PLAYWRIGHT_QUIZ: QuizData = {
  title: "Playwright + TypeScript Mastery Quiz",
  description:
    "500-question comprehensive quiz covering Playwright (E2E) and TypeScript concepts from intro to advanced, including locators, assertions, trace viewer, codegen, project setup, fixtures, OOP, and common patterns.",
  sections: [
    {
      id: "sec-1",
      title: "Module 1 — Introduction to Playwright",
      questions: [
        {
          id: "q-1-001",
          text: "What is Playwright primarily used for?",
          options: [
            "Unit testing Node modules",
            "End-to-end web automation & testing",
            "Static site generation",
            "Database migrations",
          ],
          correctOptionIndex: 1,
          explanation:
            "Playwright is a Node.js-based automation framework for end-to-end testing of web applications.",
        },
        {
          id: "q-1-002",
          text: "Which browsers does Playwright support out-of-the-box?",
          options: [
            "Chromium only",
            "Chromium and Firefox only",
            "Chromium, Firefox, WebKit",
            "All browsers including IE via WebDriver",
          ],
          correctOptionIndex: 2,
          explanation:
            "Playwright supports Chromium, Firefox and WebKit (Safari engine) for cross-engine testing.",
        },
        {
          id: "q-1-003",
          text: "Playwright is created and maintained by which company?",
          options: ["Google", "Microsoft", "Mozilla", "Facebook"],
          correctOptionIndex: 1,
          explanation: "Playwright was created and is maintained by Microsoft.",
        },
        {
          id: "q-1-004",
          text: "Why is Playwright said to have low flakiness?",
          options: [
            "Because it uses Selenium",
            "Because of built-in auto-waits and retries",
            "Because it never times out",
            "Because it uses a browser plugin",
          ],
          correctOptionIndex: 1,
          explanation:
            "Playwright's smart auto-waits and retrying locators reduce flakiness.",
        },
        {
          id: "q-1-005",
          text: "Which test runner does Playwright use by default?",
          options: ["Mocha", "Jest", "@playwright/test runner", "JUnit"],
          correctOptionIndex: 2,
          explanation:
            "Playwright includes a built-in test runner provided by @playwright/test.",
        },
        {
          id: "q-1-006",
          text: "Which of these is a Playwright feature for debugging runs visually?",
          options: [
            "Time-travel debugger",
            "Trace Viewer",
            "Screencast Recorder",
            "Flaky Detector",
          ],
          correctOptionIndex: 1,
          explanation:
            "Trace Viewer lets you replay and inspect test runs with screenshots, logs and network events.",
        },
        {
          id: "q-1-007",
          text: "Playwright can run tests in parallel using:",
          options: [
            "test.parallel()",
            "npx parallel-run",
            "browser.concurrent()",
            "parallelTestRunner",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright supports parallelism via test.parallel() and worker configuration in the runner.",
        },
        {
          id: "q-1-008",
          text: "Which language(s) does Playwright support?",
          options: [
            "JavaScript & TypeScript only",
            "JS, TS, Python, Java, .NET",
            "Only Python & Java",
            "Only .NET",
          ],
          correctOptionIndex: 1,
          explanation:
            "Playwright provides official bindings for JS/TS, Python, Java and .NET.",
        },
        {
          id: "q-1-009",
          text: "What role does TypeScript play in Playwright projects?",
          options: [
            "No benefit",
            "Provides static typing and better DX",
            "Replaces Playwright APIs",
            "Used only for reporting",
          ],
          correctOptionIndex: 1,
          explanation:
            "TypeScript adds static types, IntelliSense, and safer refactoring for test suites.",
        },
        {
          id: "q-1-010",
          text: "Which built-in Playwright capability helps avoid using manual sleeps?",
          options: [
            "auto-waiting locators",
            "explicit waitForTimeout calls",
            "setTimeout wrapper",
            "sleep plugin",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright locators auto-wait for elements to be actionable, reducing need for manual sleeps.",
        },
        {
          id: "q-1-011",
          text: "Which of these is NOT a Playwright reporting/debugging artifact?",
          options: [
            "Traces",
            "Videos",
            "HTML reports",
            "Sentry issues auto-created",
          ],
          correctOptionIndex: 3,
          explanation:
            "Playwright produces traces, videos and HTML reports; it doesn't auto-create Sentry issues.",
        },
        {
          id: "q-1-012",
          text: "Playwright's architecture: tests → runner → ? → real browsers. Fill the missing piece.",
          options: [
            "WebDriver",
            "Browser drivers",
            "Selenium Grid",
            "Puppeteer",
          ],
          correctOptionIndex: 1,
          explanation:
            "Playwright communicates with browser drivers which in turn launch real browsers.",
        },
        {
          id: "q-1-013",
          text: "Which Playwright API is used for network interception?",
          options: [
            "page.route()",
            "page.intercept()",
            "page.mock()",
            "network.hook()",
          ],
          correctOptionIndex: 0,
          explanation:
            "page.route() is Playwright's native API for intercepting and mocking network requests.",
        },
        {
          id: "q-1-014",
          text: "True or False: Playwright can run tests headless and headed.",
          options: ["True", "False", "Only headless", "Only headed"],
          correctOptionIndex: 0,
          explanation:
            "Playwright supports both headless and headed execution modes.",
        },
        {
          id: "q-1-015",
          text: "Which is a recommended use-case for Playwright?",
          options: [
            "Legacy IE-only testing",
            "Modern cross-browser web automation and API testing",
            "Only unit tests",
            "Mobile native app testing",
          ],
          correctOptionIndex: 1,
          explanation:
            "Playwright is ideal for modern, cross-browser E2E and API testing.",
        },
        {
          id: "q-1-016",
          text: "Which CI tool is commonly mentioned as compatible with Playwright?",
          options: ["GitHub Actions", "SVN Hooks", "FTP", "CircleCI only"],
          correctOptionIndex: 0,
          explanation:
            "Playwright works well with GitHub Actions, Jenkins, GitLab CI and other CI systems.",
        },
        {
          id: "q-1-017",
          text: "Playwright's built-in test runner is primarily invoked via which command?",
          options: [
            "npm playwright run",
            "npx playwright test",
            "playwright-run",
            "node runner.js",
          ],
          correctOptionIndex: 1,
          explanation:
            "The standard command is npx playwright test to run Playwright tests.",
        },
        {
          id: "q-1-018",
          text: "Which is a major advantage of Playwright over WebDriver-based tools?",
          options: [
            "Native bindings and no separate WebDriver layer",
            "Less documentation",
            "Only supports Chrome",
            "Slower test execution",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright uses native bindings and doesn't rely on the WebDriver protocol, improving speed and reliability.",
        },
        {
          id: "q-1-019",
          text: "Playwright tests may include UI, API, and file uploads/downloads. Which API supports API testing specifically?",
          options: [
            "APIRequestContext",
            "page.api()",
            "network.fetch()",
            "requestHelper",
          ],
          correctOptionIndex: 0,
          explanation: "Playwright provides APIRequestContext for API testing.",
        },
        {
          id: "q-1-020",
          text: "Scenario: You need to compare test executability speed across browsers. Which Playwright feature helps run the same test across browsers in one script?",
          options: [
            "test.describe() with projects for browsers",
            "Multiple npx commands manually",
            "Separate repos per browser",
            "Use Selenium grid",
          ],
          correctOptionIndex: 0,
          explanation:
            "Using projects in Playwright config or iterating with test.describe allows running across Chromium/Firefox/WebKit from one codebase.",
        },
        {
          id: "q-1-021",
          text: "Which statement best explains 'Browser Contexts' in Playwright?",
          options: [
            "They are global singletons",
            "They are like incognito windows for test isolation",
            "They are OS-level containers",
            "They are only used for videos",
          ],
          correctOptionIndex: 1,
          explanation:
            "Browser contexts provide isolated sessions (like incognito) enabling test isolation.",
        },
        {
          id: "q-1-022",
          text: "Which Playwright feature is specifically recommended for recording user actions into code?",
          options: [
            "CodeGen (codegen)",
            "trace viewer",
            "expect API",
            "test fixtures",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright CodeGen records browser actions and generates code.",
        },
        {
          id: "q-1-023",
          text: "Why might an organization prefer TypeScript for Playwright tests?",
          options: [
            "TypeScript runs faster in browsers",
            "Static typing reduces runtime bugs and improves DX",
            "It forces synchronous tests",
            "It allows using Java code",
          ],
          correctOptionIndex: 1,
          explanation:
            "TypeScript provides static types and better tooling support for large test suites.",
        },
        {
          id: "q-1-024",
          text: "Which is NOT a Playwright artifact you would enable for debugging flaky tests?",
          options: [
            "trace",
            "video",
            "screenshots",
            "SQL query logs auto-upload",
          ],
          correctOptionIndex: 3,
          explanation:
            "Playwright supports traces, videos, and screenshots; SQL logs aren't an automatic Playwright artifact.",
        },
        {
          id: "q-1-025",
          text: "Which of these is a recommended locator strategy to prefer?",
          options: [
            "XPath chain only",
            "data-testid or role-based locators",
            "Long CSS chains tied to DOM",
            "Absolute pixel coordinates",
          ],
          correctOptionIndex: 1,
          explanation:
            "Prefer user-facing or explicit test ids (data-testid) and role-based locators for resilience.",
        },
        {
          id: "q-1-026",
          text: "When would you use 'page.route()' in Playwright?",
          options: [
            "To navigate to a page",
            "To intercept or mock network requests",
            "To take screenshots",
            "To generate code",
          ],
          correctOptionIndex: 1,
          explanation:
            "page.route() is used to intercept/modify/mock network requests.",
        },
        {
          id: "q-1-027",
          text: "Which feature helps Playwright re-run flaky tests automatically?",
          options: [
            "test.retry()",
            "test.skip()",
            "test.hang()",
            "test.fail()",
          ],
          correctOptionIndex: 0,
          explanation: "test.retry() lets you retry flaky tests automatically.",
        },
        {
          id: "q-1-028",
          text: "Which of the following is a benefit of Playwright's 'auto-wait' behavior?",
          options: [
            "Eliminates need for any assertions",
            "Removes most explicit sleeps and reduces flakes",
            "Makes tests deterministic to the millisecond",
            "Prevents parallelism",
          ],
          correctOptionIndex: 1,
          explanation:
            "Auto-waits reduce flakiness by waiting for elements to be actionable, cutting down explicit sleeps.",
        },
        {
          id: "q-1-029",
          text: "True or False: Playwright supports video recording of test runs.",
          options: [
            "True",
            "False",
            "Only with third-party plugins",
            "Only in headful mode",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright can record videos of test runs via config or API.",
        },
        {
          id: "q-1-030",
          text: "Which is the correct high-level flow of Playwright architecture?",
          options: [
            "Tests → Browser → Runner",
            "Test Files → Playwright Test Runner → Browser Drivers → Real Browsers",
            "Runner → Tests → Real Browsers",
            "Browser Drivers → Tests → Playwright Runner",
          ],
          correctOptionIndex: 1,
          explanation:
            "Tests go through the Playwright runner to browser drivers which control real browsers.",
        },
        {
          id: "q-1-031",
          text: "Which option best describes Playwright's license?",
          options: ["Proprietary", "GPL", "MIT", "Apache 2.0"],
          correctOptionIndex: 2,
          explanation: "Playwright is released under the MIT license.",
        },
        {
          id: "q-1-032",
          text: "Scenario: You want traces only when a test first retries after a failure. Which config option should you use?",
          options: [
            "trace: 'on'",
            "trace: 'off'",
            "trace: 'on-first-retry'",
            "trace: 'retain-on-failure'",
          ],
          correctOptionIndex: 2,
          explanation:
            "Use trace: 'on-first-retry' to record traces only for the first retry.",
        },
        {
          id: "q-1-033",
          text: "Which of these is a Playwright UI provided by the test runner?",
          options: [
            "Playwright Inspector UI (UI Mode)",
            "Playwright Dashboard",
            "Playwright Selenium UI",
            "Playwright Studio",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright provides a UI mode (npx playwright test --ui) and an inspector for debugging.",
        },
        {
          id: "q-1-034",
          text: "Which statement is true about Playwright and mobile web testing?",
          options: [
            "It can emulate mobile devices",
            "It runs native Android tests out-of-the-box",
            "It requires Appium for mobile web emulation",
            "It cannot test mobile",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright can emulate mobile devices for web testing; native mobile apps require tools like Appium.",
        },
        {
          id: "q-1-035",
          text: "Which of the following is recommended to include in .gitignore for Playwright projects?",
          options: [
            "/node_modules only",
            "/.playwright and /test-results",
            "playwright.config.ts",
            "tests/ folder",
          ],
          correctOptionIndex: 1,
          explanation:
            "Ignore / .playwright and test artifacts; config and tests are usually committed.",
        },
        {
          id: "q-1-036",
          text: "Which of these is a capability of the Playwright test runner regarding workers?",
          options: [
            "It cannot run with multiple workers",
            "It supports running tests across multiple workers in parallel",
            "It only runs tests sequentially",
            "Workers are only for Node 10",
          ],
          correctOptionIndex: 1,
          explanation:
            "Playwright supports parallel test execution using multiple workers.",
        },
        {
          id: "q-1-037",
          text: "True or False: Playwright must be used with TypeScript — it doesn't work with plain JavaScript.",
          options: ["True", "False", "Only for API tests", "Only on Windows"],
          correctOptionIndex: 1,
          explanation:
            "Playwright supports both JavaScript and TypeScript; TS is recommended but not required.",
        },
        {
          id: "q-1-038",
          text: "Which built-in artifact helps capture console logs and network events for failed tests?",
          options: [
            "Trace Viewer",
            "Screencast only",
            "test.log()",
            "auto-reporter",
          ],
          correctOptionIndex: 0,
          explanation:
            "Trace Viewer captures console logs, network events and more for debugging failures.",
        },
        {
          id: "q-1-039",
          text: "Playwright recommends testing by test ids when:",
          options: [
            "You want stable selectors resilient to UI text changes",
            "You want to test CSS implementation",
            "You want to assert layout styles only",
            "You need dynamic XPath",
          ],
          correctOptionIndex: 0,
          explanation:
            "Test ids (data-testid) are resilient when UI text or roles change.",
        },
        {
          id: "q-1-040",
          text: "Scenario: Which Playwright feature would you enable to produce artifacts only for failed tests while avoiding overhead on successful runs?",
          options: [
            "trace: 'retain-on-failure'",
            "trace: 'on-all-retries'",
            "trace: 'on'",
            "trace: 'off'",
          ],
          correctOptionIndex: 0,
          explanation:
            "trace: 'retain-on-failure' keeps traces for failed tests while avoiding heavy tracing for passing tests.",
        },
        {
          id: "q-1-041",
          text: "Which attribute is commonly used as a default test id attribute in Playwright?",
          options: ["data-test", "data-testid", "data-role", "test-id"],
          correctOptionIndex: 1,
          explanation:
            "Playwright defaults to using data-testid as the test id attribute.",
        },
        {
          id: "q-1-042",
          text: "Which Playwright component groups reusable setup/teardown logic?",
          options: ["Fixtures", "Locators", "Selectors", "Matchers"],
          correctOptionIndex: 0,
          explanation:
            "Fixtures provide reusable setup/teardown logic (like beforeAll, beforeEach) in Playwright.",
        },
        {
          id: "q-1-043",
          text: "Which of these is an advantage of Playwright's multi-context model?",
          options: [
            "Shared cookies across tests always",
            "Per-test isolation via separate contexts",
            "Single global page for all tests",
            "No ability to run multiple browsers",
          ],
          correctOptionIndex: 1,
          explanation:
            "Multi-context enables per-test isolation similar to incognito windows.",
        },
        {
          id: "q-1-044",
          text: "Which command installs Playwright browsers after installing the package?",
          options: [
            "npm i playwright-browsers",
            "npx playwright install",
            "playwright download",
            "npm playwright install",
          ],
          correctOptionIndex: 1,
          explanation:
            "npx playwright install downloads required browser binaries.",
        },
        {
          id: "q-1-045",
          text: "Which file centralizes Playwright test settings like retries and browser projects?",
          options: [
            "playwright.config.ts",
            "package.json",
            "tsconfig.json",
            ".playwrightrc",
          ],
          correctOptionIndex: 0,
          explanation:
            "playwright.config.ts holds global configuration like retries, timeouts, projects.",
        },
        {
          id: "q-1-046",
          text: "Which of the following is true about Playwright's auto-waits?",
          options: [
            "They make tests slower in all cases",
            "They only wait for network idle",
            "They wait for elements to become actionable before actions",
            "They remove need for any assertions",
          ],
          correctOptionIndex: 2,
          explanation:
            "Auto-waits ensure elements are actionable (visible, stable, enabled) before actions proceed.",
        },
        {
          id: "q-1-047",
          text: "Which is the recommended method to bootstrap a Playwright TS project as per the document?",
          options: [
            "npx playwright test init",
            "git clone official repo and copy",
            "manually create all files",
            "use a GUI generator",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx playwright test init generates config and example tests to bootstrap a project.",
        },
        {
          id: "q-1-048",
          text: "Which Playwright feature helps you record actions into TypeScript files with device emulation and viewport config?",
          options: [
            "npx playwright codegen --device",
            "trace: 'on'",
            "test.describe()",
            "page.route()",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx playwright codegen supports flags like --device and --viewport-size for recording.",
        },
        {
          id: "q-1-049",
          text: "Scenario: You want to compare Playwright vs Cypress for a modern front-end project. Which Playwright advantage is highlighted in the document?",
          options: [
            "Only supports Chrome",
            "Cross-browser engines and native tracing",
            "No test runner",
            "Larger plugin ecosystem than Cypress",
          ],
          correctOptionIndex: 1,
          explanation:
            "Playwright supports multiple browser engines and includes features like tracing; Cypress is Chrome-centric.",
        },
        {
          id: "q-1-050",
          text: "Which of these is provided by Playwright to examine failing tests without re-running them?",
          options: [
            "Trace Viewer",
            "test.retry()",
            "npx playwright open",
            "playwright-clean",
          ],
          correctOptionIndex: 0,
          explanation:
            "Trace Viewer allows inspecting traces from previous runs to debug failures.",
        },
      ],
    },
    {
      id: "sec-2",
      title: "Module 2 — Project Setup & Basic TypeScript Concepts",
      questions: [
        {
          id: "q-2-051",
          text: "What is the recommended Node version for Playwright projects in the document?",
          options: ["Node 12", "Node 14", "Node 18+", "Any Node version"],
          correctOptionIndex: 2,
          explanation:
            "The document recommends Node.js v18+ for Playwright projects.",
        },
        {
          id: "q-2-052",
          text: "Which command initializes package.json quickly for a new project?",
          options: [
            "npm init -y",
            "npx init package",
            "playwright init",
            "npm start",
          ],
          correctOptionIndex: 0,
          explanation: "npm init -y initializes package.json with defaults.",
        },
        {
          id: "q-2-053",
          text: "Which packages are installed as dev dependencies for a Playwright + TS project (document example)?",
          options: [
            "@playwright/test, typescript, ts-node",
            "express, mocha, chai",
            "selenium-webdriver, jazzy",
            "playwright-core only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Common dev deps include @playwright/test, typescript, ts-node and playwright.",
        },
        {
          id: "q-2-054",
          text: "What does tsconfig.json configure?",
          options: [
            "Playwright test settings",
            "TypeScript compiler options",
            "Browser binaries",
            "NPM scripts",
          ],
          correctOptionIndex: 1,
          explanation: "tsconfig.json holds TypeScript compiler settings.",
        },
        {
          id: "q-2-055",
          text: "In TypeScript, which keyword declares a read-only constant?",
          options: ["let", "const", "var", "readonly"],
          correctOptionIndex: 1,
          explanation:
            "const declares a constant binding in TypeScript/JavaScript.",
        },
        {
          id: "q-2-056",
          text: "Which TypeScript type should be avoided when possible because it opts out of type checking?",
          options: ["any", "unknown", "void", "never"],
          correctOptionIndex: 0,
          explanation:
            "any disables type checking and should be avoided when possible.",
        },
        {
          id: "q-2-057",
          text: "Which folder is recommended to store Page Object Models (POM) in the example structure?",
          options: ["pages/", "src/", "lib/", "assets/"],
          correctOptionIndex: 0,
          explanation:
            "The document recommends a pages/ folder for page objects.",
        },
        {
          id: "q-2-058",
          text: "Which file stores global Playwright settings like browsers and retries?",
          options: [
            "playwright.config.ts",
            "package.json",
            "README.md",
            "baseTest.ts",
          ],
          correctOptionIndex: 0,
          explanation:
            "playwright.config.ts is the centralized configuration file.",
        },
        {
          id: "q-2-059",
          text: "Which command installs Playwright and its test runner as dev dependencies (document suggestion)?",
          options: [
            "npm i -D playwright typescript ts-node @playwright/test",
            "npm i -S playwright",
            "npm install -g playwright",
            "yarn add playwright",
          ],
          correctOptionIndex: 0,
          explanation:
            "The document suggests installing those dev dependencies with npm i -D.",
        },
        {
          id: "q-2-060",
          text: "Which is the recommended folder for test specs in the project structure?",
          options: [
            "tests/",
            "specs/",
            "e2e/",
            "all are acceptable but document uses tests/",
          ],
          correctOptionIndex: 3,
          explanation:
            "The sample structure uses a tests/ folder for test specs.",
        },
        {
          id: "q-2-061",
          text: "Which TypeScript variable scope is block-scoped and recommended over var?",
          options: ["var", "let", "function", "global"],
          correctOptionIndex: 1,
          explanation: "let is block-scoped and preferred over var.",
        },
        {
          id: "q-2-062",
          text: "What does 'export const credentials' typically store in tests?",
          options: [
            "Dynamic test code",
            "Static test credentials like username/password",
            "Browser binaries",
            "Playwright config",
          ],
          correctOptionIndex: 1,
          explanation:
            "testData.ts often exports credentials for reuse in tests.",
        },
        {
          id: "q-2-063",
          text: "Which of these is NOT a common TypeScript primitive type?",
          options: ["string", "number", "boolean", "element"],
          correctOptionIndex: 3,
          explanation: "element is not a TypeScript primitive type.",
        },
        {
          id: "q-2-064",
          text: "Which operator checks both value and type equality in TypeScript/JavaScript?",
          options: ["==", "=", "===", "!="],
          correctOptionIndex: 2,
          explanation:
            "=== performs strict equality checking both value and type.",
        },
        {
          id: "q-2-065",
          text: "Scenario: You need a test-level base URL available across tests. Where should you declare it?",
          options: [
            "Inside each test only",
            "As a global const in a shared file",
            "In package.json",
            "In .gitignore",
          ],
          correctOptionIndex: 1,
          explanation:
            "Declare a global const (e.g., baseUrl) in a shared config or fixture for reuse.",
        },
        {
          id: "q-2-066",
          text: "TypeScript 'any' gives which behavior?",
          options: [
            "Strict typing",
            "Opt-out of type checking",
            "Compile-time error always",
            "Enforces immutability",
          ],
          correctOptionIndex: 1,
          explanation: "any disables type checking and accepts any value.",
        },
        {
          id: "q-2-067",
          text: "Which of these is a recommended way to initialize a new Playwright project as per the document?",
          options: [
            "npm init playwright@latest",
            "git clone an example",
            "download zip",
            "npm init -y alone",
          ],
          correctOptionIndex: 0,
          explanation:
            "npm init playwright@latest is mentioned for initializing Playwright with prompts.",
        },
        {
          id: "q-2-068",
          text: "Which TS type would you use for an array of strings?",
          options: ["Array[number]", "string[]", "object[]", "any[]"],
          correctOptionIndex: 1,
          explanation: "string[] denotes an array of strings in TypeScript.",
        },
        {
          id: "q-2-069",
          text: "Which file holds NPM scripts and dependencies?",
          options: [
            "tsconfig.json",
            "package.json",
            "playwright.config.ts",
            ".env",
          ],
          correctOptionIndex: 1,
          explanation:
            "package.json stores scripts and dependency declarations.",
        },
        {
          id: "q-2-070",
          text: "Which operator returns the remainder of division?",
          options: ["%", "/", "*", "+"],
          correctOptionIndex: 0,
          explanation: "% is the modulo operator returning remainder.",
        },
        {
          id: "q-2-071",
          text: "Which of these is recommended for storing secrets that should not be committed to Git?",
          options: [
            ".env (and not committed)",
            "tsconfig.json",
            "README.md",
            "tests/ folder",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use .env for environment secrets and exclude it from Git.",
        },
        {
          id: "q-2-072",
          text: "In the sample folder structure, where should test utilities live?",
          options: ["utils/", "pages/", "tests/", "fixtures/"],
          correctOptionIndex: 0,
          explanation:
            "utils/ is recommended for helpers, test data, and utilities.",
        },
        {
          id: "q-2-073",
          text: "Which TypeScript construct enforces a shape for objects like credentials?",
          options: ["class", "interface", "enum", "any"],
          correctOptionIndex: 1,
          explanation:
            "interface enforces an object's structure and types in TypeScript.",
        },
        {
          id: "q-2-074",
          text: "Which of these is a primitive useful for toggling conditions in tests?",
          options: ["boolean", "object", "tuple", "interface"],
          correctOptionIndex: 0,
          explanation:
            "boolean values (true/false) are used for flags and toggles.",
        },
        {
          id: "q-2-075",
          text: "Which loop is preferred to iterate arrays in TypeScript for test data?",
          options: ["for...in", "for...of", "while", "do-while"],
          correctOptionIndex: 1,
          explanation:
            "for...of is preferred for iterating over iterable objects like arrays.",
        },
        {
          id: "q-2-076",
          text: "Which command generates a default tsconfig for you?",
          options: [
            "npx tsc --init",
            "npm tsc init",
            "playwright tsc",
            "tsc init",
          ],
          correctOptionIndex: 0,
          explanation: "npx tsc --init creates a tsconfig.json file.",
        },
        {
          id: "q-2-077",
          text: "Scenario: You want a sample login.spec.ts that opens example.com. Which folder should the spec be placed in per the doc?",
          options: ["pages/", "tests/", "utils/", "fixtures/"],
          correctOptionIndex: 1,
          explanation:
            "Place test specs like login.spec.ts under the tests/ folder.",
        },
        {
          id: "q-2-078",
          text: "Which of the following is a TypeScript access modifier used in classes?",
          options: ["open", "private", "expose", "sealed"],
          correctOptionIndex: 1,
          explanation:
            "private is an access modifier restricting access to within the class.",
        },
        {
          id: "q-2-079",
          text: "Which variable declaration is function-scoped and generally discouraged?",
          options: ["let", "const", "var", "readonly"],
          correctOptionIndex: 2,
          explanation:
            "var is function-scoped and typically discouraged in modern code.",
        },
        {
          id: "q-2-080",
          text: "Which TypeScript feature improves IntelliSense and detects misspelled selectors earlier?",
          options: [
            "ts-node only",
            "static typing / types and interfaces",
            "npx playwright install",
            "test.describe()",
          ],
          correctOptionIndex: 1,
          explanation:
            "Static typing via types/interfaces improves IntelliSense and catches errors earlier.",
        },
        {
          id: "q-2-081",
          text: "Which of these is a recommended practice for test data as per the exercises?",
          options: [
            "Hardcode inline in tests",
            "Store reusable data in testData.ts under utils/",
            "Commit secrets in repo",
            "Write credentials in README",
          ],
          correctOptionIndex: 1,
          explanation:
            "Use a testData.ts file for centralized reusable test data.",
        },
        {
          id: "q-2-082",
          text: "Which operator would you use to add and assign in one step (e.g., x = x + 5)?",
          options: ["x += 5", "x =+ 5", "x ++ 5", "x = x +5 only"],
          correctOptionIndex: 0,
          explanation: "x += 5 increments x by 5 and assigns the result to x.",
        },
        {
          id: "q-2-083",
          text: "Which TypeScript keyword would you use to define a reusable function that returns a Promise<void>?",
          options: [
            "function",
            "async function",
            "const fn = () =>",
            "export default",
          ],
          correctOptionIndex: 1,
          explanation:
            "async function declares a function that returns a Promise; combined with typing you can return Promise<void>.",
        },
        {
          id: "q-2-084",
          text: "Scenario: You need a baseTest fixture shared across tests. In which folder does the document suggest placing it?",
          options: ["fixtures/", "pages/", "tests/", "utils/"],
          correctOptionIndex: 0,
          explanation:
            "A baseTest fixture is suggested to live in fixtures/ (e.g., fixtures/baseTest.ts).",
        },
        {
          id: "q-2-085",
          text: "Which file often contains project README and documentation?",
          options: [
            "README.md",
            "playwright.config.ts",
            "package-lock.json",
            "node_modules/",
          ],
          correctOptionIndex: 0,
          explanation: "README.md is commonly used for project documentation.",
        },
        {
          id: "q-2-086",
          text: "Which TypeScript construct would you use to define a fixed-length heterogeneous collection (e.g., statusCode and message)?",
          options: ["array", "tuple", "object", "class"],
          correctOptionIndex: 1,
          explanation:
            "A tuple like [number, string] suits fixed-length heterogeneous data.",
        },
        {
          id: "q-2-087",
          text: "Which is the proper sequence to create a Playwright TS project (per doc)?",
          options: [
            "npm init -y → install deps → npx playwright install → npx tsc --init",
            "npx playwright install → npm init -y → tsc init",
            "Install browsers first → init project",
            "Just write tests first",
          ],
          correctOptionIndex: 0,
          explanation:
            "The recommended flow is initialize package.json, install deps, install browsers, and initialize tsconfig.",
        },
        {
          id: "q-2-088",
          text: "Which TypeScript container type best models JSON-like structured data with named properties?",
          options: ["array", "object / interface", "tuple", "primitive"],
          correctOptionIndex: 1,
          explanation:
            "Objects and interfaces model structured key-value data.",
        },
        {
          id: "q-2-089",
          text: "Which TypeScript feature improves large-scale refactoring and IDE support?",
          options: ["var", "any", "interfaces & types", "inline strings only"],
          correctOptionIndex: 2,
          explanation:
            "Interfaces and typed definitions help refactoring and editor tooling.",
        },
        {
          id: "q-2-090",
          text: "Which command runs the example.spec.ts created by Playwright init?",
          options: [
            "npx playwright test example.spec.ts",
            "npm run example",
            "playwright run example",
            "node example.spec.ts",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx playwright test example.spec.ts runs a specific test file.",
        },
      ],
    },
    {
      id: "sec-3",
      title:
        "Module 3 — Advanced TypeScript Concepts (Loops, Arrays, Tuples, OOP)",
      questions: [
        {
          id: "q-3-091",
          text: "Which loop iterates over an array's values (recommended)?",
          options: ["for...in", "for...of", "forEach only", "while"],
          correctOptionIndex: 1,
          explanation:
            "for...of iterates over the values of an iterable, e.g., arrays.",
        },
        {
          id: "q-3-092",
          text: "Which loop iterates over object keys?",
          options: ["for...of", "for...in", "while", "do-while"],
          correctOptionIndex: 1,
          explanation: "for...in iterates over enumerable object keys.",
        },
        {
          id: "q-3-093",
          text: "Which array method adds an item to the end of an array?",
          options: ["pop()", "push()", "shift()", "slice()"],
          correctOptionIndex: 1,
          explanation: "push() appends an item at the end of an array.",
        },
        {
          id: "q-3-094",
          text: "Which array method removes the first element?",
          options: ["pop()", "shift()", "unshift()", "splice()"],
          correctOptionIndex: 1,
          explanation: "shift() removes and returns the first element.",
        },
        {
          id: "q-3-095",
          text: "What is a tuple in TypeScript?",
          options: [
            "Array with dynamic types only",
            "Array with fixed length and types",
            "An object alias",
            "A function type",
          ],
          correctOptionIndex: 1,
          explanation:
            "Tuples are arrays with fixed length and specified types for each index.",
        },
        {
          id: "q-3-096",
          text: "Which of the following is an example tuple for an API response?",
          options: [
            "[200, 'OK']",
            "{status:200}",
            "['OK',200]",
            "Array<string>",
          ],
          correctOptionIndex: 0,
          explanation:
            "[200, 'OK'] is a tuple storing status code and message.",
        },
        {
          id: "q-3-097",
          text: "Scenario: You need to run a login test across three browsers. Which code pattern is suitable?",
          options: [
            "for (const browser of ['chromium','firefox','webkit']) { ... }",
            "Call npx thrice manually",
            "Use a single browser always",
            "Use Selenium Grid",
          ],
          correctOptionIndex: 0,
          explanation:
            "Iterating through ['chromium','firefox','webkit'] runs the flow across each browser.",
        },
        {
          id: "q-3-098",
          text: "Which TS feature helps declare the shape of a user object: name, email, role?",
          options: [
            "class only",
            "interface User { name:string; email:string; role:string }",
            "tuple",
            "enum",
          ],
          correctOptionIndex: 1,
          explanation: "interface defines a structured type for objects.",
        },
        {
          id: "q-3-099",
          text: "Which OOP concept is used to hide internal details of a Page object (e.g., password)?",
          options: [
            "Inheritance",
            "Encapsulation with private members",
            "Polymorphism",
            "Global variables",
          ],
          correctOptionIndex: 1,
          explanation:
            "Encapsulation (private members) hides internal details and exposes only methods.",
        },
        {
          id: "q-3-100",
          text: "Which is a valid TypeScript class constructor signature for a LoginPage that takes a Page?",
          options: [
            "constructor(private page: Page) {}",
            "constructor(Page) {}",
            "class LoginPage(Page) {}",
            "new LoginPage() => {}",
          ],
          correctOptionIndex: 0,
          explanation:
            "constructor(private page: Page) {} is valid TypeScript and stores page as a private member.",
        },
        {
          id: "q-3-101",
          text: "Which access modifier allows derived classes to access the member but prevents external access?",
          options: ["public", "private", "protected", "readonly"],
          correctOptionIndex: 2,
          explanation:
            "protected allows access within the class and its subclasses.",
        },
        {
          id: "q-3-102",
          text: "Which method is used to add a todo item via keyboard Enter in an example function?",
          options: [
            "page.fill() then page.keypress('Enter')",
            "page.keyboard.press('Enter') after fill",
            "Both patterns shown; typically fill() then keyboard.press('Enter')",
            "Use submit() only",
          ],
          correctOptionIndex: 2,
          explanation:
            "Typically fill the input and then use keyboard.press('Enter') to submit.",
        },
        {
          id: "q-3-103",
          text: "Which array method returns a new array concatenating two arrays?",
          options: ["concat()", "join()", "map()", "reduce()"],
          correctOptionIndex: 0,
          explanation: "concat() returns a new combined array from two arrays.",
        },
        {
          id: "q-3-104",
          text: "Which loop guarantees at least one execution before condition checking?",
          options: ["for", "while", "do-while", "for...of"],
          correctOptionIndex: 2,
          explanation:
            "do-while executes its block once before testing the condition.",
        },
        {
          id: "q-3-105",
          text: "What is the benefit of using classes (POM) in Playwright tests?",
          options: [
            "Couples tests and locators tightly",
            "Promotes code reuse and encapsulation",
            "Prevents running tests in parallel",
            "Makes tests slower",
          ],
          correctOptionIndex: 1,
          explanation:
            "Classes (POM) promote reuse, encapsulation and maintainability.",
        },
        {
          id: "q-3-106",
          text: "Which TypeScript keyword defines an object type alias to use across the codebase?",
          options: ["type", "object", "interface", "alias"],
          correctOptionIndex: 0,
          explanation:
            "type can define a type alias (interface is also common for object shapes).",
        },
        {
          id: "q-3-107",
          text: "Which statement about 'private password' inside a class is true?",
          options: [
            "It can be accessed from anywhere",
            "It's only accessible inside the class",
            "It is visible in subclass",
            "It becomes a global variable",
          ],
          correctOptionIndex: 1,
          explanation:
            "private members are accessible only within their declaring class.",
        },
        {
          id: "q-3-108",
          text: "Scenario: Build a helper that returns a masked password (same length as original). Which technique is used in example?",
          options: [
            "'*'.repeat(password.length)",
            "substring only",
            "base64 encode",
            "json stringify",
          ],
          correctOptionIndex: 0,
          explanation:
            "Using '*'.repeat(length) masks the password keeping the same length.",
        },
        {
          id: "q-3-109",
          text: "Which TypeScript construct is best to enforce login credential shapes for functions?",
          options: [
            "enum",
            "interface Credentials { username:string; password:string }",
            "tuple",
            "any",
          ],
          correctOptionIndex: 1,
          explanation:
            "interface enforces the structure of credential objects.",
        },
        {
          id: "q-3-110",
          text: "Which pattern allows a base page class to share a logout() method across pages?",
          options: [
            "Inheritance (extend BasePage)",
            "Copy-paste method into every page",
            "Global function only",
            "Use test hooks",
          ],
          correctOptionIndex: 0,
          explanation:
            "Inheritance (BasePage extended by DashboardPage) allows reusing logout() method.",
        },
        {
          id: "q-3-111",
          text: "Which of these TypeScript looping constructs would you use to iterate numeric index with ability to mutate index?",
          options: ["for loop", "for...of", "for...in", "map"],
          correctOptionIndex: 0,
          explanation:
            "Classic for loops give index control and mutability during iteration.",
        },
        {
          id: "q-3-112",
          text: "Which property type should you use for counters that will not be reassigned?",
          options: ["let", "const", "var", "readonly"],
          correctOptionIndex: 1,
          explanation:
            "Use const for variables that shouldn't be reassigned; for counters that change, use let.",
        },
        {
          id: "q-3-113",
          text: "Which array method iterates but does not return a new array (commonly used to log steps)?",
          options: ["map()", "filter()", "forEach()", "reduce()"],
          correctOptionIndex: 2,
          explanation:
            "forEach executes a callback for each item but returns undefined.",
        },
        {
          id: "q-3-114",
          text: "Which TypeScript type is returned by an async function that does not return a value?",
          options: ["void", "Promise<void>", "Promise", "any"],
          correctOptionIndex: 1,
          explanation:
            "An async function with no return resolves to Promise<void>.",
        },
        {
          id: "q-3-115",
          text: "Scenario: You must validate table rows values; which tuple-driven pattern helps test multiple rows?",
          options: [
            "const tableRows: [string,string[]][] = [...] and iterate",
            "Use nested for loops only",
            "Use single expect per row only",
            "Hardcode assertions individually",
          ],
          correctOptionIndex: 0,
          explanation:
            "Using tuples like [rowSelector, expectedCells[]] and iterating makes table validation concise and scalable.",
        },
        {
          id: "q-3-116",
          text: "Which TypeScript feature helps enforce that an object has certain methods or properties without implementation?",
          options: ["interface", "class", "tuple", "any"],
          correctOptionIndex: 0,
          explanation:
            "Interfaces can declare required members without implementation.",
        },
        {
          id: "q-3-117",
          text: "Which OOP principle is achieved when BasePage exposes methods and hides locators inside the class?",
          options: [
            "Polymorphism",
            "Encapsulation",
            "Inheritance",
            "Abstraction",
          ],
          correctOptionIndex: 1,
          explanation:
            "Encapsulation hides implementation details and exposes a clean API.",
        },
        {
          id: "q-3-118",
          text: "Which TypeScript collection type would you use to store a queue where you add to the end and remove from front?",
          options: ["Set", "Stack", "Array with push()/shift()", "Map"],
          correctOptionIndex: 2,
          explanation: "Arrays with push() and shift() can implement a queue.",
        },
        {
          id: "q-3-119",
          text: "Which TypeScript construct should you choose to model a set of named constant values like roles (admin, user)?",
          options: ["type alias string union", "enum", "tuple", "any"],
          correctOptionIndex: 1,
          explanation:
            "enum or string unions can model named constant sets; enums are common for roles.",
        },
        {
          id: "q-3-120",
          text: "Which keyword in a class marks a property readable but not assignable after initialization?",
          options: ["private", "readonly", "protected", "static"],
          correctOptionIndex: 1,
          explanation:
            "readonly marks properties that cannot be reassigned after initialization.",
        },
        {
          id: "q-3-121",
          text: "Scenario: You need to implement addTodo reusable function. Which signature is most appropriate in TS?",
          options: [
            "async function addTodo(page: Page, task: string): Promise<void>",
            "function addTodo(task) {}",
            "addTodo(page) => string",
            "private addTodo()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use async function with typed parameters and a Promise<void> return for Playwright interactions.",
        },
        {
          id: "q-3-122",
          text: "Which array method should you use to remove the last element?",
          options: ["shift()", "pop()", "slice()", "splice()"],
          correctOptionIndex: 1,
          explanation:
            "pop() removes and returns the last element from an array.",
        },
        {
          id: "q-3-123",
          text: "Which statement is true about tuple destructuring used in examples for locators + expected text?",
          options: [
            "You cannot destructure tuples",
            "for (const [selector, expected] of expectedText) { ... } is valid",
            "Use JSON.parse only",
            "Tuples are immutable only",
          ],
          correctOptionIndex: 1,
          explanation:
            "Tuple destructuring like [selector, expected] works in for...of loops.",
        },
        {
          id: "q-3-124",
          text: "Which TypeScript concept helps ensure that a page object's method signatures are consistent across POM classes?",
          options: [
            "interface for pages",
            "enum for methods",
            "tuple for pages",
            "any",
          ],
          correctOptionIndex: 0,
          explanation:
            "Interfaces can define method contracts that page classes implement.",
        },
        {
          id: "q-3-125",
          text: "Which TypeScript keyword is used to create a class property that is accessible without instantiation?",
          options: ["instance", "global", "static", "public"],
          correctOptionIndex: 2,
          explanation:
            "static defines class-level properties accessible without creating an instance.",
        },
        {
          id: "q-3-126",
          text: "Which data structure is best for mapping selectors to expected text in tests?",
          options: ["Array of tuples", "Single string", "Number map", "Set"],
          correctOptionIndex: 0,
          explanation:
            "Array of tuples pairs selectors with expected texts and is easy to iterate.",
        },
        {
          id: "q-3-127",
          text: "Which method in a class would be a natural place to put page.goto(baseUrl) for a login page object?",
          options: [
            "constructor",
            "navigate()",
            "private helper only",
            "toString()",
          ],
          correctOptionIndex: 1,
          explanation:
            "A navigate() method encapsulates the goto behavior for the page object.",
        },
        {
          id: "q-3-128",
          text: "Which pattern helps reduce duplicated locator strings across tests?",
          options: [
            "Hardcode in every test",
            "Page Object Model storing locators in class",
            "Use global variables only",
            "Use runtime string concatenation everywhere",
          ],
          correctOptionIndex: 1,
          explanation:
            "POM centralizes locators and behaviors to reduce duplication.",
        },
        {
          id: "q-3-129",
          text: "Which collection is ideal to hold unique test names to ensure no duplicates?",
          options: ["Array", "Set", "Object", "Tuple"],
          correctOptionIndex: 1,
          explanation: "Set enforces uniqueness of its elements.",
        },
        {
          id: "q-3-130",
          text: "Scenario: You want to mask a password property in a class but still accept it on construction. Which approach is suggested?",
          options: [
            "Store in private field and expose getMaskedPassword()",
            "Store publicly and hide in logs only",
            "Encrypt in source code",
            "Use global variable",
          ],
          correctOptionIndex: 0,
          explanation:
            "Using a private field with a masked getter provides encapsulation and safe exposure.",
        },
      ],
    },
    {
      id: "sec-4",
      title: "Module 4 — Installing Playwright & Setup",
      questions: [
        {
          id: "q-4-131",
          text: "Which command will install Playwright browser binaries after package install?",
          options: [
            "npm i playwright-browsers",
            "npx playwright install",
            "playwright install",
            "npm playwright install",
          ],
          correctOptionIndex: 1,
          explanation:
            "npx playwright install downloads Chromium, Firefox, and WebKit binaries.",
        },
        {
          id: "q-4-132",
          text: "The document recommends adding which folders to .gitignore?",
          options: [
            "/test-results and /.playwright",
            "/tests and /pages",
            "/src only",
            "/package.json",
          ],
          correctOptionIndex: 0,
          explanation:
            "Ignore test artifacts (/test-results) and browser caches (/ .playwright).",
        },
        {
          id: "q-4-133",
          text: "Which command initializes Playwright Test Runner and example tests?",
          options: [
            "npx playwright test init",
            "npm init playwright@latest",
            "npx playwright codegen",
            "npx playwright install",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx playwright test init sets up the test runner and example files.",
        },
        {
          id: "q-4-134",
          text: "Which minimum npm version is recommended in the document?",
          options: ["npm 6", "npm 7", "npm 9+", "npm 5"],
          correctOptionIndex: 2,
          explanation: "The doc recommends npm v9+.",
        },
        {
          id: "q-4-135",
          text: "Which OS-level step is recommended before installing Playwright?",
          options: [
            "Install Node.js LTS",
            "Install Java",
            "Install Python only",
            "Install Docker",
          ],
          correctOptionIndex: 0,
          explanation:
            "Install an LTS Node.js version before setting up Playwright.",
        },
        {
          id: "q-4-136",
          text: "Which command runs all tests under the tests folder?",
          options: [
            "npx playwright test ./tests",
            "npx playwright test",
            "npm test only",
            "playwright run ./tests",
          ],
          correctOptionIndex: 1,
          explanation:
            "npx playwright test runs tests found under tests by default.",
        },
        {
          id: "q-4-137",
          text: "Which package is typically a dev dependency for Playwright TypeScript projects?",
          options: [
            "@playwright/test",
            "express",
            "typescript-eslint",
            "react",
          ],
          correctOptionIndex: 0,
          explanation:
            "@playwright/test is the Playwright test runner package used as a dev dependency.",
        },
        {
          id: "q-4-138",
          text: "Which command will run Playwright tests in headed mode (showing browser UI)?",
          options: [
            "npx playwright test --headed",
            "npx playwright test --headless",
            "npx playwright show-trace",
            "npx playwright codegen",
          ],
          correctOptionIndex: 0,
          explanation: "--headed runs tests with a visible browser window.",
        },
        {
          id: "q-4-139",
          text: "Scenario: You want interactive UI to debug tests. Which Playwright flag launches the test runner UI?",
          options: ["--ui", "--debug", "--record", "--trace"],
          correctOptionIndex: 0,
          explanation:
            "npx playwright test --ui launches Playwright's interactive UI mode.",
        },
        {
          id: "q-4-140",
          text: "Which command starts the Playwright code generator for a specific URL?",
          options: [
            "npx playwright codegen https://example.com",
            "npx playwright record",
            "npx playwright trace https://example.com",
            "npx playwright generate",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx playwright codegen https://example.com records actions and generates code.",
        },
        {
          id: "q-4-141",
          text: "Which initial command did the document show for creating a folder and initializing npm?",
          options: [
            "mkdir playwright-demo && cd playwright-demo; npm init -y",
            "playwright init",
            "create-playwright-app",
            "git init",
          ],
          correctOptionIndex: 0,
          explanation:
            "The doc uses mkdir ... && cd ... followed by npm init -y to start a project.",
        },
        {
          id: "q-4-142",
          text: "Which IDE is recommended in the prerequisites section?",
          options: ["IntelliJ IDEA", "VSCode", "Sublime Text", "Vim only"],
          correctOptionIndex: 1,
          explanation: "The document recommends Visual Studio Code (VSCode).",
        },
        {
          id: "q-4-143",
          text: "Which command will install Playwright test runner plus TypeScript support in one step as shown?",
          options: [
            "npm i -D playwright typescript ts-node @playwright/test",
            "npm install playwright --save",
            "npm i playwright-core",
            "npm i -D @playwright/test only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Install Playwright, TypeScript and ts-node as dev dependencies for TS projects.",
        },
        {
          id: "q-4-144",
          text: "Which of these steps is suggested to confirm Node is installed?",
          options: [
            "node --version",
            "npm list",
            "npx playwright test",
            "playwright -v",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use node -v or node --version to confirm Node installation.",
        },
        {
          id: "q-4-145",
          text: "Which file is created to configure TypeScript when running npx tsc --init?",
          options: [
            "playwright.config.ts",
            "tsconfig.json",
            "package.json",
            ".env",
          ],
          correctOptionIndex: 1,
          explanation: "npx tsc --init generates tsconfig.json.",
        },
        {
          id: "q-4-146",
          text: "Which of the following is recommended to run after installing Playwright so CI has browsers available?",
          options: [
            "npx playwright install",
            "npx playwright test --ci",
            "npx playwright codegen",
            "npx playwright show-report",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx playwright install is necessary to download browser binaries for CI.",
        },
        {
          id: "q-4-147",
          text: "Which command is used in the document to run a single test file?",
          options: [
            "npx playwright test sample.spec.ts",
            "npx playwright run sample",
            "playwright sample",
            "node sample.spec.ts",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx playwright test <file> runs a single specified test file.",
        },
        {
          id: "q-4-148",
          text: "Scenario: You want to test in specific browsers from the CLI. Which flag is used to select a project (browser)?",
          options: [
            "--project=chromium",
            "--browser=chromium",
            "--select=chromium",
            "--b=chromium",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use --project=chromium to run tests with the project configured for Chromium.",
        },
        {
          id: "q-4-149",
          text: "Which of the following is NOT a recommended prerequisite in the document?",
          options: [
            "Node.js v18+",
            "VSCode",
            "Git installed",
            "Java 8 installed",
          ],
          correctOptionIndex: 3,
          explanation:
            "Java is not listed as a prerequisite for Playwright in the document.",
        },
        {
          id: "q-4-150",
          text: "Which step should you take after installing dependencies to validate environment as per doc?",
          options: [
            "Run npx playwright test to execute example tests",
            "Commit node_modules",
            "Open browser manually",
            "Start a web server only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Run npx playwright test to ensure environment and example tests run correctly.",
        },
        {
          id: "q-4-151",
          text: "True or False: The document suggests committing package-lock.json to repo.",
          options: ["True", "False", "Only when using yarn", "Never"],
          correctOptionIndex: 0,
          explanation:
            "Committing package-lock.json is generally recommended to lock dependency versions.",
        },
        {
          id: "q-4-152",
          text: "Which file should not be committed if it contains environment secrets according to the doc?",
          options: [
            ".env",
            "README.md",
            "playwright.config.ts",
            "tsconfig.json",
          ],
          correctOptionIndex: 0,
          explanation:
            ".env typically holds sensitive data and should be excluded from version control.",
        },
        {
          id: "q-4-153",
          text: "Which command will show Playwright's HTML report after a test run?",
          options: [
            "npx playwright show-report",
            "npx playwright open-report",
            "npx playwright report",
            "playwright show",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx playwright show-report opens the generated HTML report.",
        },
        {
          id: "q-4-154",
          text: "Which of these is an initial step recommended to create project repo as per doc?",
          options: [
            "Create a GitHub repo and enable branch protection",
            "Use FTP to copy files",
            "Push node_modules only",
            "Use SVN",
          ],
          correctOptionIndex: 0,
          explanation:
            "The document suggests creating a repo and enabling branch protection and PR reviews.",
        },
        {
          id: "q-4-155",
          text: "Which is the recommended behavior for storing browser binaries in CI?",
          options: [
            "Run npx playwright install in CI",
            "Commit binaries to repo",
            "Use system browsers only",
            "Skip installing in CI",
          ],
          correctOptionIndex: 0,
          explanation:
            "Run npx playwright install in CI to download required browsers during pipeline runs.",
        },
        {
          id: "q-4-156",
          text: "Which script example would you add to package.json to run Playwright tests with a single command?",
          options: [
            '"test": "npx playwright test"',
            '"test": "playwright run"',
            '"test": "node tests"',
            '"test": "npm playwright"',
          ],
          correctOptionIndex: 0,
          explanation:
            'Adding "test": "npx playwright test" in package.json scripts is common practice.',
        },
        {
          id: "q-4-157",
          text: "Scenario: You need to run tests in debug mode to open Playwright inspector; which flag will you use?",
          options: ["--debug", "--inspect", "--trace", "--headed"],
          correctOptionIndex: 0,
          explanation:
            "npx playwright test --debug opens the Playwright inspector and runs in headed mode.",
        },
        {
          id: "q-4-158",
          text: "Which of these steps was shown to initialize a new TypeScript config after creating the project?",
          options: [
            "npx tsc --init",
            "npm init ts",
            "playwright tsc init",
            "tsc create",
          ],
          correctOptionIndex: 0,
          explanation: "npx tsc --init initializes a tsconfig.json file.",
        },
        {
          id: "q-4-159",
          text: "Which of these is an advantage of running Playwright tests via npx instead of globally installing playwright?",
          options: [
            "Ensures runner uses project-local packages and versions",
            "npx is always faster than global",
            "Global install is not allowed",
            "npx removes node_modules",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx runs the package from local project dependencies ensuring correct versions are used.",
        },
        {
          id: "q-4-160",
          text: "Which of these should you run to ensure browsers are present locally (document suggests)?",
          options: [
            "npx playwright install",
            "npm run browsers",
            "playwright fetch",
            "download-manual",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx playwright install downloads required browser binaries.",
        },
      ],
    },
    {
      id: "sec-5",
      title: "Module 5 — Your First Playwright Test & CLI Execution",
      questions: [
        {
          id: "q-5-161",
          text: "Which import is used at the top of typical Playwright test files?",
          options: [
            "import { describe } from 'mocha'",
            "import { test, expect } from '@playwright/test'",
            "import playwright from 'playwright-core'",
            "import test from 'jest'",
          ],
          correctOptionIndex: 1,
          explanation:
            "Playwright test files commonly import test and expect from @playwright/test.",
        },
        {
          id: "q-5-162",
          text: "To assert a page title contains 'Playwright', which expect call is used?",
          options: [
            "expect(page).toContain('Playwright')",
            "await expect(page).toHaveTitle(/Playwright/)",
            "assertTitle('Playwright')",
            "expect(page.title).toEqual('Playwright')",
          ],
          correctOptionIndex: 1,
          explanation:
            "await expect(page).toHaveTitle(/Playwright/) waits and asserts the title pattern.",
        },
        {
          id: "q-5-163",
          text: "Which object represents a single browser tab in Playwright tests?",
          options: ["Browser", "Page", "Context", "Locator"],
          correctOptionIndex: 1,
          explanation:
            "Page represents a browser tab and is the primary interaction surface for UI actions.",
        },
        {
          id: "q-5-164",
          text: "Which is the correct way to click a 'Get started' link by role?",
          options: [
            "page.getByRole('link', { name: 'Get started' }).click()",
            "page.click('Get started')",
            "page.find('Get started').press()",
            "page.locator('a').click()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Using getByRole with name is an accessible locator strategy and will click the link.",
        },
        {
          id: "q-5-165",
          text: "Which command runs only tests whose titles match a given pattern?",
          options: [
            'npx playwright test -g "pattern"',
            'npx playwright test --match "pattern"',
            "npx playwright run -t pattern",
            "playwright test --name pattern",
          ],
          correctOptionIndex: 0,
          explanation:
            "-g filters tests whose titles match the given glob or regex.",
        },
        {
          id: "q-5-166",
          text: "Scenario: You want to run an individual test file quickly. Which command should you use?",
          options: [
            "npx playwright test tests/google.spec.ts",
            "npm run test:single",
            "playwright run file",
            "node tests/google.spec.ts",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use npx playwright test <filename> to run a specific test file.",
        },
        {
          id: "q-5-167",
          text: "Which test construct groups related tests in Playwright?",
          options: [
            "describe (Jest style)",
            "test.describe()",
            "group()",
            "suite()",
          ],
          correctOptionIndex: 1,
          explanation:
            "test.describe() groups related tests in Playwright's runner.",
        },
        {
          id: "q-5-168",
          text: "Which test hook runs before each test in a describe block?",
          options: [
            "test.beforeAll()",
            "test.beforeEach()",
            "test.setup()",
            "test.init()",
          ],
          correctOptionIndex: 1,
          explanation:
            "test.beforeEach() is executed before each test in the describe scope.",
        },
        {
          id: "q-5-169",
          text: "Which is the default assertion timeout referenced in the document?",
          options: ["1 second", "3 seconds", "5 seconds", "10 seconds"],
          correctOptionIndex: 2,
          explanation:
            "By default Playwright assertion timeout for expect is 5 seconds.",
        },
        {
          id: "q-5-170",
          text: "Which command opens Playwright UI mode according to the doc?",
          options: [
            "npx playwright test --ui",
            "npx playwright open-ui",
            "npx playwright inspect",
            "npx playwright debug",
          ],
          correctOptionIndex: 0,
          explanation: "--ui starts the interactive UI runner.",
        },
        {
          id: "q-5-171",
          text: "Which of the following is a basic Playwright action to fill an input?",
          options: [
            "page.type()",
            "page.fill()",
            "locator.enter()",
            "page.setValue()",
          ],
          correctOptionIndex: 1,
          explanation:
            "page.fill() or locator.fill() focuses and fills input elements.",
        },
        {
          id: "q-5-172",
          text: "Which of these commands launches the Playwright inspector debugger?",
          options: [
            "npx playwright test --debug",
            "npx playwright test --inspect",
            "node --inspect",
            "npx playwright debug-run",
          ],
          correctOptionIndex: 0,
          explanation:
            "--debug opens Playwright inspector and runs tests step-by-step.",
        },
        {
          id: "q-5-173",
          text: "Which action auto-waits for element actionability before performing it?",
          options: [
            "locator.click()",
            "locator.forceClick()",
            "Direct DOM click",
            "document.querySelector().click()",
          ],
          correctOptionIndex: 0,
          explanation:
            "locator.click() performs actionability checks and auto-waits before clicking.",
        },
        {
          id: "q-5-174",
          text: "Which Playwright method is used to wait for navigation to a URL?",
          options: [
            "page.goto()",
            "page.waitForNavigation()",
            "page.navigateTo()",
            "page.open()",
          ],
          correctOptionIndex: 0,
          explanation:
            "page.goto() navigates to the URL and waits for load states.",
        },
        {
          id: "q-5-175",
          text: "Which of the following is the correct import for Page type used in helpers?",
          options: [
            "import { Page } from 'playwright';",
            "import { Page } from '@playwright/test';",
            "import Page from 'playwright-core';",
            "No import needed",
          ],
          correctOptionIndex: 1,
          explanation:
            "Use import { Page } from '@playwright/test' when typing helpers in Playwright tests.",
        },
        {
          id: "q-5-176",
          text: "Which of the following describes an actionable element for click in Playwright checks?",
          options: [
            "Visible, stable, receives events, enabled",
            "Hidden, animated, disabled",
            "Only visible regardless of stability",
            "Only in DOM is enough",
          ],
          correctOptionIndex: 0,
          explanation:
            "Actionability checks require visibility, stability, event reception and enabled state.",
        },
        {
          id: "q-5-177",
          text: "Which method would you use to check a checkbox by label?",
          options: [
            "page.getByLabel('Agree').check()",
            "page.click('#agree')",
            "page.getByText('Agree').check()",
            "page.toggle('agree')",
          ],
          correctOptionIndex: 0,
          explanation:
            "getByLabel('Agree').check() locates form control by label and checks it.",
        },
        {
          id: "q-5-178",
          text: "Which CLI flag runs tests in headed mode and opens browser windows?",
          options: ["--headful", "--headed", "--show", "--open"],
          correctOptionIndex: 1,
          explanation: "Use --headed to run tests with a visible browser.",
        },
        {
          id: "q-5-179",
          text: "Which test runner feature allows isolation so tests don't share cookies or storage?",
          options: [
            "Single global browser instance",
            "Browser Contexts per test",
            "Shared page across tests",
            "Use localStorage only",
          ],
          correctOptionIndex: 1,
          explanation:
            "Using separate browser contexts per test ensures isolation of cookies and storage.",
        },
        {
          id: "q-5-180",
          text: "Scenario: You want to assert that an element's text will eventually equal 'Submitted'. Which is the pattern?",
          options: [
            "await expect(page.getByTestId('status')).toHaveText('Submitted')",
            "expect(page.getByTestId('status')).toEqual('Submitted')",
            "await page.waitForTimeout(1000); expect(...)",
            "Use console.log only",
          ],
          correctOptionIndex: 0,
          explanation:
            "await expect(...).toHaveText(...) is an auto-retrying assertion that waits until the condition is met.",
        },
        {
          id: "q-5-181",
          text: "Which built-in Playwright matcher waits and retries until the condition is satisfied?",
          options: ["toBe()", "toHaveText()", "toEqual()", "toBeNull()"],
          correctOptionIndex: 1,
          explanation:
            "toHaveText() is one of Playwright's async matchers that auto-retries.",
        },
        {
          id: "q-5-182",
          text: "Which command runs tests only in the chromium project configured in playwright.config.ts?",
          options: [
            "npx playwright test --project=chromium",
            "npx playwright test --browser chromium",
            "npx playwright test --chromium-only",
            "npx playwright chromium",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use --project=chromium to run tests under the Chromium project configuration.",
        },
        {
          id: "q-5-183",
          text: "Which of the following is used to group tests run in parallel by the runner?",
          options: [
            "test.parallel()",
            "test.group()",
            "test.concurrently()",
            "test.batch()",
          ],
          correctOptionIndex: 0,
          explanation:
            "test.parallel() supports running tests in parallel where appropriate.",
        },
        {
          id: "q-5-184",
          text: "Which method would you use to navigate and assert a heading 'Installation' after clicking 'Get started'?",
          options: [
            "await page.getByRole('link',{name:'Get started'}).click(); await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible()",
            "page.click('Get started'); expect('Installation')",
            "Use codegen only",
            "assert document.title",
          ],
          correctOptionIndex: 0,
          explanation:
            "The pattern uses role locators and expect to assert the heading's visibility.",
        },
        {
          id: "q-5-185",
          text: "Which of these is an example of running tests only with a test name filter?",
          options: [
            'npx playwright test -g "has title"',
            "npx playwright test --file google.spec.ts",
            "npx playwright test --workers 1",
            "npx playwright test --headed",
          ],
          correctOptionIndex: 0,
          explanation: '-g filters tests by title pattern like "has title".',
        },
        {
          id: "q-5-186",
          text: "Which of the following is a valid action to type characters into an input?",
          options: [
            "page.type()",
            "locator.fill()",
            "page.fill() or locator.fill()",
            "page.enter()",
          ],
          correctOptionIndex: 2,
          explanation:
            "Use page.fill() or locator.fill() to set input text; page.type() simulates typing but fill() is commonly used.",
        },
        {
          id: "q-5-187",
          text: "Which Playwright feature was shown to capture timing and DOM snapshots for each action?",
          options: [
            "Trace Viewer",
            "CodeGen",
            "test.retry()",
            "page.screenshot()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Trace Viewer records DOM snapshots, timing and screenshots for each action.",
        },
        {
          id: "q-5-188",
          text: "Which of the following is a recommended locator to prefer for accessibility and resilience?",
          options: [
            "Page.getByRole()",
            "Long CSS path",
            "XPath heavy selector",
            "Absolute index-based selector",
          ],
          correctOptionIndex: 0,
          explanation:
            "Page.getByRole() reflects user perception and accessibility and is robust.",
        },
        {
          id: "q-5-189",
          text: "Which command would you use to run tests only in debug mode and step through them interactively?",
          options: [
            "npx playwright test --debug",
            "npx playwright test --inspect",
            "npx playwright debug",
            "playwright --debug",
          ],
          correctOptionIndex: 0,
          explanation:
            "--debug launches the Playwright inspector for interactive debugging.",
        },
        {
          id: "q-5-190",
          text: "Scenario: A test needs to ensure a button is enabled before clicking. Which actionability checks guarantee this by default?",
          options: [
            "Playwright's locator.click() checks enabled state among others",
            "You must manually check attribute",
            "Only visibility is checked",
            "No checks are performed",
          ],
          correctOptionIndex: 0,
          explanation:
            "locator.click() auto-checks that an element is enabled, visible, stable and receives events before clicking.",
        },
      ],
    },
    {
      id: "sec-6",
      title: "Module 6 — Playwright CodeGen (Automatic Code Generation)",
      questions: [
        {
          id: "q-6-191",
          text: "Which command launches the Playwright CodeGen for a URL?",
          options: [
            "npx playwright codegen https://example.com",
            "npx playwright gen",
            "playwright record",
            "npx playwright code --url",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx playwright codegen <url> starts recording actions and generates code for that site.",
        },
        {
          id: "q-6-192",
          text: "Which codegen option lets you generate TypeScript-targeted code?",
          options: ["--target=typescript", "--lang=ts", "--format=ts", "--ts"],
          correctOptionIndex: 0,
          explanation:
            "Use --target=typescript to generate TypeScript code from codegen.",
        },
        {
          id: "q-6-193",
          text: "Which codegen option saves the recording into a file automatically?",
          options: ["--output or -o", "--save", "--write", "--file"],
          correctOptionIndex: 0,
          explanation:
            "--output (or -o) specifies the file to save recorded script.",
        },
        {
          id: "q-6-194",
          text: "Which codegen option simulates a specific device during recording?",
          options: [
            '--device="iPhone 12"',
            "--emulate-device",
            "--mobile",
            "--ua-device",
          ],
          correctOptionIndex: 0,
          explanation:
            'Use --device="Device Name" to emulate devices in codegen.',
        },
        {
          id: "q-6-195",
          text: "Scenario: You want to record with a specific viewport size. Which codegen flag does that?",
          options: [
            "--viewport-size=1366,768",
            "--size=1366x768",
            "--vp=1366x768",
            "--screen=1366,768",
          ],
          correctOptionIndex: 0,
          explanation:
            "--viewport-size allows specifying viewport size during recording.",
        },
        {
          id: "q-6-196",
          text: "Which two windows open when codegen runs?",
          options: [
            "Only browser window",
            "Browser window and Playwright Inspector",
            "Only terminal logs",
            "Browser and VSCode",
          ],
          correctOptionIndex: 1,
          explanation:
            "Codegen opens the browser window and the Playwright Inspector showing generated code.",
        },
        {
          id: "q-6-197",
          text: "Which codegen feature helps create assertions by clicking an icon then clicking the element?",
          options: [
            "Assertion generator in Playwright Inspector",
            "Manual writing only",
            "Auto-assert plugin",
            "test.assert() helper",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright Inspector lets you generate assertions (visibility, text, value) by interacting with UI.",
        },
        {
          id: "q-6-198",
          text: "Which of these is a recommended use of codegen according to the doc?",
          options: [
            "Bootstrap tests and learn syntax",
            "Replace all manual test writing",
            "Use it to run tests in CI",
            "Never edit generated code",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use codegen to bootstrap tests and learn how actions translate to code; customize after recording.",
        },
        {
          id: "q-6-199",
          text: "Which of these is a limitation of codegen that the doc hints you should be mindful of?",
          options: [
            "It produces perfect production-ready tests without changes",
            "Generated code often needs refinement and assertions added",
            "It cannot record clicks",
            "It writes only Python",
          ],
          correctOptionIndex: 1,
          explanation:
            "Generated code typically needs customization and robust assertions for maintainability.",
        },
        {
          id: "q-6-200",
          text: "Which of the following describes the codegen --target=python usage?",
          options: [
            "Generates Python test script",
            "Generates TypeScript only",
            "Not supported",
            "Generates shell script",
          ],
          correctOptionIndex: 0,
          explanation: "--target=python generates a Python test script.",
        },
        {
          id: "q-6-201",
          text: "Which codegen option would let you save recording as example.spec.ts with Pixel 5 device emulation?",
          options: [
            "npx playwright codegen https://google.com --target=typescript --output=example.spec.ts --device='Pixel 5'",
            "npx playwright codegen --save example.spec.ts",
            "playwright codegen --ts --device Pixel5",
            "npx codegen --typescript",
          ],
          correctOptionIndex: 0,
          explanation:
            "This command uses --target, --output and --device flags to record with a device and save as TypeScript.",
        },
        {
          id: "q-6-202",
          text: "Which of these is NOT an option in CodeGen described in the doc?",
          options: [
            "--target",
            "--output",
            "--viewport-size",
            "--auto-refactor",
          ],
          correctOptionIndex: 3,
          explanation:
            "--auto-refactor is not listed; codegen supports target, output and viewport-size among others.",
        },
        {
          id: "q-6-203",
          text: "Scenario: You recorded a script and want to incorporate it into tests. What should you do next?",
          options: [
            "Paste code into a .spec.ts file and refine locators/assertions",
            "Commit generated code as-is without changes",
            "Run it in production",
            "Delete the generated file",
          ],
          correctOptionIndex: 0,
          explanation:
            "Generated code should be refined, improved for resilience and included as a spec file.",
        },
        {
          id: "q-6-204",
          text: "Which type of assertion can Playground inspector generate when you click 'assert value'?",
          options: [
            "toHaveValue()",
            "toBeTruthy()",
            "toEqual()",
            "toBeVisible()",
          ],
          correctOptionIndex: 0,
          explanation:
            "The inspector can generate value-specific assertions like toHaveValue().",
        },
        {
          id: "q-6-205",
          text: "Which of these is a valid reason to use CodeGen in a tutorial or learning scenario?",
          options: [
            "It shows how UI actions map to Playwright API calls",
            "It hides the API entirely",
            "It obfuscates selectors",
            "It prevents editing",
          ],
          correctOptionIndex: 0,
          explanation:
            "Codegen demonstrates how user interactions translate into API calls, which helps learning.",
        },
        {
          id: "q-6-206",
          text: "Which command would you use to generate code for a site and automatically save it to login.spec.ts?",
          options: [
            "npx playwright codegen https://your-app --output=login.spec.ts",
            "npx playwright record --save=login.spec.ts",
            "playwright capture --file login.spec.ts",
            "npx playwright gen login.spec.ts",
          ],
          correctOptionIndex: 0,
          explanation: "Use --output to save the generated script to a file.",
        },
        {
          id: "q-6-207",
          text: "Which of these codegen options is useful for reproducing mobile behavior?",
          options: ["--device", "--mobile-only", "--mobile-emulate", "--ua"],
          correctOptionIndex: 0,
          explanation:
            "--device emulates a specific mobile device profile during recording.",
        },
        {
          id: "q-6-208",
          text: "Which practice is recommended after generating a test with codegen?",
          options: [
            "Add proper assertions, refactor locators and add POMs",
            "Use generated code only for one-off scripts",
            "Never edit generated code",
            "Remove all waits only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Refactor generated code into stable locators, add assertions and POMs to make it maintainable.",
        },
        {
          id: "q-6-209",
          text: "Scenario: Generated script uses text locators that are fragile. Which locator strategies should you prefer instead?",
          options: [
            "role or data-testid based locators",
            "XPath chains only",
            "Absolute CSS path",
            "Inline coordinates",
          ],
          correctOptionIndex: 0,
          explanation:
            "Prefer role-based or test id locators for accessibility and resilience.",
        },
        {
          id: "q-6-210",
          text: "Which of the following is an immediate benefit of using codegen when starting a new test suite?",
          options: [
            "Quickly bootstrap end-to-end flows and learn exact selectors",
            "Removes need for test design",
            "Guarantees flaky-free tests",
            "Requires no developer review",
          ],
          correctOptionIndex: 0,
          explanation:
            "Codegen bootstraps tests quickly and reveals the selectors and steps used.",
        },
        {
          id: "q-6-211",
          text: "Which codegen flag helps set an initial browser viewport used during recording?",
          options: ["--viewport-size", "--screen-size", "--view", "--vp"],
          correctOptionIndex: 0,
          explanation:
            "--viewport-size sets the browser window size during recording.",
        },
        {
          id: "q-6-212",
          text: "Which of the following is an advantage of recording assertions via the Inspector toolbar?",
          options: [
            "It inserts useful starting assertions you can refine",
            "It auto-fixes flaky locators",
            "It removes the need for test data",
            "It automatically refactors to POMs",
          ],
          correctOptionIndex: 0,
          explanation:
            "The Inspector can auto-generate basic assertions which should be refined later.",
        },
        {
          id: "q-6-213",
          text: "Which command would you NOT use during codegen flows?",
          options: [
            "npx playwright codegen",
            "npx playwright test --ui",
            "npx playwright show-report",
            "npx playwright install",
          ],
          correctOptionIndex: 2,
          explanation:
            "show-report is for viewing reports, not part of recording; codegen and install are used for recording and setup.",
        },
        {
          id: "q-6-214",
          text: "True or False: CodeGen output should be considered a final production-ready test without modification.",
          options: ["True", "False", "Only for Python", "Only for Java"],
          correctOptionIndex: 1,
          explanation:
            "Generated scripts usually need refinement and stabilization for production use.",
        },
        {
          id: "q-6-215",
          text: "Which tool shows you generated code in near real-time while you interact with the browser?",
          options: [
            "Playwright Inspector (CodeGen)",
            "Trace Viewer",
            "npx playwright test --debug",
            "VSCode Live Share",
          ],
          correctOptionIndex: 0,
          explanation:
            "CodeGen opens the inspector that shows generated code as you interact with the UI.",
        },
      ],
    },
    {
      id: "sec-7",
      title: "Module 7 — Trace Viewer Deep Dive",
      questions: [
        {
          id: "q-7-216",
          text: "What is the primary function of the Trace Viewer?",
          options: [
            "Record unit tests",
            "Visually replay and inspect test runs including screenshots, logs and network events",
            "Generate code from traces",
            "Run tests faster",
          ],
          correctOptionIndex: 1,
          explanation:
            "Trace Viewer replays traces showing steps, screenshots, logs and network events for debugging.",
        },
        {
          id: "q-7-217",
          text: "Which artifact does Playwright generate when tracing is enabled?",
          options: [
            ".trace file or trace.zip",
            ".log only",
            ".report.html only",
            "binary blob only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Tracing generates .zip trace files which can be opened in Trace Viewer.",
        },
        {
          id: "q-7-218",
          text: "Which flag allows you to record traces for all retries and runs (heavy on performance)?",
          options: [
            "'on-all-retries'",
            "'on-first-retry'",
            "'off'",
            "'retain-on-failure'",
          ],
          correctOptionIndex: 0,
          explanation:
            "'on-all-retries' records traces for all retries but is performance heavy.",
        },
        {
          id: "q-7-219",
          text: "Which Trace Viewer tab shows DOM snapshots before and after actions?",
          options: [
            "Actions tab",
            "Snapshots tab",
            "Network tab",
            "Console tab",
          ],
          correctOptionIndex: 1,
          explanation:
            "Snapshots tab displays DOM snapshots for actions (before/action/after).",
        },
        {
          id: "q-7-220",
          text: "Which option records traces only when a test fails or is retried for the first time?",
          options: [
            "trace: 'on-first-retry'",
            "trace: 'on'",
            "trace: 'retain-on-failure'",
            "trace: 'off'",
          ],
          correctOptionIndex: 0,
          explanation:
            "'on-first-retry' is for recording traces only on the first retry, helping debug flakiness.",
        },
        {
          id: "q-7-221",
          text: "Which Trace Viewer tab shows network requests made during the test?",
          options: ["Network tab", "Actions tab", "Source tab", "Metadata tab"],
          correctOptionIndex: 0,
          explanation:
            "Network tab lists and details all network requests captured in the trace.",
        },
        {
          id: "q-7-222",
          text: "Which Trace Viewer feature lets you filter console logs to only those made during selected actions?",
          options: [
            "Timeline slider selection",
            "Type filter only",
            "Log grep",
            "Auto-filter disabled",
          ],
          correctOptionIndex: 0,
          explanation:
            "The timeline slider filters actions and the console to only show logs within that range.",
        },
        {
          id: "q-7-223",
          text: "Which trace option keeps traces for failed tests but avoids traces for successful tests?",
          options: ["'retain-on-failure'", "'on-all-retries'", "'off'", "'on'"],
          correctOptionIndex: 0,
          explanation:
            "'retain-on-failure' keeps traces for failures but avoids capturing for passing tests.",
        },
        {
          id: "q-7-224",
          text: "Which command allows viewing a remote trace URL in Trace Viewer?",
          options: [
            "npx playwright show-trace <url>",
            "npx playwright open-trace <url>",
            "npx playwright trace-view <url>",
            "playwright open <url>",
          ],
          correctOptionIndex: 0,
          explanation:
            "npx playwright show-trace <url> opens remote traces directly in Trace Viewer.",
        },
        {
          id: "q-7-225",
          text: "Which metadata does the Trace Viewer show next to actions?",
          options: [
            "Browser, viewport size, test duration and more",
            "Only browser name",
            "Only test name",
            "No metadata",
          ],
          correctOptionIndex: 0,
          explanation:
            "The Metadata panel shows browser, viewport size, test duration and related info.",
        },
        {
          id: "q-7-226",
          text: "Scenario: You want to record a trace inside a test programmatically. Which API is used?",
          options: [
            "context.tracing.start({screenshots:true, snapshots:true}); ... context.tracing.stop({path:'trace.zip'})",
            "page.trace.start()",
            "test.trace()",
            "trace.start() global",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use context.tracing.start/stop with options and a path to create a trace.zip programmatically.",
        },
        {
          id: "q-7-227",
          text: "Which Trace Viewer tab shows source code and highlights the action's line?",
          options: [
            "Source tab",
            "Actions tab",
            "Console tab",
            "Attachments tab",
          ],
          correctOptionIndex: 0,
          explanation:
            "Source tab shows the test source and highlights the line corresponding to the selected action.",
        },
        {
          id: "q-7-228",
          text: "Which Trace Viewer control lets you move backward/forward through actions and inspect DOM changes?",
          options: [
            "Actions timeline slider and step controls",
            "Only network filter",
            "Only the console",
            "No stepping",
          ],
          correctOptionIndex: 0,
          explanation:
            "Trace Viewer provides timeline controls and stepping to inspect DOM snapshots per action.",
        },
        {
          id: "q-7-229",
          text: "Which Trace Viewer feature helps compare expected vs actual screenshots for visual diffs?",
          options: [
            "Attachments tab with screenshot diffs",
            "Network tab",
            "Console tab",
            "Metadata tab",
          ],
          correctOptionIndex: 0,
          explanation:
            "Attachments tab supports comparing screenshots and viewing diffs for visual regression.",
        },
        {
          id: "q-7-230",
          text: "Which trace setting is recommended for CI to capture traces only on failing retries?",
          options: [
            "trace: 'on-first-retry'",
            "trace: 'on-all-retries'",
            "trace: 'off'",
            "trace: 'on'",
          ],
          correctOptionIndex: 0,
          explanation:
            "Configure trace: 'on-first-retry' so CI traces failing retries without heavy overhead.",
        },
        {
          id: "q-7-231",
          text: "Which Trace Viewer panel displays logs and error messages from test execution?",
          options: [
            "Console / Errors tabs",
            "Actions tab only",
            "Network only",
            "Metadata only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Console and Errors tabs show logs and error details captured during the run.",
        },
        {
          id: "q-7-232",
          text: "Which of the following is true about snapshots captured in traces?",
          options: [
            "Snapshots show DOM before/action/after each action",
            "Snapshots only include screenshots",
            "Snapshots are only for network calls",
            "Snapshots can't be inspected",
          ],
          correctOptionIndex: 0,
          explanation:
            "Snapshots capture the DOM state before, during and after actions and can be inspected.",
        },
        {
          id: "q-7-233",
          text: "Scenario: You want to upload trace files to trace.playwright.dev. Which statement is accurate?",
          options: [
            "trace.playwright.dev allows drag-and-drop and doesn't transmit data externally",
            "It uploads and shares trace data publicly by default",
            "It requires a paid account",
            "It only works with local files not URLs",
          ],
          correctOptionIndex: 0,
          explanation:
            "trace.playwright.dev accepts local traces via drag-and-drop and loads them locally in the browser.",
        },
        {
          id: "q-7-234",
          text: "Which of the following does Trace Viewer NOT show?",
          options: [
            "DOM snapshots",
            "Network request/response bodies",
            "CPU profile of the host OS",
            "Console logs",
          ],
          correctOptionIndex: 2,
          explanation:
            "Trace Viewer provides DOM snapshots, network and console logs but not the host OS CPU profile.",
        },
        {
          id: "q-7-235",
          text: "Which Trace Viewer feature shows exact Click positions and highlights DOM nodes involved in an action?",
          options: [
            "Action snapshots and filmstrip for screenshots",
            "Network tab",
            "Attachments only",
            "Metadata only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Action snapshots and the filmstrip show visual click positions and highlighted DOM nodes.",
        },
        {
          id: "q-7-236",
          text: "Which trace option should be used sparingly in CI due to performance cost?",
          options: [
            "trace: 'on'",
            "trace: 'off'",
            "trace: 'on-first-retry'",
            "trace: 'retain-on-failure'",
          ],
          correctOptionIndex: 0,
          explanation:
            "trace: 'on' records traces for all tests and is performance heavy.",
        },
        {
          id: "q-7-237",
          text: "Which trace file extension is typically produced by Playwright tracing?",
          options: [".zip", ".trace", ".log", ".json"],
          correctOptionIndex: 0,
          explanation: "Playwright exports traces as .zip archives.",
        },
        {
          id: "q-7-238",
          text: "Which Trace Viewer tab helps inspect request/response headers and bodies?",
          options: ["Network tab", "Actions tab", "Source tab", "Console tab"],
          correctOptionIndex: 0,
          explanation: "Network tab provides request and response details.",
        },
        {
          id: "q-7-239",
          text: "Which of the following is a recommended trace handling approach in CI to minimize overhead while retaining debug info?",
          options: [
            "Enable trace: 'on-first-retry' and keep traces for retried failures",
            "Always record traces for all runs",
            "Disable tracing entirely",
            "Store traces in source control",
          ],
          correctOptionIndex: 0,
          explanation:
            "on-first-retry is a balanced approach to capture traces on failures without overhead for passing tests.",
        },
        {
          id: "q-7-240",
          text: "Scenario: You want to inspect console logs from a failing test at the exact step. How would Trace Viewer help?",
          options: [
            "Use timeline to select the action which filters console to that action",
            "Trace Viewer only shows network",
            "You must rerun tests manually",
            "Console logs are not captured",
          ],
          correctOptionIndex: 0,
          explanation:
            "Selecting an action in the timeline filters console logs to those recorded during that action.",
        },
        {
          id: "q-7-241",
          text: "Which of these trace options can you enable inside tests programmatically instead of config?",
          options: [
            "context.tracing.start({screenshots:true, snapshots:true})",
            "page.enableTrace()",
            "test.startTrace()",
            "trace.record()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use context.tracing.start/stop with options to record traces inside tests.",
        },
        {
          id: "q-7-242",
          text: "Which tab shows the chronological sequence of user actions and timings in Trace Viewer?",
          options: [
            "Actions tab",
            "Console tab",
            "Network tab",
            "Metadata tab",
          ],
          correctOptionIndex: 0,
          explanation:
            "Actions tab lists actions with associated timings and allows timeline navigation.",
        },
        {
          id: "q-7-243",
          text: "Which Trace Viewer UI feature helps find where exactly an action performed the click on the DOM?",
          options: [
            "Action snapshot 'Action' highlighting and filmstrip",
            "Console filter only",
            "Network analyzer",
            "Source-only view",
          ],
          correctOptionIndex: 0,
          explanation:
            "Action snapshots display where Playwright clicked and the DOM element involved.",
        },
        {
          id: "q-7-244",
          text: "Which of these is a good reason to open a trace rather than re-running a failing test locally?",
          options: [
            "Trace contains the exact failing state, DOM and network when the failure occurred",
            "Traces are always faster than local runs",
            "Traces fix the bug automatically",
            "No reason",
          ],
          correctOptionIndex: 0,
          explanation:
            "Traces capture the failure state including DOM and network, aiding debugging without re-run.",
        },
        {
          id: "q-7-245",
          text: "Which setting in config ensures traces are kept on first retry in Playwright?",
          options: [
            "use: { trace: 'on-first-retry' }",
            "retries: 2 only",
            "use: { trace: 'on' }",
            "trace: 'off'",
          ],
          correctOptionIndex: 0,
          explanation:
            "Set use.trace to 'on-first-retry' in playwright.config.ts to enable trace capture on the first retry.",
        },
        {
          id: "q-7-246",
          text: "What is the recommended trace approach for a slow test that rarely fails?",
          options: [
            "Enable trace: 'on-first-retry' to capture only when it fails once",
            "Always trace the test",
            "Never trace it",
            "Convert it to unit test",
          ],
          correctOptionIndex: 0,
          explanation:
            "Tracing only on first retry balances overhead and debugging needs for rarely failing tests.",
        },
      ],
    },
    {
      id: "sec-8",
      title: "Module 8 — Locator Strategies in Playwright",
      questions: [
        {
          id: "q-8-247",
          text: "Which locator is closest to how users and assistive tech perceive elements?",
          options: [
            "Page.getByRole()",
            "CSS deep chain",
            "XPath only",
            "Absolute coordinates",
          ],
          correctOptionIndex: 0,
          explanation:
            "getByRole mirrors accessibility semantics and is resilient to implementation changes.",
        },
        {
          id: "q-8-248",
          text: "Which locator would you use to find a form field by its visual label text?",
          options: [
            "page.getByLabel('Password')",
            "page.locator('#password') only",
            "page.getByText('Password')",
            "page.getByRole('textbox')",
          ],
          correctOptionIndex: 0,
          explanation:
            "getByLabel locates form controls by their associated label text.",
        },
        {
          id: "q-8-249",
          text: "Which locator matches elements by placeholder text?",
          options: [
            "page.getByPlaceholder('email')",
            "page.getByTestId('email')",
            "page.getByText('email')",
            "page.getByRole('input')",
          ],
          correctOptionIndex: 0,
          explanation:
            "getByPlaceholder matches inputs with a specific placeholder attribute.",
        },
        {
          id: "q-8-250",
          text: "Which locator matches elements by alt attribute typically used for images?",
          options: [
            "page.getByAltText('logo')",
            "page.getByTitle('logo')",
            "page.getByText('logo')",
            "page.getByRole('img') only",
          ],
          correctOptionIndex: 0,
          explanation: "getByAltText targets images or elements with alt text.",
        },
        {
          id: "q-8-251",
          text: "Which locator should be preferred for non-interactive content like paragraphs?",
          options: [
            "page.getByText()",
            "page.getByRole('button')",
            "page.getByLabel()",
            "page.getByPlaceholder()",
          ],
          correctOptionIndex: 0,
          explanation:
            "getByText is recommended for non-interactive elements like divs and paragraphs.",
        },
        {
          id: "q-8-252",
          text: "Which locator is based on a custom attribute like data-testid by default?",
          options: [
            "page.getByTestId('directions')",
            "page.getByRole('testid')",
            "page.getByText('testid')",
            "page.getByLabel('testid')",
          ],
          correctOptionIndex: 0,
          explanation:
            "getByTestId locates elements by the data-testid attribute by default.",
        },
        {
          id: "q-8-253",
          text: "How can you change the test id attribute name globally in Playwright config?",
          options: [
            "use: { testIdAttribute: 'data-pw' }",
            "Set environment variable TEST_ID",
            "Change Playwright source",
            "Cannot change it",
          ],
          correctOptionIndex: 0,
          explanation:
            "playwright.config.ts can set use.testIdAttribute to a custom attribute name.",
        },
        {
          id: "q-8-254",
          text: "Which locator type does NOT pierce closed shadow DOM?",
          options: ["XPath", "CSS pseudo-classes", "role", "label"],
          correctOptionIndex: 0,
          explanation:
            "XPath selectors don't pierce shadow roots; other locators work across open shadow DOM.",
        },
        {
          id: "q-8-255",
          text: "Which is a Playwright-provided pseudo-class useful to match elements containing text within CSS selectors?",
          options: [
            ":has-text()",
            ":contains()",
            ":text-match()",
            ":includes()",
          ],
          correctOptionIndex: 0,
          explanation:
            ":has-text() allows CSS selectors to match elements containing the given text.",
        },
        {
          id: "q-8-256",
          text: "Which pseudo-class narrows matches only to visible elements?",
          options: [":visible", ":hidden", ":display", ":present"],
          correctOptionIndex: 0,
          explanation:
            ":visible selects only visible elements, useful to avoid hidden matches.",
        },
        {
          id: "q-8-257",
          text: "Which layout pseudo-class would you use to find an input to the right of a label 'Username'?",
          options: [
            "input:right-of(:text('Username'))",
            "input:next-to('Username')",
            "input:adjacent('Username')",
            "input:beside('Username')",
          ],
          correctOptionIndex: 0,
          explanation:
            "Layout pseudo-classes like :right-of allow positional queries relative to other elements.",
        },
        {
          id: "q-8-258",
          text: "Which method returns a Locator instance that can be chained and used repeatedly?",
          options: [
            "page.locator()",
            "document.querySelector()",
            "page.find()",
            "page.get()",
          ],
          correctOptionIndex: 0,
          explanation:
            "page.locator() returns a Locator which supports chaining and repeated actions.",
        },
        {
          id: "q-8-259",
          text: "Which selector type is discouraged for long chains because it's brittle to DOM changes?",
          options: [
            "Long CSS/XPath chains tied to structure",
            "getByRole()",
            "getByTestId()",
            "getByLabel()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Long structural CSS/XPath chains break easily when DOM changes — prefer user-facing locators.",
        },
        {
          id: "q-8-260",
          text: "Which of the following locator approaches is recommended for accessibility-aware selection?",
          options: [
            "getByRole() with name",
            "nth-match only",
            "CSS large chain only",
            "XPath only",
          ],
          correctOptionIndex: 0,
          explanation:
            "getByRole with an accessible name closely reflects how users and assistive tech perceive elements.",
        },
        {
          id: "q-8-261",
          text: "Which locator method supports chaining across frames using frameLocator?",
          options: [
            "page.frameLocator('#frame').getByRole('button')",
            "page.getByText() only",
            "document.getElementById()",
            "page.getByRole().frame()",
          ],
          correctOptionIndex: 0,
          explanation:
            "frameLocator allows chaining locators across frames and nested contexts.",
        },
        {
          id: "q-8-262",
          text: "Which locator would you use to find an element by its title attribute?",
          options: [
            "page.getByTitle('Issues count')",
            "page.getByText('Issues count')",
            "page.locator('[title]') only",
            "page.getByAltText('Issues')",
          ],
          correctOptionIndex: 0,
          explanation:
            "getByTitle targets elements with a matching title attribute.",
        },
        {
          id: "q-8-263",
          text: "Which selector type does Playwright auto-detect if you omit prefix like css= or xpath=?",
          options: [
            "CSS or XPath heuristics",
            "Only CSS",
            "Only XPath",
            "It fails",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright auto-detects CSS or XPath when prefix is omitted, using heuristics.",
        },
        {
          id: "q-8-264",
          text: "Which locator is best when you have explicit test ids defined by developers?",
          options: [
            "page.getByTestId('directions')",
            "page.getByText('directions')",
            "page.locator('div:nth-child(1)')",
            "XPath heavy selector",
          ],
          correctOptionIndex: 0,
          explanation:
            "getByTestId is designed for selectors tied to developer-provided test ids.",
        },
        {
          id: "q-8-265",
          text: "Which CSS pseudo-class picks the nth match (one-based) of selectors like :nth-match(:text('Buy'), 3)?",
          options: [":nth-match()", ":nth-of-type()", ":eq()", ":match()"],
          correctOptionIndex: 0,
          explanation:
            ":nth-match(:text('Buy'), 3) returns the third match (1-based index).",
        },
        {
          id: "q-8-266",
          text: "Which of these locator methods would you use for accessibility name assertions?",
          options: [
            "expect(locator).toHaveAccessibleName()",
            "expect(locator).toEqualName()",
            "expect(locator).toMatchName()",
            "expect(locator).toHaveAriaName()",
          ],
          correctOptionIndex: 0,
          explanation:
            "toHaveAccessibleName() asserts an element's accessible name according to ARIA.",
        },
        {
          id: "q-8-267",
          text: "Which locator is useful when you want the smallest element containing the specified text inside an ancestor?",
          options: [
            "#nav-bar :text('Home')",
            ":has-text() only",
            "getByTextOnly()",
            "None",
          ],
          correctOptionIndex: 0,
          explanation:
            "#nav-bar :text('Home') finds the smallest matching element inside #nav-bar.",
        },
        {
          id: "q-8-268",
          text: "Which Playwright pseudo-class helps match elements by closeness (within 50 CSS pixels) to an anchor element?",
          options: [":near()", ":close-to()", ":adjacent()", ":within()"],
          correctOptionIndex: 0,
          explanation:
            ":near(anchor) matches elements within a default distance (~50 CSS pixels) of the anchor.",
        },
        {
          id: "q-8-269",
          text: "Which locator method will not pierce closed shadow DOM as noted in the document?",
          options: ["XPath", "getByText()", "getByRole()", "getByTestId()"],
          correctOptionIndex: 0,
          explanation:
            "XPath does not pierce shadow roots; other locators generally work with open shadow DOM.",
        },
        {
          id: "q-8-270",
          text: "Which is a recommended step when you cannot find a robust role or test id for an element?",
          options: [
            "Use layout pseudo-classes (like :right-of) along with other qualifiers",
            "Use extremely long XPath only",
            "Use absolute pixel coordinates",
            "Skip the test",
          ],
          correctOptionIndex: 0,
          explanation:
            "Layout pseudo-classes combined with other selectors can help target ambiguous elements.",
        },
        {
          id: "q-8-272",
          text: "Which Playwright locator is recommended when you want to interact with a button that should be perceived by assistive technologies as a button?",
          options: [
            "page.locator('button')",
            "page.getByRole('button', { name: '...' })",
            "page.getByText('...')",
            "page.getByTestId('...')",
          ],
          correctOptionIndex: 1,
          explanation:
            "Use getByRole with the 'button' role and accessible name because it reflects how users and assistive tech perceive the page and is resilient to DOM changes.",
        },
        {
          id: "q-8-273",
          text: "When should you prefer Page.getByLabel() over CSS selectors?",
          options: [
            "When locating non-interactive divs",
            "When locating form controls associated with visible labels",
            "When you want the fastest possible selector (CSS is always faster)",
            "When locating images by alt text",
          ],
          correctOptionIndex: 1,
          explanation:
            "getByLabel finds form controls by their associated label text and is more resilient and user-facing than fragile CSS selectors for form fields.",
        },
        {
          id: "q-8-274",
          text: "Which locator will NOT pierce closed shadow DOM?",
          options: [
            "page.getByText()",
            "page.locator('xpath=//button')",
            "page.getByRole()",
            "page.getByTestId()",
          ],
          correctOptionIndex: 1,
          explanation:
            "XPath-based locators do not pierce shadow roots. Playwright's other locators (text/role/testid) generally work with open shadow DOM.",
        },
        {
          id: "q-8-275",
          text: "You need to click the third 'Buy' button on the page. Which of these is the recommended Playwright approach?",
          options: [
            "await page.locator(':nth-match(:text(\"Buy\"), 3)').click();",
            "await page.locator('button').locator('nth=2').click();",
            "Use a long CSS path with nth-child() to target the button",
            "Both A and B are valid; prefer A for readability",
          ],
          correctOptionIndex: 3,
          explanation:
            "Both nth-match and locator('nth=') are valid; :nth-match(:text('Buy'), 3) is readable for matching the third occurrence by text while locator('nth=') is also acceptable. Avoid long brittle CSS paths.",
        },
        {
          id: "q-8-276",
          text: "Which Playwright pseudo-class helps match an element containing specified text somewhere inside (case-insensitive, trims whitespace)?",
          options: [":contains()", ":has-text()", ":text()", ":matches()"],
          correctOptionIndex: 1,
          explanation:
            ":has-text() matches any element containing the specified text inside (case-insensitive, normalizes whitespace).",
        },
        {
          id: "q-8-277",
          text: "Scenario — The page has two identical buttons; one is invisible (display:none) and one visible. Which CSS pseudo-class makes your locator only match the visible one?",
          options: [
            "button:visible",
            "button:has-text('text'):visible",
            "button:displayed",
            "button:is-visible",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use :visible to restrict matches to elements that are considered visible by Playwright (non-empty bounding box and not display:none).",
        },
        {
          id: "q-8-278",
          text: "Which is the best practice for resilient selectors according to the document?",
          options: [
            "Use long CSS/XPath chains tied to DOM structure",
            "Prioritize user-facing attributes (roles, labels, test ids)",
            "Only use XPath for all selectors",
            "Use index-based selectors exclusively (nth-child)",
          ],
          correctOptionIndex: 1,
          explanation:
            "The document recommends prioritizing user-facing locators (role, label, test id) for resilience rather than fragile DOM-tied CSS/XPath.",
        },
        {
          id: "q-8-279",
          text: "Which Playwright locator is appropriate to find an image by its alt text?",
          options: [
            "page.getByAltText('alt...')",
            "page.getByText('alt...')",
            "page.locator('img[alt=\"...\"]')",
            "page.getByRole('image', { name: '...' })",
          ],
          correctOptionIndex: 0,
          explanation:
            "getByAltText locates images by the alt attribute. getByRole('img') can work too, but the document specifically highlights getByAltText for images.",
        },
        {
          id: "q-8-280",
          text: "What does page.getByTestId('directions') rely on by default?",
          options: [
            "aria-label attribute",
            "data-testid attribute",
            "id attribute",
            "title attribute",
          ],
          correctOptionIndex: 1,
          explanation:
            "By default getByTestId looks for the data-testid attribute. You can configure a custom attribute if desired.",
        },
        {
          id: "q-8-281",
          text: "True or False: Playwright's locator methods always re-query the DOM at the time of action, so locators remain valid after re-renders.",
          options: ["True", "False"],
          correctOptionIndex: 0,
          explanation:
            "True — locators resolve the element at the time of each action, which helps with re-renders and dynamic pages.",
        },
        {
          id: "q-8-282",
          text: "Which locator would you use to find a form input by its placeholder text?",
          options: [
            "page.getByPlaceholder('name@example.com')",
            "page.getByLabel('Email')",
            "page.getByText('Email')",
            "page.getByRole('textbox', { name: 'Email' })",
          ],
          correctOptionIndex: 0,
          explanation:
            "getByPlaceholder locates inputs by their placeholder attribute; use it when there's no label but a placeholder exists.",
        },
        {
          id: "q-8-283",
          text: "Scenario — You must select the radio input closest to the label 'Label 3'. Which layout pseudo-class + method pair is recommended?",
          options: [
            "page.locator('[type=radio]:left-of(:text(\"Label 3\"))').first().click();",
            "page.locator('input[name=\"label3Radio\"]').click();",
            "Use an absolute XPath to find the radio next to Label 3",
            "page.getByText('Label 3').click()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use layout pseudo-classes (left-of/right-of/near) combined with .first() to pick the closest match when elements are near a visible anchor text.",
        },
        {
          id: "q-8-284",
          text: "Which locator should you avoid if you need to pierce shadow DOM?",
          options: [
            "page.getByText()",
            "page.locator('xpath=...')",
            "page.getByRole()",
            "page.getByTestId()",
          ],
          correctOptionIndex: 1,
          explanation:
            "XPath doesn't pierce shadow roots; use Playwright's other locators which work with (open) shadow DOM.",
        },
        {
          id: "q-8-285",
          text: "Which pseudo-class selects the smallest element that contains specified text inside a parent (useful to avoid matching large containers)?",
          options: [
            ":has-text()",
            ":text()",
            ":nth-match()",
            ":contains-text()",
          ],
          correctOptionIndex: 1,
          explanation:
            ":text() matches the smallest element containing the specified text; :has-text() matches any element containing the text anywhere inside.",
        },
        {
          id: "q-8-286",
          text: "What will ':nth-match(:text(\"Buy\"), 3)' do?",
          options: [
            "Match the third element in the DOM",
            "Match the third element whose text contains 'Buy'",
            "Match any element containing text 'Buy'",
            "Match the first 'Buy' element and then the third child",
          ],
          correctOptionIndex: 1,
          explanation:
            "The :nth-match selector picks the nth element from matches; :nth-match(:text('Buy'), 3) matches the third element whose text contains 'Buy'.",
        },
        {
          id: "q-8-287",
          text: "True or False: Playwright's custom CSS pseudo-classes can be combined with standard CSS to create robust selectors (e.g., article:has-text('Playwright')).",
          options: ["True", "False"],
          correctOptionIndex: 0,
          explanation:
            "True — Playwright augments CSS with pseudo-classes like :has-text() and :visible that can be combined for robust queries.",
        },
        {
          id: "q-8-288",
          text: "Which is a recommended reason to use test ids (data-testid) in your app?",
          options: [
            "They are user-facing and improve accessibility",
            "They provide the most resilient way to select elements when role/text can't be used",
            "They replace the need for good semantics",
            "They are required for Playwright to work",
          ],
          correctOptionIndex: 1,
          explanation:
            "Test ids are resilient selectors for QA when user-facing locators (role/text/label) are not suitable; they are not a replacement for semantics or accessibility.",
        },
        {
          id: "q-8-289",
          text: "Scenario — The element you want is inside an iframe. Which locator approach is correct?",
          options: [
            "Use page.frameLocator('#frame').getByRole('button', { name: '...' })",
            "Use page.getByRole('button', { name: '...' }) with a CSS selector",
            "Use page.locator('iframe').click()",
            "Use document.querySelector inside the test",
          ],
          correctOptionIndex: 0,
          explanation:
            "frameLocator allows targeting elements inside frames: page.frameLocator('#frame').getByRole(...).",
        },
        {
          id: "q-8-290",
          text: "Which option config lets you change the test id attribute name used by getByTestId?",
          options: [
            "use.testIdAttribute in playwright.config.ts",
            "Selectors.setTestIdAttribute('data-pw')",
            "An environment variable PLAYWRIGHT_TEST_ID",
            "It's not configurable",
          ],
          correctOptionIndex: 1,
          explanation:
            "You can set a custom test id attribute via Selectors.setTestIdAttribute() or configure testIdAttribute in the Playwright config.",
        },
        {
          id: "q-8-291",
          text: "What should you avoid when using long CSS or XPath chains?",
          options: [
            "Using them once for prototyping",
            "Using them extensively as they are fragile to DOM changes",
            "Combining them with role locators",
            "Using them with :visible",
          ],
          correctOptionIndex: 1,
          explanation:
            "Long CSS/XPath chains are brittle and can easily break when DOM structure changes; prefer user-facing locators or test ids.",
        },
        {
          id: "q-8-292",
          text: "Which Playwright method narrows a locator to the parent element using a child filter?",
          options: [
            "locator.filter({ has: childLocator })",
            "locator.parent()",
            "locator.up()",
            "locator.closest()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use Locator.filter({ has: child }) to find a parent that contains a specific child locator; Playwright doesn't have parent()/up() helpers for this use case.",
        },
        {
          id: "q-8-293",
          text: "Scenario — You must wait until exactly 3 buttons matching 'Buy' appear. Which selector + action works?",
          options: [
            "await page.locator(':nth-match(:text(\"Buy\"), 3)').waitFor();",
            "await page.locator(':nth-match(:text(\"Buy\"), 3)').isVisible();",
            "await page.locator(':nth-match(:text(\"Buy\"), 3)').waitFor({ state: 'attached' });",
            "Use expect(page.locator(':text(\"Buy\")')).toHaveCount(3)",
          ],
          correctOptionIndex: 3,
          explanation:
            "Use expect(locator).toHaveCount(3) to wait until three elements exist. :nth-match picks a single element; to wait for count use toHaveCount.",
        },
        {
          id: "q-8-294",
          text: "Which locator type is closest to how users and assistive technologies perceive the page?",
          options: ["getByTestId", "getByRole", "getByPlaceholder", "XPath"],
          correctOptionIndex: 1,
          explanation:
            "getByRole reflects accessibility roles and accessible names, which is how assistive tech perceives the page.",
        },
        {
          id: "q-8-295",
          text: "True or False: Layout pseudo-classes like :right-of() rely on bounding client rect and ordering; they can be combined with other selectors.",
          options: ["True", "False"],
          correctOptionIndex: 0,
          explanation:
            "True — layout pseudo-classes use bounding rects and are meant to be combined with other selectors (e.g. input:right-of(:text('Username'))).",
        },
        {
          id: "q-8-296",
          text: "Which selector would best target a visible button within a #nav-bar that contains the text 'Home'?",
          options: [
            "#nav-bar button",
            '#nav-bar :text("Home"):visible',
            '#nav-bar :text("Home")',
            "page.getByText('Home')",
          ],
          correctOptionIndex: 1,
          explanation:
            "Using #nav-bar :text('Home'):visible narrows to the smallest visible element containing 'Home' inside the nav bar; it combines scope and visibility.",
        },
        {
          id: "q-8-297",
          text: "Scenario — A dynamic app renders inputs with identical labels in different sections. Which approach reduces flakiness when selecting the specific input?",
          options: [
            "Use :right-of or :near with the section heading as anchor",
            "Use global getByLabel('Name') and pick the first",
            "Use absolute XPath",
            "Use getByText('Name')",
          ],
          correctOptionIndex: 0,
          explanation:
            "Combining a layout pseudo-class (right-of/near) with an anchor element (section heading) helps target the specific input reliably.",
        },
        {
          id: "q-8-298",
          text: "Which of these is NOT an available built-in locator method listed in the document?",
          options: [
            "page.getByTitle()",
            "page.getByAltText()",
            "page.getByIcon()",
            "page.getByPlaceholder()",
          ],
          correctOptionIndex: 2,
          explanation:
            "getByIcon is not listed in the document; common ones include getByRole, getByText, getByLabel, getByPlaceholder, getByAltText, getByTitle, and getByTestId.",
        },
        {
          id: "q-8-299",
          text: "When using Locator.first() after a layout query, what behavior should you expect?",
          options: [
            "It always returns the topmost element in DOM",
            "It returns the closest match (first in the resulting matches sorted by distance)",
            "It performs an innerText comparison",
            "It picks a random matching element",
          ],
          correctOptionIndex: 1,
          explanation:
            "When used with layout pseudo-classes, results are sorted by distance to the anchor and .first() picks the closest match.",
        },
        {
          id: "q-8-300",
          text: "Which statement about matching by text is true?",
          options: [
            "Matching by text never normalizes whitespace",
            "Matching by text normalizes whitespace and can use exact or regexp matching",
            "Matching by text is case-sensitive only",
            "Text matching can't be combined with CSS selectors",
          ],
          correctOptionIndex: 1,
          explanation:
            "Text matching normalizes whitespace (collapsing runs of whitespace) and supports exact and regex matching (case-insensitive if specified).",
        },
        {
          id: "q-8-301",
          text: "You want to ensure a locator selects an enabled submit button — which approach is recommended?",
          options: [
            "page.locator('button:enabled').click()",
            "await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled(); await page.getByRole('button', { name: 'Submit' }).click();",
            "page.locator('button').click({ force: true })",
            "Use document.querySelector inside test",
          ],
          correctOptionIndex: 1,
          explanation:
            "Use an assertion to wait until the button is enabled, then perform the click. Avoid force unless absolutely necessary.",
        },
        {
          id: "q-8-302",
          text: "Which of these selectors will match elements by their title attribute?",
          options: [
            "page.getByTitle('Issues count')",
            "page.getByText('Issues count')",
            "page.locator('[title=\"Issues count\"]')",
            "Both A and C",
          ],
          correctOptionIndex: 3,
          explanation:
            "getByTitle('...') matches the title attribute; a CSS attribute selector [title='...'] also matches — both are valid.",
        },
        {
          id: "q-8-303",
          text: "Scenario — The application uses data-pw instead of data-testid. How would you configure Playwright to use it with getByTestId?",
          options: [
            "Selectors.setTestIdAttribute('data-pw')",
            "Use page.getByTestId('...') as usual; Playwright auto-detects",
            "Change all HTML to data-testid",
            "Use XPath to search for data-pw",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use Selectors.setTestIdAttribute('data-pw') (or configure in playwright.config) so getByTestId uses your custom attribute.",
        },
        {
          id: "q-8-304",
          text: "True or False: You should rely on :first-child and index-based selectors when the DOM is dynamic and reordered frequently.",
          options: ["True", "False"],
          correctOptionIndex: 1,
          explanation:
            "False — index-based DOM-dependent selectors are brittle in dynamic apps; prefer user-facing selectors or proximity-based pseudo-classes.",
        },
        {
          id: "q-8-305",
          text: "Which of these is an example of a layout pseudo-class available in Playwright?",
          options: [":above()", ":inside()", ":over()", ":on-left-of()"],
          correctOptionIndex: 0,
          explanation:
            ":above(), :below(), :left-of(), :right-of(), and :near() are layout pseudo-classes; :above() is the correct example.",
        },
        {
          id: "q-8-306",
          text: "Which technique is best to select a parent element that contains a child with text 'Hello'?",
          options: [
            "page.getByText('Hello').locator('xpath=..')",
            "page.getByRole('listitem').filter({ has: page.getByText('Hello') })",
            "Use nth-child chain",
            "Use page.locator('parent:has-text(\"Hello\")')",
          ],
          correctOptionIndex: 1,
          explanation:
            "Use Locator.filter({ has: childLocator }) to find the parent that contains the specific child; it's cleaner and more robust than xpath=..",
        },
        {
          id: "q-8-307",
          text: "Which of these cases is a reason to use :near(selector, distance) with a numeric distance?",
          options: [
            "To limit matches to elements within a certain pixel distance from the anchor",
            "To match elements by z-index",
            "To replace the role locator",
            "To make XPath queries faster",
          ],
          correctOptionIndex: 0,
          explanation:
            ":near(selector, distance) restricts matches to elements within the given pixel distance, useful when closeness matters.",
        },
        {
          id: "q-8-308",
          text: "Scenario — You see tests failing because a locator sometimes matches a hidden element. Which change is most appropriate?",
          options: [
            "Append :visible to the selector to only match visible elements",
            "Add force: true to actions",
            "Change to XPath absolute path",
            "Increase the timeout",
          ],
          correctOptionIndex: 0,
          explanation:
            "Appending :visible ensures the locator only matches visible elements; force: true bypasses checks and can hide real issues.",
        },
        {
          id: "q-8-309",
          text: "What does Playwright consider when computing whether an element is visible?",
          options: [
            "Non-empty bounding box and not display:none (opacity 0 is considered visible)",
            "Only whether CSS visibility is 'visible'",
            "Only whether node exists in DOM",
            "Only z-index",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright defines visible as non-empty bounding box and not display:none; opacity:0 still counts as visible per Playwright.",
        },
        {
          id: "q-8-310",
          text: "Which selector would you use to wait for an element that 'intersects the viewport'?",
          options: [
            "await expect(locator).toBeInViewport();",
            "await expect(locator).toBeVisible();",
            "await locator.waitFor({ state: 'attached' });",
            "await page.waitForTimeout(1000)",
          ],
          correctOptionIndex: 0,
          explanation:
            "toBeInViewport asserts that the element intersects the viewport; toBeVisible is related but not the same check.",
        },
        {
          id: "q-8-311",
          text: "Which locator method can be used on both Locator and FrameLocator to chain queries?",
          options: ["getByLabel", "getByRole", "getByText", "All of the above"],
          correctOptionIndex: 3,
          explanation:
            "Methods like getByRole/getByText/getByLabel are available on Locator and FrameLocator, enabling chaining and narrowing down elements.",
        },
        {
          id: "q-8-312",
          text: "Scenario — You want to assert that a parent list item contains exact column text values. Which tuple-driven approach from the doc helps write that test compactly?",
          options: [
            "Use an array of selectors and loop with expect on each cell",
            "Use a tuple array like [ '#row1', ['John','Admin','Active'] ] and iterate to compare cells",
            "Use nth-child CSS selectors for each cell",
            "Use page.getByText for each expected value separately",
          ],
          correctOptionIndex: 1,
          explanation:
            "Using tuples [rowSelector, expectedCells[]] and iterating via locator.nth(i) is a compact pattern described in the document.",
        },
        {
          id: "q-8-313",
          text: "Which of the following is the correct way to click an element inside a shadow root when supported?",
          options: [
            "await page.getByText('Details').click();",
            "await page.locator('shadow-root > #inner').click();",
            "XPath can pierce the shadow root to click",
            "Use document.querySelector in page.evaluate",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright's locators automatically work with open shadow DOM, so getByText/getByRole will find elements inside the shadow root when possible. XPath won't pierce shadow roots.",
        },
        {
          id: "q-8-314",
          text: "Which pattern is suggested for selecting form controls reliably when label and placeholder exist?",
          options: [
            "Prefer placeholder over label",
            "Prefer getByLabel, fall back to getByPlaceholder if no label",
            "Always use CSS selectors",
            "Always use data-testid",
          ],
          correctOptionIndex: 1,
          explanation:
            "Prefer labels (getByLabel) since they are user-facing and robust; use placeholder only when no label exists. Test ids are fallback when neither works.",
        },
        {
          id: "q-8-315",
          text: "True or False: Using locator.click({ force: true }) is recommended to avoid flaky tests caused by visibility issues.",
          options: ["True", "False"],
          correctOptionIndex: 1,
          explanation:
            "False — force: true disables actionability checks; prefer fixing the selector or waiting for the element to be actionable rather than forcing clicks.",
        },
        {
          id: "q-8-316",
          text: "Which of these is the correct usage to set a custom test id attribute via config (conceptually as in the doc)?",
          options: [
            "Selectors.setTestIdAttribute('data-pw')",
            "playwright.config.testId = 'data-pw'",
            "process.env.TESTID='data-pw'",
            "You can't change test id attribute",
          ],
          correctOptionIndex: 0,
          explanation:
            "Selectors.setTestIdAttribute('data-pw') configures Playwright to use a custom attribute for getByTestId; the doc shows this approach.",
        },
        {
          id: "q-8-317",
          text: "Scenario — A locator returns multiple matches and click() fails due to strictness. What should you do?",
          options: [
            "Use .first() or .nth(index) to disambiguate",
            "Use force: true on click",
            "Wrap click in a try/catch and continue",
            "Switch to XPath",
          ],
          correctOptionIndex: 0,
          explanation:
            "Disambiguate using .first() or .nth(index) or refine the selector; using force hides the underlying ambiguity and is discouraged.",
        },
        {
          id: "q-8-318",
          text: "Which selector helps when you want an element that is 'to the right of' another element?",
          options: [
            ":right-of()",
            ":adjacent()",
            ":near-right()",
            ":east-of()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright supports :right-of() as a layout pseudo-class to find elements relative to another anchor element.",
        },
        {
          id: "q-8-319",
          text: "Which of the following is a correct reason to prefer role/text locators over CSS/XPath?",
          options: [
            "They are slower but prettier",
            "They mirror how users interact and are less brittle against DOM changes",
            "They never fail for dynamic content",
            "They allow you to bypass security",
          ],
          correctOptionIndex: 1,
          explanation:
            "Role/text locators are user-facing and more resilient to implementation changes, making tests less brittle.",
        },
        {
          id: "q-8-320",
          text: "Scenario — The app uses many visually similar buttons; you need the one with accessible name 'Submit order' inside a #checkout card. Which locator is best?",
          options: [
            "await page.locator('#checkout').getByRole('button', { name: 'Submit order' }).click();",
            "await page.getByRole('button', { name: 'Submit order' }).click();",
            "await page.locator('.card button:nth-child(3)').click();",
            'await page.locator(\'xpath=//div[@id="checkout"]//button[.="Submit order"]\').click();',
          ],
          correctOptionIndex: 0,
          explanation:
            "Scoping by parent (#checkout) and then using getByRole with the accessible name yields a precise and resilient locator.",
        },
        {
          id: "q-8-321",
          text: "Final — Which statement best summarizes Playwright locator guidance in the document?",
          options: [
            "Always prefer XPath and long CSS paths",
            "Prioritize user-facing locators (role/text/label), use test ids when necessary, and layout pseudo-classes for proximity; avoid brittle DOM-dependent selectors",
            "Use force: true to make tests stable",
            "Only use .first() to pick elements",
          ],
          correctOptionIndex: 1,
          explanation:
            "The document emphasizes prioritizing user-facing locators, test ids when needed, layout pseudo-classes for proximity, and avoiding brittle DOM-dependent selectors.",
        },
      ],
    },
    {
      id: "sec-9",
      title: "Module 9 — Login Scenario Tests & Assertions",
      questions: [
        {
          id: "q-9-322",
          text: "Which Playwright method is used to navigate to a webpage before interacting with it?",
          options: [
            "page.run()",
            "page.goto()",
            "page.navigateTo()",
            "page.open()",
          ],
          correctOptionIndex: 1,
          explanation:
            "page.goto() loads the target URL with auto-wait behavior before further actions.",
        },
        {
          id: "q-9-323",
          text: "Which assertion retries automatically until the expected condition is met?",
          options: [
            "expect(value).toBe()",
            "expect(locator).toHaveText()",
            "expect(value).toEqual()",
            "expect(locator).not.toBeVisible()",
          ],
          correctOptionIndex: 1,
          explanation:
            "toHaveText() is an auto-retrying web assertion designed for dynamic UI updates.",
        },
        {
          id: "q-9-324",
          text: "What is TRUE about Playwright's auto-waiting?",
          options: [
            "It automatically waits for visible, stable, enabled elements before actions",
            "It requires manual waits such as waitForTimeout",
            "It only waits for network idle state",
            "It only works for click actions",
          ],
          correctOptionIndex: 0,
          explanation:
            "Auto-wait covers visibility, stability, actionability checks before performing actions.",
        },
        {
          id: "q-9-325",
          text: "Which action ensures a checkbox becomes checked?",
          options: [
            "locator.select()",
            "locator.click()",
            "locator.check()",
            "locator.toggle()",
          ],
          correctOptionIndex: 2,
          explanation:
            "locator.check() checks the box only if it is currently unchecked.",
        },
        {
          id: "q-9-326",
          text: "Which hook runs before EACH test in a test file?",
          options: ["beforeAll", "beforeEach", "beforeTest", "setup"],
          correctOptionIndex: 1,
          explanation:
            "beforeEach runs before every test, ideal for login/setup steps.",
        },
        {
          id: "q-9-327",
          text: "Which method ensures a test only runs in isolation with a new browser context?",
          options: [
            "test.parallel()",
            "test.only()",
            "test.use()",
            "Playwright does this by default",
          ],
          correctOptionIndex: 3,
          explanation:
            "Each test gets a new context by default, ensuring state isolation.",
        },
        {
          id: "q-9-328",
          text: "Which assertion verifies input fields have a specific value?",
          options: [
            "toHaveText()",
            "toHaveValue()",
            "toBeVisible()",
            "toEqual()",
          ],
          correctOptionIndex: 1,
          explanation: "toHaveValue() checks an input’s value property.",
        },
        {
          id: "q-9-329",
          text: "Which assertion checks an element is interactable on screen?",
          options: [
            "toBeAvailable()",
            "toHaveFocus()",
            "toBeVisible()",
            "toBeReady()",
          ],
          correctOptionIndex: 2,
          explanation:
            "toBeVisible ensures the element has dimensions and is visible to the user.",
        },
        {
          id: "q-9-330",
          text: "If a login button is disabled until valid credentials are typed, which assertion should you use?",
          options: [
            "expect(btn).toBeHidden()",
            "expect(btn).toBeDisabled()",
            "expect(btn).toHaveText()",
            "expect(btn).toHaveClass()",
          ],
          correctOptionIndex: 1,
          explanation:
            "toBeDisabled() checks that the element cannot be interacted with.",
        },
        {
          id: "q-9-331",
          text: "Which Playwright API is ideal for verifying navigation after login?",
          options: [
            "await expect(page).toHaveURL('/dashboard')",
            "await expect(page).toHaveTitle('Dashboard')",
            "await page.goto('/dashboard')",
            "await locator.click()",
          ],
          correctOptionIndex: 0,
          explanation:
            "toHaveURL waits until the browser navigates to the expected URL.",
        },
        {
          id: "q-9-332",
          text: "What does locator.fill() do before typing?",
          options: [
            "Deletes value manually",
            "Clears existing text automatically",
            "Clicks and focuses only",
            "Triggers onChange but not input",
          ],
          correctOptionIndex: 1,
          explanation:
            "fill() clears the input box before typing the given value.",
        },
        {
          id: "q-9-333",
          text: "Which assertion is best for checking error messages?",
          options: [
            "toBeChecked()",
            "toBeEditable()",
            "toContainText()",
            "toBeInstanceOf()",
          ],
          correctOptionIndex: 2,
          explanation:
            "toContainText() verifies partial or full text of UI messages.",
        },
        {
          id: "q-9-334",
          text: "What does toBeOK() assert?",
          options: [
            "Element is clickable",
            "HTTP response returned 2xx/3xx",
            "Element is visible",
            "Page is reachable",
          ],
          correctOptionIndex: 1,
          explanation:
            "Response.toBeOK() ensures API response status is >=200 and <400.",
        },
        {
          id: "q-9-335",
          text: "Which action scrolls an element into view if needed?",
          options: [
            "locator.scrollIntoView()",
            "locator.scrollIntoViewIfNeeded()",
            "page.scroll()",
            "locator.ensureVisible()",
          ],
          correctOptionIndex: 1,
          explanation:
            "scrollIntoViewIfNeeded() auto-scrolls but only when necessary.",
        },
        {
          id: "q-9-336",
          text: "Which is TRUE about toHaveCount()?",
          options: [
            "It retries until the number of matched elements equals expected count",
            "It checks count instantly without retry",
            "It only works with visible elements",
            "It requires using locator.nth() first",
          ],
          correctOptionIndex: 0,
          explanation:
            "toHaveCount() is auto-retrying and waits for a stable element count.",
        },
        {
          id: "q-9-337",
          text: "Which of the following is a non-retrying assertion?",
          options: [
            "toBeTruthy()",
            "toBeVisible()",
            "toHaveText()",
            "toHaveURL()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Assertions that don't target UI conditions (like toBeTruthy) don't retry.",
        },
        {
          id: "q-9-338",
          text: "Which assertion checks CSS style of an element?",
          options: [
            "toHaveClass()",
            "toHaveCSS()",
            "toContainText()",
            "toHaveId()",
          ],
          correctOptionIndex: 1,
          explanation: "toHaveCSS checks CSS property values.",
        },
        {
          id: "q-9-339",
          text: "Which method uploads files in Playwright?",
          options: [
            "locator.upload()",
            "page.upload()",
            "locator.setInputFiles()",
            "locator.attachFiles()",
          ],
          correctOptionIndex: 2,
          explanation:
            "setInputFiles uploads one or more files to a file input.",
        },
        {
          id: "q-9-340",
          text: "Which action triggers keyboard-level typing?",
          options: [
            "locator.fill()",
            "locator.sendKeys()",
            "page.keyboard.type()",
            "locator.insert()",
          ],
          correctOptionIndex: 2,
          explanation:
            "keyboard.type simulates actual key presses (unlike fill).",
        },
        {
          id: "q-9-341",
          text: "Which assertion ensures an element has focus?",
          options: [
            "toHaveID()",
            "toBeVisible()",
            "toBeFocused()",
            "toBeEditable()",
          ],
          correctOptionIndex: 2,
          explanation:
            "toBeFocused validates the element is currently focused.",
        },
        {
          id: "q-9-342",
          text: "Scenario: After clicking 'Login', the dashboard takes a few seconds to load. Which assertion ensures the test waits until the dashboard is visible?",
          options: [
            "expect(page.locator('#dashboard')).toBeVisible()",
            "page.waitForTimeout(5000)",
            "expect(page).toHaveTitle('Dashboard')",
            "expect(page).not.toBeNull()",
          ],
          correctOptionIndex: 0,
          explanation:
            "toBeVisible() auto-retries until the UI element appears, avoiding fixed timeouts.",
        },
        {
          id: "q-9-343",
          text: "Scenario: The login form shows an inline error 'Invalid username' when wrong credentials are entered. Which assertion best validates this?",
          options: [
            "expect(error).toBeHidden()",
            "expect(error).toContainText('Invalid username')",
            "expect(error).toHaveValue('Invalid username')",
            "expect(error).toBeEnabled()",
          ],
          correctOptionIndex: 1,
          explanation:
            "toContainText() is appropriate for UI text validations.",
        },
        {
          id: "q-9-344",
          text: "Scenario: A login button stays disabled until both fields are filled. How do you assert this behavior?",
          options: [
            "expect(button).toBeEditable()",
            "expect(button).toBeDisabled()",
            "expect(button).toHaveCount(2)",
            "expect(button).toHaveText('Login')",
          ],
          correctOptionIndex: 1,
          explanation:
            "toBeDisabled() ensures blocked interactions until conditions are met.",
        },
        {
          id: "q-9-345",
          text: "Scenario: You login successfully, but the URL sometimes updates slowly. Which assertion ensures the script waits for the new URL?",
          options: [
            "expect(page).toHaveURL(/dashboard/)",
            "waitForTimeout(2000)",
            "expect(page.url()).toContain('dashboard')",
            "expect(page).not.toBeNull()",
          ],
          correctOptionIndex: 0,
          explanation:
            "toHaveURL automatically waits for the navigation to complete.",
        },
        {
          id: "q-9-346",
          text: "Scenario: After a failed login, an error banner fades in with animation. How does Playwright handle this?",
          options: [
            "You must add manual waits",
            "locator.click() waits for visibility automatically",
            "Assertions like toBeVisible() retry until it appears",
            "Animations block assertions",
          ],
          correctOptionIndex: 2,
          explanation:
            "toBeVisible() auto-retries based on actionability rules.",
        },
        {
          id: "q-9-347",
          text: "Scenario: The login page loads but the username field is inside a lazy-loaded component. How do you ensure the test waits?",
          options: [
            "expect(locator).toHaveText()",
            "expect(locator).toBeVisible()",
            "page.waitForLoadState('networkidle')",
            "Use request interception",
          ],
          correctOptionIndex: 1,
          explanation:
            "toBeVisible() ensures the element actually exists and is ready for interaction.",
        },
        {
          id: "q-9-348",
          text: "Scenario: After login, a welcome message appears: 'Welcome John'. Which is the best assertion?",
          options: [
            "expect(page.getByText('Welcome')).toBeHidden()",
            "expect(page.getByText(/Welcome/i)).toBeVisible()",
            "expect(page).toHaveURL('/welcome')",
            "expect(page).toHaveScreenshot()",
          ],
          correctOptionIndex: 1,
          explanation:
            "Text assertions for dynamic greeting messages should use regex for partial matching.",
        },
        {
          id: "q-9-349",
          text: "Scenario: You click Login but a spinner appears for 3 seconds before redirect. How should the test be structured?",
          options: [
            "Wait for spinner to disappear with expect(spinner).toBeHidden()",
            "Use waitForTimeout(3000)",
            "Retry manually with loops",
            "Skip spinner",
          ],
          correctOptionIndex: 0,
          explanation:
            "Waiting for hidden element ensures proper sync with UI transitions.",
        },
        {
          id: "q-9-350",
          text: "Scenario: The login page triggers a network request /login. How do you validate it succeeded?",
          options: [
            "expect(response).toBeOK()",
            "expect(response).toHaveText()",
            "expect(page).toHaveTitle()",
            "expect(locator).toContainText()",
          ],
          correctOptionIndex: 0,
          explanation: "toBeOK validates HTTP success responses (2xx/3xx).",
        },
        {
          id: "q-9-351",
          text: "Scenario: You want to assert that exactly 2 error messages are shown when fields are empty. Which assertion works?",
          options: [
            "expect(errors).toHaveCount(2)",
            "expect(errors).toBeVisible()",
            "expect(errors).toBeEmpty()",
            "expect(errors).toBeHidden()",
          ],
          correctOptionIndex: 0,
          explanation:
            "toHaveCount verifies exact element counts with auto-retry.",
        },
        {
          id: "q-9-352",
          text: "Scenario: After login, you must verify that a user avatar is in the viewport. Which assertion applies?",
          options: [
            "expect(avatar).toBeInViewport()",
            "expect(avatar).toHaveText()",
            "expect(avatar).toHaveValue()",
            "expect(avatar).toHaveID()",
          ],
          correctOptionIndex: 0,
          explanation:
            "toBeInViewport ensures the element is visible inside the viewport.",
        },
        {
          id: "q-9-353",
          text: "Scenario: Clicking Login sometimes fails because another invisible element overlaps it. What is the correct fix?",
          options: [
            "Use force: true",
            "Ensure the button is 'Receives Events' using proper locators",
            "Add waitForTimeout(1000)",
            "Disable strict mode",
          ],
          correctOptionIndex: 1,
          explanation:
            "Playwright's click waits for 'receives events'; fix locator/UI instead of forcing.",
        },
        {
          id: "q-9-354",
          text: "Scenario: The login form loads different inputs based on region selection. How should selectors be written?",
          options: [
            "Use role-based selectors like getByLabel('Username')",
            "Use nth-child CSS selectors",
            "Use absolute XPaths",
            "Use position-based selectors",
          ],
          correctOptionIndex: 0,
          explanation:
            "Label-based selectors remain stable even with UI changes.",
        },
        {
          id: "q-9-355",
          text: "Scenario: A failed login attempt should NOT navigate away from the page. How do you confirm?",
          options: [
            "expect(page).toHaveURL('/login')",
            "expect(page).toHaveText('Login successful')",
            "expect(error).toBeHidden()",
            "expect(page).toHaveScreenshot()",
          ],
          correctOptionIndex: 0,
          explanation:
            "toHaveURL ensures the page did not redirect after invalid login.",
        },
        {
          id: "q-9-356",
          text: "Scenario: The password field has a reveal-toggle icon. How do you ensure the password becomes visible?",
          options: [
            "expect(field).toHaveAttribute('type', 'text')",
            "expect(field).toBeEditable()",
            "expect(field).toHaveValue()",
            "expect(icon).toBeVisible()",
          ],
          correctOptionIndex: 0,
          explanation: "A password reveal toggle changes the 'type' attribute.",
        },
        {
          id: "q-9-357",
          text: "Scenario: On slow networks, login sometimes takes longer than 30 seconds. What should you adjust?",
          options: [
            "expect timeout using test.setTimeout or expect config",
            "Add sleep",
            "Disable retries",
            "Increase browser viewport",
          ],
          correctOptionIndex: 0,
          explanation:
            "Playwright allows configuring expect timeout for slow pages.",
        },
        {
          id: "q-9-358",
          text: "Scenario: A success toast appears briefly after login. How do you confirm the test sees it?",
          options: [
            "expect(toast).toBeVisible()",
            "waitForTimeout(2000)",
            "toast.click()",
            "expect(page).toHaveURL('/toast')",
          ],
          correctOptionIndex: 0,
          explanation:
            "toBeVisible auto-retries long enough to catch transient elements.",
        },
        {
          id: "q-9-359",
          text: "Scenario: Login requires selecting a value from a dropdown. Which API applies?",
          options: [
            "locator.selectOption()",
            "locator.choose()",
            "locator.click()",
            "keyboard.type()",
          ],
          correctOptionIndex: 0,
          explanation:
            "selectOption is the dedicated API for select dropdowns.",
        },
        {
          id: "q-9-360",
          text: "Scenario: A login test must run in parallel with others. How do you ensure isolation?",
          options: [
            "Use test.parallel()",
            "Create isolated contexts using Playwright default behavior",
            "Share the same page",
            "Use a single browser context",
          ],
          correctOptionIndex: 1,
          explanation:
            "Each test gets its own context → perfect for parallel login testing.",
        },
        {
          id: "q-9-361",
          text: "Scenario: After login, the page triggers multiple redirects. Which assertion safely waits?",
          options: [
            "expect(page).toHaveURL(/final/) ",
            "expect(page.url()).toContain('final')",
            "waitForTimeout(5000)",
            "expect(page).toHaveText('Redirecting')",
          ],
          correctOptionIndex: 0,
          explanation: "toHaveURL will handle redirect chains elegantly.",
        },
        {
          id: "q-9-362",
          text: "Scenario: After login, the user's name appears in the navigation bar. The element loads slowly. What should you do?",
          options: [
            "expect(navUser).toContainText('John')",
            "waitForTimeout(3000)",
            "expect(navUser).toHaveValue('John')",
            "use force: true",
          ],
          correctOptionIndex: 0,
          explanation: "toContainText() will auto-retry while the value loads.",
        },
        {
          id: "q-9-363",
          text: "Scenario: Clicking login triggers a modal dialog requiring confirmation. What should you use?",
          options: [
            "page.on('dialog') handler",
            "waitForTimeout()",
            "force click",
            "Use getByTestId instead",
          ],
          correctOptionIndex: 0,
          explanation:
            "Dialogs such as alerts/prompts are handled with page.on('dialog').",
        },
        {
          id: "q-9-364",
          text: "Scenario: Login should trigger one network request to /auth. How do you ensure this happened?",
          options: [
            "Listen for page.waitForResponse('/auth')",
            "Check page.url()",
            "Use force click",
            "Ensure button has text",
          ],
          correctOptionIndex: 0,
          explanation: "waitForResponse can assert expected backend behavior.",
        },
        {
          id: "q-9-365",
          text: "Scenario: You want to ensure the password field is editable. Which assertion applies?",
          options: [
            "toBeEditable()",
            "toBeEnabled()",
            "toBeVisible()",
            "toHaveText()",
          ],
          correctOptionIndex: 0,
          explanation: "toBeEditable checks both enabled + not readonly.",
        },
        {
          id: "q-9-366",
          text: "Scenario: The login form hides the submit button until valid input is provided. Which assertion lets you confirm it later appears?",
          options: [
            "expect(button).toBeVisible()",
            "expect(button).toBeHidden()",
            "expect(button).toHaveValue()",
            "expect(button).toHaveScreenshot()",
          ],
          correctOptionIndex: 0,
          explanation: "toBeVisible() is used to validate dynamic rendering.",
        },
        {
          id: "q-9-367",
          text: "Scenario: Login requires typing into a password field using actual keystrokes for a masking test. Which API fits?",
          options: [
            "locator.fill()",
            "page.keyboard.type()",
            "locator.press()",
            "page.type()",
          ],
          correctOptionIndex: 1,
          explanation: "keyboard.type replicates real user typing patterns.",
        },
        {
          id: "q-9-368",
          text: "Scenario: Logging in with a locked account shows a '403 Access Denied' page. How do you check server-side failure?",
          options: [
            "expect(response).toBeOK()",
            "expect(response.status()).toBe(403)",
            "expect(page).toHaveURL('/403')",
            "expect(page).toBeHidden()",
          ],
          correctOptionIndex: 1,
          explanation:
            "Checking response.status ensures request result is correct.",
        },
        {
          id: "q-9-369",
          text: "Scenario: After login, a navigation menu animates from the left. Which assertion waits for the menu to stabilize?",
          options: [
            "expect(menu).toBeVisible()",
            "expect(menu).toBeInViewport()",
            "expect(menu).toHaveClass(/open/)",
            "expect(menu).toBeAttached()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Visible assertion ensures it completes animation and is interactable.",
        },
        {
          id: "q-9-370",
          text: "Scenario: Some login tests fail only on Firefox because of slower rendering. What can fix this?",
          options: [
            "Increase expect timeout in config",
            "Use waitForTimeout everywhere",
            "Switch to CSS selectors",
            "Disable parallel tests",
          ],
          correctOptionIndex: 0,
          explanation:
            "Extended expect timeout is the correct solution for slow rendering issues.",
        },
        {
          id: "q-9-371",
          text: "Scenario: A login page triggers an API request returning JSON user info. How do you verify the returned username?",
          options: [
            "expect(response.json().username).toBe('John')",
            "expect(page).toHaveURL()",
            "expect(locator).toHaveText()",
            "expect(response).toBeVisible()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Accessing response.json() allows asserting backend response content.",
        },
      ],
    },
    {
      id: "sec-10",
      title: "Module 10 — Basic UI Elements",
      questions: [
        {
          id: "q-10-372",
          text: "Which Playwright method is used to type characters into an input field while preserving existing content?",
          options: [
            "locator.fill()",
            "page.keyboard.type()",
            "locator.type()",
            "locator.sendKeys()",
          ],
          correctOptionIndex: 2,
          explanation:
            "locator.type() types characters without clearing existing content, simulating natural typing.",
        },
        {
          id: "q-10-373",
          text: "Which method clears an input before typing new values?",
          options: [
            "locator.type()",
            "locator.fill()",
            "page.keyboard.insert()",
            "locator.sendKeys()",
          ],
          correctOptionIndex: 1,
          explanation:
            "fill() clears the input automatically before inserting text.",
        },
        {
          id: "q-10-374",
          text: "Which API is recommended for interacting with dropdown <select> elements?",
          options: [
            "locator.selectOption()",
            "locator.pick()",
            "locator.choose()",
            "page.keyboard.press()",
          ],
          correctOptionIndex: 0,
          explanation:
            "selectOption() is designed for select element interactions.",
        },
        {
          id: "q-10-375",
          text: "What does locator.check() guarantee?",
          options: [
            "It toggles a checkbox twice",
            "It ensures checkbox becomes checked only if not already",
            "It unchecks a checkbox",
            "It clicks without actionability checks",
          ],
          correctOptionIndex: 1,
          explanation:
            "check() only checks if unchecked, preserving state consistency.",
        },
        {
          id: "q-10-376",
          text: "Which method is used to upload files to an <input type='file'>?",
          options: [
            "locator.upload()",
            "locator.setInputFiles()",
            "locator.attachFiles()",
            "page.upload()",
          ],
          correctOptionIndex: 1,
          explanation: "setInputFiles() is the correct API for file uploads.",
        },
        {
          id: "q-10-377",
          text: "Which of the following performs a mouse hover?",
          options: [
            "locator.move()",
            "locator.hover()",
            "page.hover()",
            "locator.pointer()",
          ],
          correctOptionIndex: 1,
          explanation: "locator.hover() moves mouse over the target element.",
        },
        {
          id: "q-10-378",
          text: "How do you simulate pressing keyboard keys like Enter?",
          options: [
            "locator.fill() with '\\n'",
            "page.keyboard.press('Enter')",
            "locator.type('Enter')",
            "locator.sendKeys('ENTER')",
          ],
          correctOptionIndex: 1,
          explanation:
            "press() simulates keyboard events including special keys.",
        },
        {
          id: "q-10-379",
          text: "Which method ensures clicking happens only when the element is visible and stable?",
          options: [
            "locator.forceClick()",
            "locator.click()",
            "page.click()",
            "locator.rawClick()",
          ],
          correctOptionIndex: 1,
          explanation: "locator.click() performs full actionability checks.",
        },
        {
          id: "q-10-380",
          text: "Which action triggers double-click?",
          options: [
            "locator.dblclick()",
            "locator.doubleClick()",
            "page.dblclick()",
            "locator.doubletap()",
          ],
          correctOptionIndex: 1,
          explanation: "locator.doubleClick() is the correct API.",
        },
        {
          id: "q-10-381",
          text: "Which assertion verifies whether a checkbox is selected?",
          options: [
            "toHaveText()",
            "toBeChecked()",
            "toBeVisible()",
            "toContainHTML()",
          ],
          correctOptionIndex: 1,
          explanation:
            "toBeChecked() asserts that a checkbox or radio button is selected.",
        },
        {
          id: "q-10-382",
          text: "Which command performs drag-and-drop operations?",
          options: [
            "locator.drag()",
            "locator.dragTo()",
            "locator.moveTo()",
            "locator.slideTo()",
          ],
          correctOptionIndex: 1,
          explanation: "dragTo() performs complete drag and drop operations.",
        },
        {
          id: "q-10-383",
          text: "Which method scrolls an element into view only when needed?",
          options: [
            "scrollIntoView()",
            "scrollIntoViewIfNeeded()",
            "scroll()",
            "ensureVisible()",
          ],
          correctOptionIndex: 1,
          explanation: "scrollIntoViewIfNeeded() avoids unnecessary scrolling.",
        },
        {
          id: "q-10-384",
          text: "Which is TRUE about locator.press()?",
          options: [
            "It types multiple characters at once",
            "It triggers keyboard event for a single key",
            "It deletes text automatically",
            "It toggles input fields",
          ],
          correctOptionIndex: 1,
          explanation: "press() represents a single key press action.",
        },
        {
          id: "q-10-385",
          text: "In UI testing, what does toBeEditable() validate?",
          options: [
            "Element is visible",
            "Element is not disabled and not read-only",
            "Element is focused",
            "Element contains text",
          ],
          correctOptionIndex: 1,
          explanation: "toBeEditable checks interactability for text inputs.",
        },
        {
          id: "q-10-386",
          text: "Which locator action simulates real user typing speed?",
          options: [
            "locator.fill()",
            "locator.type()",
            "locator.insertText()",
            "page.keyboard.write()",
          ],
          correctOptionIndex: 1,
          explanation: "type() simulates keystroke-like typing, unlike fill().",
        },
        {
          id: "q-10-387",
          text: "Which action is used for pressing modifier keys like Ctrl or Shift?",
          options: [
            "page.keyboard.press()",
            "page.keyboard.modifier()",
            "page.keyboard.down()",
            "locator.shortcut()",
          ],
          correctOptionIndex: 2,
          explanation:
            "keyboard.down() presses a key without releasing it; useful for combos.",
        },
        {
          id: "q-10-388",
          text: "What does page.mouse.move(x,y) do?",
          options: [
            "Moves mouse to element",
            "Moves mouse to absolute page coordinates",
            "Clicks element automatically",
            "Scrolls the page",
          ],
          correctOptionIndex: 1,
          explanation:
            "mouse.move uses absolute coordinates, not element-based positioning.",
        },
        {
          id: "q-10-389",
          text: "Which command releases a held keyboard key?",
          options: [
            "page.keyboard.release()",
            "page.keyboard.up()",
            "locator.keyUp()",
            "locator.releaseKey()",
          ],
          correctOptionIndex: 1,
          explanation:
            "keyboard.up() releases a key previously pressed with keyboard.down().",
        },
        {
          id: "q-10-390",
          text: "Which action triggers file removal from an input?",
          options: [
            "locator.removeFile()",
            "locator.clear()",
            "locator.setInputFiles([])",
            "locator.unset()",
          ],
          correctOptionIndex: 2,
          explanation: "Passing an empty array removes selected files.",
        },
        {
          id: "q-10-391",
          text: "Which Playwright feature avoids flaky UI interactions?",
          options: [
            "Forced clicks",
            "Actionability checks",
            "Manual wait timers",
            "Legacy selectors",
          ],
          correctOptionIndex: 1,
          explanation:
            "Actionability checks ensure actions occur only when elements are ready.",
        },
        {
          id: "q-10-392",
          text: "Which assertion ensures an element is part of the DOM?",
          options: [
            "toBeAttached()",
            "toBeVisible()",
            "toHaveCount()",
            "toContainText()",
          ],
          correctOptionIndex: 0,
          explanation:
            "toBeAttached verifies that the element is present in DOM.",
        },
        {
          id: "q-10-393",
          text: "Which method triggers holding a mouse button for drag operations?",
          options: [
            "mouse.hold()",
            "mouse.down()",
            "mouse.start()",
            "locator.drag()",
          ],
          correctOptionIndex: 1,
          explanation:
            "mouse.down() presses and holds the primary mouse button.",
        },
        {
          id: "q-10-394",
          text: "Which locator action is used to select text inside an input?",
          options: [
            "locator.selectText()",
            "locator.highlight()",
            "locator.cursor()",
            "locator.markText()",
          ],
          correctOptionIndex: 0,
          explanation:
            "selectText() highlights the text inside editable fields.",
        },
        {
          id: "q-10-395",
          text: "Which assertion tests whether a field is read-only?",
          options: [
            "expect(field).not.toBeEditable()",
            "expect(field).toBeDisabled()",
            "expect(field).toHaveValue()",
            "expect(field).toBeVisible()",
          ],
          correctOptionIndex: 0,
          explanation:
            "not.toBeEditable ensures field is either disabled or readonly.",
        },
        {
          id: "q-10-396",
          text: "Scenario: A dropdown loads values after a network call. Which action ensures the script waits before selecting an option?",
          options: [
            "expect(dropdown).toBeVisible()",
            "page.waitForTimeout(2000)",
            "dropdown.type()",
            "dropdown.check()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Waiting for visibility ensures the dropdown is ready for interaction.",
        },
        {
          id: "q-10-397",
          text: "Scenario: A button must only be clicked when enabled. How do you assert this condition?",
          options: [
            "expect(button).toBeEnabled()",
            "expect(button).toHaveText()",
            "expect(button).toBeChecked()",
            "expect(button).toHaveValue()",
          ],
          correctOptionIndex: 0,
          explanation:
            "toBeEnabled() ensures the element can receive click events.",
        },
        {
          id: "q-10-398",
          text: "Scenario: Typing too fast causes missed characters in a login field. Which method more closely mimics real user typing?",
          options: ["fill()", "type()", "press()", "keyboard.insert()"],
          correctOptionIndex: 1,
          explanation:
            "type() inserts characters with delays similar to human typing.",
        },
        {
          id: "q-10-399",
          text: "Scenario: A checkbox sometimes becomes hidden due to animations. Which assertion helps stabilize the test?",
          options: [
            "expect(cb).toBeVisible()",
            "expect(cb).toBeHidden()",
            "expect(cb).toBeChecked()",
            "expect(cb).toHaveValue()",
          ],
          correctOptionIndex: 0,
          explanation:
            "toBeVisible() accounts for animation delays through auto-retry.",
        },
        {
          id: "q-10-400",
          text: "Scenario: A UI component loads inside a scrollable container. Which action ensures the element is viewable?",
          options: [
            "locator.scrollIntoViewIfNeeded()",
            "page.mouse.move(0,0)",
            "page.waitForLoadState()",
            "locator.forceClick()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Scrolling ensures the element is reachable for user interactions.",
        },
        {
          id: "q-10-401",
          text: "Scenario: A radio button has dynamic labels. What is the best locator approach?",
          options: [
            "Locator by role and label text: getByLabel('Choice A')",
            "nth-child CSS selectors",
            "Absolute XPath",
            "Coordinates-based clicking",
          ],
          correctOptionIndex: 0,
          explanation:
            "Label-based locators remain correct despite layout changes.",
        },
        {
          id: "q-10-402",
          text: "Scenario: Dragging an item into a dropzone does nothing. What is often the correct fix?",
          options: [
            "Use dragTo instead of manual mouse events",
            "Add waitForTimeout",
            "Disable actionability checks",
            "Switch to CSS-only interactions",
          ],
          correctOptionIndex: 0,
          explanation:
            "dragTo handles complete drag lifecycle and is more stable.",
        },
        {
          id: "q-10-403",
          text: "Scenario: Uploading a file triggers preview generation. How do you assert preview loaded?",
          options: [
            "expect(preview).toBeVisible()",
            "expect(input).toBeChecked()",
            "expect(button).toHaveText()",
            "expect(page).toHaveScreenshot()",
          ],
          correctOptionIndex: 0,
          explanation: "Verifying the preview UI ensures upload succeeded.",
        },
        {
          id: "q-10-404",
          text: "Scenario: A complex form requires pressing Tab to move between fields. Which API simulates this?",
          options: [
            "page.keyboard.press('Tab')",
            "locator.fill('\\t')",
            "locator.type('Tab')",
            "locator.press('TAB')",
          ],
          correctOptionIndex: 0,
          explanation: "keyboard.press triggers actual tab key navigation.",
        },
        {
          id: "q-10-405",
          text: "Scenario: On clicking a dropdown, the options list appears with animation. What ensures reliability?",
          options: [
            "Expect dropdown options toBeVisible()",
            "Force click option",
            "Hard-coded sleep",
            "Select option via XPath",
          ],
          correctOptionIndex: 0,
          explanation: "Wait for visibility → animation completion → click.",
        },
        {
          id: "q-10-406",
          text: "Scenario: An autocomplete input only accepts real key events. What should you use?",
          options: ["fill()", "type()", "press()", "setInputFiles()"],
          correctOptionIndex: 1,
          explanation:
            "type() simulates interactive keystrokes needed for autocomplete event handlers.",
        },
        {
          id: "q-10-407",
          text: "Scenario: A slider UI component must move to a specific position. Which event sequence should be used?",
          options: [
            "mouse.move → mouse.down → mouse.move → mouse.up",
            "locator.click() twice",
            "scrollIntoViewIfNeeded()",
            "locator.type('50%')",
          ],
          correctOptionIndex: 0,
          explanation:
            "Sliders rely on drag-based operations using mouse sequence events.",
        },
        {
          id: "q-10-408",
          text: "Scenario: Pressing Enter on a form submits it. How do you test this?",
          options: [
            "locator.press('Enter')",
            "locator.type('submit')",
            "page.keyboard.insert('Enter')",
            "page.click('form')",
          ],
          correctOptionIndex: 0,
          explanation: "press('Enter') triggers native form submission.",
        },
        {
          id: "q-10-409",
          text: "Scenario: A tooltip appears on hover. How do you make sure your test captures it?",
          options: [
            "locator.hover()",
            "locator.click()",
            "locator.focus()",
            "locator.type()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Tooltip components typically appear in response to hover events.",
        },
        {
          id: "q-10-410",
          text: "Scenario: A read-only field should NOT allow editing. How do you test this?",
          options: [
            "expect(field).not.toBeEditable()",
            "expect(field).toHaveValue('')",
            "expect(field).toBeDisabled()",
            "expect(field).toBeFocused()",
          ],
          correctOptionIndex: 0,
          explanation: "not.toBeEditable() confirms read-only behavior.",
        },
        {
          id: "q-10-411",
          text: "Scenario: A modal opens after clicking a trigger button but sometimes loads slowly. What stabilizes the test?",
          options: [
            "expect(modal).toBeVisible()",
            "force click modal",
            "sleep for 5 seconds",
            "expect(modal).toBeHidden()",
          ],
          correctOptionIndex: 0,
          explanation: "Modal visibility indicates it has finished rendering.",
        },
        {
          id: "q-10-412",
          text: "Scenario: A multi-select dropdown uses checkboxes inside it. How do you select items reliably?",
          options: [
            "Use getByLabel inside the dropdown",
            "Use nth-child selectors",
            "Use click with force: true",
            "Use page.keyboard.type()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Label-based locators are stable even when options reorder.",
        },
        {
          id: "q-10-413",
          text: "Scenario: A file input rejects files larger than 1MB. How do you test the error?",
          options: [
            "Upload a large file via setInputFiles() and assert error text",
            "Use toBeVisible() on file input",
            "Use page.keyboard.type('file')",
            "Use dragTo()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Uploading and asserting error feedback validates client-side file validation.",
        },
        {
          id: "q-10-414",
          text: "Scenario: The UI shows a loading skeleton before real elements appear. How do you check the real content loaded?",
          options: [
            "expect(realContent).toBeVisible()",
            "expect(skeleton).toBeHidden()",
            "expect(page).toHaveURL()",
            "expect(page).toHaveScreenshot()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Visible real content indicates skeleton has been replaced.",
        },
        {
          id: "q-10-415",
          text: "Scenario: Clicking a button collapses a menu. Which assertion verifies collapse?",
          options: [
            "expect(menu).toBeHidden()",
            "expect(menu).toHaveText('closed')",
            "expect(button).toBeChecked()",
            "expect(menu).toHaveCount(0)",
          ],
          correctOptionIndex: 0,
          explanation: "toBeHidden confirms the menu is collapsed visually.",
        },
        {
          id: "q-10-416",
          text: "Scenario: A form requires dragging a slider to minimum value before submission. How do you ensure slider is set?",
          options: [
            "expect(slider).toHaveValue('0')",
            "expect(slider).toBeVisible()",
            "expect(slider).toHaveText('0')",
            "expect(slider).toBeInViewport()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Sliders update an internal value attribute that can be asserted.",
        },
        {
          id: "q-10-417",
          text: "Scenario: A calendar widget opens after clicking a date input. What ensures the widget appeared?",
          options: [
            "expect(calendar).toBeVisible()",
            "expect(input).toBeEditable()",
            "expect(page).toHaveTitle()",
            "expect(calendar).toHaveText()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Visibility confirms that the widget has fully rendered.",
        },
        {
          id: "q-10-418",
          text: "Scenario: A textbox requires selecting all text before replacing it. What sequence should you use?",
          options: [
            "locator.selectText(); locator.type('new')",
            "locator.fill('new')",
            "keyboard.press('Delete')",
            "locator.clear()",
          ],
          correctOptionIndex: 0,
          explanation: "selectText + type mimics real user text replacement.",
        },
        {
          id: "q-10-419",
          text: "Scenario: A UI element becomes disabled after clicking a toggle. How do you assert this?",
          options: [
            "expect(element).toBeDisabled()",
            "expect(element).toHaveCount(1)",
            "expect(element).toBeChecked()",
            "expect(element).toContainText('disabled')",
          ],
          correctOptionIndex: 0,
          explanation:
            "toBeDisabled verifies that UI element cannot be interacted with.",
        },
        {
          id: "q-10-420",
          text: "Scenario: A popover disappears after clicking outside. How do you validate dismissal?",
          options: [
            "expect(popover).toBeHidden()",
            "expect(popover).toBeVisible()",
            "expect(page).toHaveScreenshot()",
            "expect(popover).toHaveCount(0)",
          ],
          correctOptionIndex: 0,
          explanation:
            "toBeHidden verifies the popover has been removed or visually hidden.",
        },
        {
          id: "q-10-421",
          text: "Scenario: You need to ensure the UI element is fully loaded and stable before clicking. What combination is best?",
          options: [
            "expect(element).toBeVisible(); element.click()",
            "waitForTimeout() then click",
            "element.forceClick()",
            "element.hover() then click",
          ],
          correctOptionIndex: 0,
          explanation:
            "Visibility + click ensures actionability and stability.",
        },
      ],
    },
    {
      id: "sec-11",
      title: "Module 11 — Popups, Dialogs, Downloads, Frames & Multi-Tab",
      questions: [
        {
          id: "q-11-422",
          text: "Which Playwright event is used to handle browser dialogs (alerts, confirms, prompts)?",
          options: [
            "page.on('dialog')",
            "page.on('alert')",
            "page.on('modal')",
            "page.on('popup')",
          ],
          correctOptionIndex: 0,
          explanation:
            "page.on('dialog') listens for alert/confirm/prompt dialogs so you can accept/dismiss them.",
        },
        {
          id: "q-11-423",
          text: "How do you accept a JavaScript confirm dialog and optionally read its message?",
          options: [
            "page.on('dialog', d => { await d.accept(); })",
            "page.on('dialog', async d => { console.log(d.message()); await d.accept(); })",
            "page.dialog.accept()",
            "page.acceptDialog()",
          ],
          correctOptionIndex: 1,
          explanation:
            "The dialog callback receives a Dialog; call d.message() and await d.accept().",
        },
        {
          id: "q-11-424",
          text: "Which API captures a newly opened popup window created by window.open()?",
          options: [
            "page.waitForPopup()",
            "page.waitForEvent('popup')",
            "browser.waitForPopup()",
            "context.waitForPopup()",
          ],
          correctOptionIndex: 1,
          explanation:
            "page.waitForEvent('popup') (or page.waitForPopup shortcut) captures the popup Page object.",
        },
        {
          id: "q-11-425",
          text: "To download a file triggered by a click, which Playwright method pattern should you use?",
          options: [
            "const [download] = await Promise.all([ page.waitForEvent('download'), locator.click() ])",
            "await locator.click(); page.waitForDownload()",
            "Use page.setDownloadPath() before clicking",
            "page.download(locator)",
          ],
          correctOptionIndex: 0,
          explanation:
            "Wait for the 'download' event in parallel with the click to capture the Download object.",
        },
        {
          id: "q-11-426",
          text: "Which Download method returns the suggested filename?",
          options: [
            "download.filename()",
            "download.suggestedFilename()",
            "download.path()",
            "download.suggestedFilename()",
          ],
          correctOptionIndex: 3,
          explanation:
            "download.suggestedFilename() returns the filename suggested by server/headers.",
        },
        {
          id: "q-11-427",
          text: "How do you save a Download to a specific path?",
          options: [
            "await download.saveAs(path)",
            "await download.save(path)",
            "download.path = path",
            "page.saveDownload(download, path)",
          ],
          correctOptionIndex: 0,
          explanation:
            "Call await download.saveAs(path) to persist the file to chosen location.",
        },
        {
          id: "q-11-428",
          text: "Which Playwright API allows intercepting the download URL before saving?",
          options: [
            "page.on('download')",
            "page.route()",
            "page.on('request')",
            "page.on('response')",
          ],
          correctOptionIndex: 0,
          explanation:
            "The 'download' event provides the Download object and URL; you can inspect before saving.",
        },
        {
          id: "q-11-429",
          text: "Which method throws if a dialog is not handled and blocks test execution?",
          options: [
            "No method throws; dialogs always auto-dismiss",
            "Uncaught dialog will timeout actions",
            "dialog.waitFor() throws",
            "page.dismissDialog()",
          ],
          correctOptionIndex: 1,
          explanation:
            "If a dialog appears and the test doesn't handle it, subsequent actions may hang or time out.",
        },
        {
          id: "q-11-430",
          text: "Which method is recommended to close a popup page returned by window.open()?",
          options: [
            "popup.close()",
            "page.closePopup()",
            "context.close(popup)",
            "browser.closePage(popup)",
          ],
          correctOptionIndex: 0,
          explanation:
            "Call popup.close() on the Page instance representing the popup.",
        },
        {
          id: "q-11-431",
          text: "Which pattern isolates code that handles dialogs during a click action?",
          options: [
            "const [dialog] = await Promise.all([ page.waitForEvent('dialog'), locator.click() ])",
            "page.on('dialog', () => {}) ; locator.click()",
            "Use try/catch around click",
            "dialogHandler(); locator.click()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Using Promise.all with waitForEvent('dialog') and click ensures deterministic handling.",
        },
        {
          id: "q-11-432",
          text: "What does page.waitForEvent('popup') return?",
          options: [
            "A browser context",
            "A Page (popup)",
            "A Frame",
            "A Download",
          ],
          correctOptionIndex: 1,
          explanation:
            "It yields the Page instance for the newly opened popup window.",
        },
        {
          id: "q-11-433",
          text: "Which API allows you to handle file chooser dialog (native file picker)?",
          options: [
            "page.once('filechooser', async fc => { await fc.setFiles(path) })",
            "page.on('filedialog')",
            "locator.setInputFiles() before click",
            "Use OS automation",
          ],
          correctOptionIndex: 0,
          explanation:
            "Listen to 'filechooser' and call fc.setFiles() or use setInputFiles on the input element.",
        },
        {
          id: "q-11-434",
          text: "True or False: page.on('dialog') callback must be synchronous (cannot await inside).",
          options: ["True", "False"],
          correctOptionIndex: 1,
          explanation:
            "False — the dialog handler can be async and you can await d.accept()/d.dismiss().",
        },
        {
          id: "q-11-435",
          text: "Which Playwright object represents a download and exposes methods to save it?",
          options: ["Download", "FileHandle", "Resource", "Response"],
          correctOptionIndex: 0,
          explanation:
            "The Download object represents a download and provides saveAs(), suggestedFilename(), etc.",
        },
        {
          id: "q-11-436",
          text: "To capture multiple downloads triggered by a single user flow, which pattern is best?",
          options: [
            "Use multiple waitForEvent('download') calls in parallel",
            "Call waitForEvent multiple times sequentially",
            "Use page.on('download') to collect all downloads",
            "Use downloads folder polling",
          ],
          correctOptionIndex: 2,
          explanation:
            "page.on('download') lets you record multiple downloads as they start during the flow.",
        },
        {
          id: "q-11-437",
          text: "Which is TRUE about file uploads via setInputFiles()?",
          options: [
            "It works only with visible inputs",
            "It can set multiple files by passing an array",
            "It invokes native file picker UI",
            "It requires browser-level permissions",
          ],
          correctOptionIndex: 1,
          explanation:
            "You can pass one or more files to setInputFiles() programmatically without UI interaction.",
        },
        {
          id: "q-11-438",
          text: "Which API lets you get the path of a downloaded file in Playwright's temporary folder?",
          options: [
            "download.path()",
            "download.tempPath()",
            "download.saveAs()",
            "download.failure()",
          ],
          correctOptionIndex: 0,
          explanation:
            "download.path() returns the path where Playwright stored the file temporarily (if available).",
        },
        {
          id: "q-11-439",
          text: "Which Playwright API helps detect navigation inside a popup after window.open()?",
          options: [
            "popup.waitForNavigation()",
            "page.waitForNavigation()",
            "context.waitForNavigation()",
            "browser.waitForNavigation()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Call popup.waitForNavigation() on the popup Page instance to wait for its navigation events.",
        },
        {
          id: "q-11-440",
          text: "When automating cross-origin iframes, which Playwright feature matters most?",
          options: [
            "Same-origin policy blocks everything;",
            "FrameLocator and cross-origin support to interact with frames safely",
            "You must use XPath only",
            "Use window.postMessage hacks",
          ],
          correctOptionIndex: 1,
          explanation:
            "FrameLocator lets you access elements inside (including cross-origin) frames as Playwright supports it within limits.",
        },
        {
          id: "q-11-441",
          text: "Which method retrieves a frame by name or URL?",
          options: [
            "page.frame({ name: '...' })",
            "page.getFrame('...')",
            "page.findFrame('...')",
            "frame.locator('...')",
          ],
          correctOptionIndex: 0,
          explanation:
            "page.frame({ name, url }) returns the Frame matching criteria.",
        },
        {
          id: "q-11-442",
          text: "True or False: Locators issued on a FrameLocator will search inside that frame context.",
          options: ["True", "False"],
          correctOptionIndex: 0,
          explanation:
            "True — FrameLocator scopes queries to inside the targeted frame.",
        },
        {
          id: "q-11-443",
          text: "Which approach is best to switch to a popup's context and perform actions there?",
          options: [
            "const popup = await page.waitForEvent('popup'); await popup.click('selector')",
            "page.click('selector', { popup: true })",
            "browser.switchTo(popup)",
            "Use page.evaluate to control popup",
          ],
          correctOptionIndex: 0,
          explanation:
            "Obtain the popup Page and use its methods (popup.click, popup.goto, etc.).",
        },
        {
          id: "q-11-444",
          text: "Which Playwright API helps you wait until a frame finishes loading content?",
          options: [
            "frame.waitForLoadState()",
            "page.waitForSelector()",
            "frame.wait()",
            "page.waitForLoad()",
          ],
          correctOptionIndex: 0,
          explanation:
            "frame.waitForLoadState() waits for 'load', 'domcontentloaded', or 'networkidle' states for that frame.",
        },
        {
          id: "q-11-445",
          text: "Which event fires when a new page (tab) is created in a context?",
          options: [
            "context.on('page')",
            "browser.on('tab')",
            "page.on('newTab')",
            "context.on('newPage')",
          ],
          correctOptionIndex: 0,
          explanation:
            "context.on('page') or context.waitForEvent('page') captures new Page instances in the context.",
        },
        {
          id: "q-11-446",
          text: "Which statement about handling dialogs is recommended?",
          options: [
            "Always use page.on('dialog') and accept without checking",
            "Assert dialog.message() then accept/dismiss as needed",
            "Ignore dialogs; Playwright auto-accepts them",
            "Use page.evaluate to window.alert = () => {}",
          ],
          correctOptionIndex: 1,
          explanation:
            "Read the message to assert expected content before accepting or dismissing to avoid silent failures.",
        },
        {
          id: "q-11-447",
          text: "Which is a safe way to click a link that opens a new tab and then verify its URL?",
          options: [
            "const [newPage] = await Promise.all([ context.waitForEvent('page'), locator.click() ]); await expect(newPage).toHaveURL('...')",
            "locator.click(); page.waitForTimeout(1000); page.goto(new URL())",
            "Use window.open spy and do nothing",
            "Open link in same tab with ctrlKey",
          ],
          correctOptionIndex: 0,
          explanation:
            "Wait for the 'page' event in the context and then assert the newPage's URL.",
        },
        {
          id: "q-11-448",
          text: "Which field on the Dialog object returns the default value provided in prompt dialogs?",
          options: [
            "dialog.defaultValue()",
            "dialog.defaultValue",
            "dialog.default",
            "dialog.defaultValue()",
          ],
          correctOptionIndex: 1,
          explanation:
            "dialog.defaultValue is a property providing the prompt's default value (use as dialog.defaultValue).",
        },
        {
          id: "q-11-449",
          text: "Which is best practice when testing file-download behaviors in CI where filesystem is ephemeral?",
          options: [
            "Use download.saveAs to a temp path and assert contents or checksum",
            "Rely only on server logs",
            "Avoid download tests in CI",
            "Use headful mode with manual check",
          ],
          correctOptionIndex: 0,
          explanation:
            "Save to a temporary path, verify content or filename, and clean up afterwards so CI stays reliable.",
        },
        {
          id: "q-11-450",
          text: "Scenario: Clicking 'Export' triggers a download but also navigates away. How do you capture the download reliably?",
          options: [
            "Use Promise.all to wait for 'download' and the navigation: const [download] = await Promise.all([ page.waitForEvent('download'), locator.click() ])",
            "Click and then page.waitForDownload()",
            "Disable navigation with preventDefault",
            "Use page.setDownloadBehavior()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Promise.all with waitForEvent('download') and click captures the download even if navigation occurs.",
        },
        {
          id: "q-11-451",
          text: "Scenario: A prompt dialog expects user input. How to provide the value?",
          options: [
            "page.on('dialog', async d => { await d.accept('text') })",
            "Use page.evaluate to set prompt response",
            "Call d.message('text')",
            "Use page.prompt('text')",
          ],
          correctOptionIndex: 0,
          explanation:
            "In the dialog handler, call d.accept('value') to provide prompt input.",
        },
        {
          id: "q-11-452",
          text: "Scenario: A popup opens and you need to wait until it loads and then interact. Which sequence is best?",
          options: [
            "const popup = await page.waitForEvent('popup'); await popup.waitForLoadState(); await popup.locator('...').click()",
            "page.waitForTimeout(1000); page.click('popup-selector')",
            "Use page.evaluate to access popup DOM",
            "Ignore popup and operate on main page",
          ],
          correctOptionIndex: 0,
          explanation:
            "Obtain popup page, wait for load state, then perform interactions on the popup Page.",
        },
        {
          id: "q-11-453",
          text: "Scenario: The app uses an iframe for login form and cross-origin. You must fill username inside it. Which approach should you use?",
          options: [
            "const frame = page.frame({ url: /login/ }); await frame.fill('#user','x')",
            "Use page.locator('iframe').fill('#user','x') directly",
            "Use XPath to access iframe contents",
            "Cannot access cross-origin iframe",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use page.frame({ url or name }) to get the Frame and then interact inside it. Playwright supports frame access within allowed contexts.",
        },
        {
          id: "q-11-454",
          text: "Scenario: A test must verify a child tab finishes an OAuth flow and closes itself. How to assert the final redirect result?",
          options: [
            "Wait for new page via context.waitForEvent('page'), waitForNavigation on that page, assert URL, then close",
            "Assume redirect and proceed",
            "Use page.waitForLoadState() on main page",
            "Use arbitrary timeout then check server",
          ],
          correctOptionIndex: 0,
          explanation:
            "Capture the new tab, wait for its navigation to final URL, assert, and then close.",
        },
        {
          id: "q-11-455",
          text: "Scenario: A link opens a page in a new tab but you must interact with both tabs. Which is correct?",
          options: [
            "Capture the new Page object and use it alongside the original Page to perform actions",
            "Only one Page can be active; close original",
            "Use browser.switchToTab() to swap global context",
            "Use page.focus('tab')",
          ],
          correctOptionIndex: 0,
          explanation:
            "Handle both Page objects directly; Playwright exposes APIs per Page.",
        },
        {
          id: "q-11-456",
          text: "Scenario: A test fails intermittently due to unexpected confirm dialogs from third-party code. Best mitigation?",
          options: [
            "Register a page.on('dialog') that asserts message contains expected substring and dismisses unknown dialogs to fail explicitly",
            "Use force: true to bypass",
            "Ignore dialogs entirely",
            "Use long timeouts to wait them out",
          ],
          correctOptionIndex: 0,
          explanation:
            "Handle dialogs deterministically and assert their content to detect unexpected behavior.",
        },
        {
          id: "q-11-457",
          text: "Scenario: A file download is corrupted in CI occasionally. What should you check first?",
          options: [
            "Check download.saveAs usage and validate checksum/content length",
            "Increase timeouts",
            "Use headful mode",
            "Ignore intermittent failures",
          ],
          correctOptionIndex: 0,
          explanation:
            "Verify saved file integrity and ensure download completed before asserting content.",
        },
        {
          id: "q-11-458",
          text: "Scenario: You need to test a file chooser that opens via a custom button (not an input). Best approach?",
          options: [
            "Use page.waitForEvent('filechooser') and click the button in parallel, then fc.setFiles()",
            "Use setInputFiles on a selector that is not present",
            "Use OS-level automation",
            "Cannot automate file chooser",
          ],
          correctOptionIndex: 0,
          explanation:
            "Wait for 'filechooser' event and click the triggering button; then set files on the FileChooser object.",
        },
        {
          id: "q-11-459",
          text: "Scenario: A popup is blocked by browser popup blocker unless user gesture exists. How to trigger it in test?",
          options: [
            "Perform the user gesture (click) in the test that leads to window.open() so popup isn't blocked",
            "Use page.evaluate to call window.open directly (works always)",
            "Change browser settings via Playwright API",
            "popup blockers can't be bypassed",
          ],
          correctOptionIndex: 0,
          explanation:
            "Popup must be created in direct response to user gesture; simulate that click in test.",
        },
        {
          id: "q-11-460",
          text: "Scenario: A test must assert an iframe’s inner button is clicked and triggers an event in parent using postMessage. How to validate?",
          options: [
            "Use frame.locator('button').click() then wait for parent to receive a UI change or network request",
            "Use page.evaluate to access iframe DOM directly",
            "Use XPath across frame boundary",
            "PostMessage can't be tested",
          ],
          correctOptionIndex: 0,
          explanation:
            "Perform action in frame and assert parent result (UI change or request) to validate messaging.",
        },
        {
          id: "q-11-461",
          text: "Scenario: A modal opens in a popup and you need to accept confirm inside it. Which is the right approach?",
          options: [
            "Capture popup page, register popup.on('dialog') for its dialogs, then perform actions that trigger dialog",
            "Register page.on('dialog') on parent only",
            "Use page.evaluate to override confirm globally",
            "Skip popup tests",
          ],
          correctOptionIndex: 0,
          explanation:
            "Dialogs emitted in the popup must be handled on the popup Page object.",
        },
        {
          id: "q-11-462",
          text: "Scenario: A download is initiated via a POST request triggered in the page. How to capture it?",
          options: [
            "Await page.waitForEvent('download') in parallel with the action triggering the POST",
            "Intercept the POST with page.route and abort",
            "Rely on server logs",
            "Use page.goto directly",
          ],
          correctOptionIndex: 0,
          explanation:
            "The download event is emitted when browser starts the download; wait for it in parallel with the triggering action.",
        },
        {
          id: "q-11-463",
          text: "Scenario: Frame locator selects the wrong frame because multiple frames match. How to disambiguate?",
          options: [
            "Use frame({ name: '...', url: /.../ }) or narrow with frameLocator('#id') to target specific frame",
            "Use nth-frame index always",
            "Use global page.locator that crosses frames",
            "Use XPath parent traversal",
          ],
          correctOptionIndex: 0,
          explanation:
            "Specify name or URL or use a precise frameLocator scope to pick the intended frame.",
        },
        {
          id: "q-11-464",
          text: "Scenario: A test must verify a redirect in a popup after authentication and then close it. Recommended sequence?",
          options: [
            "const popup = await page.waitForEvent('popup'); await popup.waitForNavigation(); await expect(popup).toHaveURL(/success/); await popup.close();",
            "Click and immediately close main page",
            "Use timeout then check server",
            "Assume redirect succeeded",
          ],
          correctOptionIndex: 0,
          explanation:
            "Capture the popup Page, wait for its navigation, assert the final URL, then close.",
        },
        {
          id: "q-11-465",
          text: "Scenario: Intermittent dialog content differs; tests should fail fast when unexpected. Best practice?",
          options: [
            "Assert dialog.message() matches expected and throw if not, rather than auto-accepting everything",
            "Always accept dialogs",
            "Dismiss all dialogs silently",
            "Ignore dialogs with long timeouts",
          ],
          correctOptionIndex: 0,
          explanation:
            "Assert dialog content ensures you detect unexpected behavior rather than hiding it.",
        },
        {
          id: "q-11-466",
          text: "Scenario: A test must download multiple files concurrently and validate all contents. Best structure?",
          options: [
            "Attach page.on('download') to collect downloads and for each await download.saveAs(tempPath) then validate content",
            "Click multiple times and hope OS handles it",
            "Use sequential downloading only",
            "Use fixed sleep and then check folder",
          ],
          correctOptionIndex: 0,
          explanation:
            "Collect downloads via event handler, save each, and validate deterministically.",
        },
        {
          id: "q-11-467",
          text: "Scenario: A popup uses window.opener to communicate back. How do you listen for that communication?",
          options: [
            "Listen for page events or UI changes in the opener page after popup actions",
            "Use context.on('message')",
            "Use browser events",
            "Cannot test window.opener",
          ],
          correctOptionIndex: 0,
          explanation:
            "After popup triggers postMessage or modifies opener, assert the opener's resulting UI or requests.",
        },
        {
          id: "q-11-468",
          text: "Scenario: A test must ensure a frame loads a specific third-party script. How to assert it?",
          options: [
            "Use frame.waitForFunction to check window.someLib exists or intercept network for script URL",
            "Use CSS selector to find script tag in parent",
            "Use page.textContent()",
            "Check main page HTML source",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use frame.waitForFunction or route to confirm the script presence or network request.",
        },
        {
          id: "q-11-469",
          text: "Scenario: A file chooser is blocked by browser UI in headless mode. What to do?",
          options: [
            "Use the filechooser event or setInputFiles on the input element; headless supports these programmatic actions",
            "Headless cannot handle file pickers; use headful",
            "Use OS-level automation",
            "Skip tests",
          ],
          correctOptionIndex: 0,
          explanation:
            "Programmatic setInputFiles works without invoking native UI even in headless.",
        },
        {
          id: "q-11-470",
          text: "Scenario: You need to test anchor tags opening external sites in new tabs but want to avoid real network calls. How to proceed?",
          options: [
            "Route network requests for target origins to a mock response and still capture the new page event",
            "Block all external navigation",
            "Use real external sites",
            "Skip new-tab behavior",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use page.route to mock responses and still verify tab opening and URL.",
        },
        {
          id: "q-11-471",
          text: "Scenario: A confirm dialog must be dismissed to test negative path. How to structure?",
          options: [
            "await Promise.all([ page.waitForEvent('dialog').then(d => d.dismiss()), locator.click() ])",
            "Click then dismiss dialog later",
            "Use page.acceptDialog()",
            "Override window.confirm globally",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use Promise.all to handle dialog dismissal at the moment it's opened by the click.",
        },
        {
          id: "q-11-472",
          text: "Scenario: A multi-tab flow needs ordering: open tab A, then B, then act on A again. Best practice?",
          options: [
            "Capture each Page instance in sequence and await required navigations before switching between them programmatically",
            "Use page.bringToFront() only",
            "Close and reopen tabs to reorder",
            "Use sleep between actions",
          ],
          correctOptionIndex: 0,
          explanation:
            "Maintain references to Page objects and coordinate awaited actions per tab.",
        },
        {
          id: "q-11-473",
          text: "Scenario: A frame uses lazy loading; sometimes your locator times out. Which helps?",
          options: [
            "Use frame.waitForSelector with proper timeout or waitForLoadState before interacting",
            "Decrease timeouts globally",
            "Use document.querySelector in evaluate",
            "Use nth-match selectors",
          ],
          correctOptionIndex: 0,
          explanation:
            "Waiting explicitly for element/frame readiness prevents flaky timeouts.",
        },
        {
          id: "q-11-474",
          text: "Scenario: A popup opens a payment widget from a different origin. Which limitation must you consider?",
          options: [
            "Cross-origin restrictions may prevent direct DOM access; rely on UI changes or network interception",
            "You can always access cross-origin popup DOM",
            "Use XPath to bypass restrictions",
            "Playwright cannot interact with cross-origin pages",
          ],
          correctOptionIndex: 0,
          explanation:
            "Cross-origin contexts restrict direct access; test observable effects or network interactions instead.",
        },
        {
          id: "q-11-475",
          text: "Scenario: After clicking a download link, you want to verify its MIME type. How?",
          options: [
            "Inspect download.suggestedFilename() and then read the saved file or inspect the associated response headers via route/response",
            "Guess from filename extension",
            "Use page.contentType()",
            "Use download.mimeType()",
          ],
          correctOptionIndex: 0,
          explanation:
            "Either inspect headers via response interception or read saved file to confirm MIME content.",
        },
        {
          id: "q-11-476",
          text: "Scenario: A dialog is created by third-party script and contains dynamic tokens. How do you test reliably?",
          options: [
            "Match dialog.message() with a regex that covers the dynamic parts and assert the stable portion before accepting",
            "Ignore the dialog content",
            "Always dismiss the dialog",
            "Use exact string matching only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use regex/partial matching to validate stable parts while allowing dynamic tokens.",
        },
        {
          id: "q-11-477",
          text: "Scenario: A test needs to ensure an iframe posts a message to parent and parent shows a toast. How to verify?",
          options: [
            "Click inside frame to trigger postMessage and assert the parent toast appears via expect(parentToast).toBeVisible()",
            "Use evaluate to intercept postMessage directly",
            "Use tests to check browser console",
            "Cannot validate cross-frame messaging",
          ],
          correctOptionIndex: 0,
          explanation:
            "Trigger action inside frame and assert parent's resulting UI to confirm messaging.",
        },
        {
          id: "q-11-478",
          text: "Scenario: Multiple tabs opened by the app must be closed during test teardown. How to implement safely?",
          options: [
            "Iterate over context.pages() and close pages that are not the initial one, ensuring awaits for close()",
            "Kill the browser process",
            "Ignore pages and let CI clean up",
            "Close context only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Iterate context.pages() and close each Page properly to avoid leaks and race conditions.",
        },
        {
          id: "q-11-479",
          text: "Scenario: A test must simulate a user cancelling a file chooser. How to do it?",
          options: [
            "In the filechooser handler call fc.cancel() or simply not call setFiles and dismiss accordingly",
            "Call fc.setFiles([])",
            "Throw an error",
            "Use page.evaluate to close dialog",
          ],
          correctOptionIndex: 0,
          explanation:
            "FileChooser has cancel() behavior (or simply not setting files) to simulate user cancel.",
        },
        {
          id: "q-11-480",
          text: "Scenario: You need to intercept the download response to validate headers before saving. How?",
          options: [
            "Use page.route to intercept the request and then inspect response headers via page.request or waitForResponse",
            "download.suggestedFilename() gives headers",
            "Cannot access headers",
            "Use page.evaluate to fetch the URL",
          ],
          correctOptionIndex: 0,
          explanation:
            "Intercept network via page.route or waitForResponse to inspect headers prior to saving.",
        },
        {
          id: "q-11-481",
          text: "Scenario: A popup is opened in a different origin and immediately redirects; you need to assert the initial URL. What should you do?",
          options: [
            "Capture the popup via waitForEvent('page') and record its url immediately, then follow redirects",
            "Use timeout and hope the initial URL is available",
            "You cannot access initial URL",
            "Intercept open call",
          ],
          correctOptionIndex: 0,
          explanation:
            "Get the popup Page object as soon as it's created and inspect its initial URL before redirect.",
        },
        {
          id: "q-11-482",
          text: "Scenario: Tests flake because dialogs sometimes appear from browser extensions only in headful mode. How to avoid flakiness?",
          options: [
            "Run tests in a clean profile/context without extensions and assert dialogs as part of test contract",
            "Ignore dialogs",
            "Use headful mode only",
            "Use random waits",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use clean browser contexts in CI to avoid extension interference and make tests deterministic.",
        },
        {
          id: "q-11-483",
          text: "Scenario: A frame embeds a payment iframe that uses postMessage and returns a token. How to verify token receipt?",
          options: [
            "After performing actions in child frame, assert parent receives token by checking network calls or updated UI containing token",
            "Try to read token from child frame directly always",
            "Use XPath to extract token",
            "Not possible to test",
          ],
          correctOptionIndex: 0,
          explanation:
            "Observe the observable outcome in the parent (network request or UI) to confirm token receipt.",
        },
        {
          id: "q-11-484",
          text: "Scenario: A test must ensure that a popup does not leak cookies back to the opener. How to verify?",
          options: [
            "Inspect context or storage state before and after popup actions and ensure cookies haven't changed for original context",
            "Assume popup isolation by default",
            "Use page.evaluate to read cookies from popup",
            "Check server logs only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Compare storage/cookies pre/post to ensure no leakage occurred between contexts.",
        },
        {
          id: "q-11-485",
          text: "Scenario: A page uses sandboxed iframes with restricted permissions. Which limitation should tests account for?",
          options: [
            "Sandboxed iframes may block scripts; you may not be able to interact if sandbox prevents same-origin access",
            "Sandboxing has no effect in tests",
            "Playwright overrides sandbox",
            "Use XPath to bypass sandbox",
          ],
          correctOptionIndex: 0,
          explanation:
            "Sandbox attributes restrict capabilities; design tests that interact only with allowed features or assert resulting UI.",
        },
        {
          id: "q-11-486",
          text: "Scenario: A popup calls window.close() itself after finishing. How to ensure your test captures its final state before it closes?",
          options: [
            "Listen for page.waitForEvent('close') and also for navigation or console logs prior to close to capture state",
            "You cannot capture final state",
            "Use long timeout",
            "Use page.evaluate to prevent close",
          ],
          correctOptionIndex: 0,
          explanation:
            "Attach listeners to capture events or logs before the popup closes to record its final state.",
        },
        {
          id: "q-11-487",
          text: "Scenario: A test must validate that clicking a disabled link opens nothing. How to assert it?",
          options: [
            "Ensure context.waitForEvent('page') does not occur by wrapping click and expecting a timeout or assert no new pages appear",
            "Click and assume nothing happens",
            "Use waitForTimeout to observe nothing",
            "Use page.on('dialog')",
          ],
          correctOptionIndex: 0,
          explanation:
            "Ensure no 'page' events are emitted or explicitly assert that the count of context.pages() remains the same.",
        },
        {
          id: "q-11-488",
          text: "Scenario: You must test that a download link includes authenticated tokens in headers. How to validate?",
          options: [
            "Intercept the request with page.route or use waitForResponse and inspect headers for auth token",
            "Read token from download.suggestedFilename",
            "Use UI assertions only",
            "Check cookie store",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use network interception to assert presence of auth headers or query params before save.",
        },
        {
          id: "q-11-489",
          text: "Scenario: A test requires interacting with a frame that is removed and reinserted frequently. How to avoid stale-frame errors?",
          options: [
            "Re-query frame using page.frame() before each interaction and wait for selector inside it",
            "Cache frame object once and reuse forever",
            "Use XPath across removals",
            "Use force: true",
          ],
          correctOptionIndex: 0,
          explanation:
            "Always re-acquire frame references and wait for inner elements to ensure validity.",
        },
        {
          id: "q-11-490",
          text: "Scenario: Your test clicks a link that calls window.open(url, '_blank', 'noopener'). How does that affect opener relationship?",
          options: [
            "noopener severs window.opener connection; test cannot rely on opener communication",
            "It still keeps opener intact",
            "noopener only affects target attribute",
            "Playwright ignores noopener",
          ],
          correctOptionIndex: 0,
          explanation:
            "noopener prevents the new window from accessing window.opener for security.",
        },
        {
          id: "q-11-491",
          text: "Scenario: A site uses service workers to serve downloads; how to ensure test receives actual file content?",
          options: [
            "Intercept fetch/network responses (via route/waitForResponse) or save the download and validate file bytes",
            "Service workers block tests",
            "Use page.content() to read file",
            "Use headful mode",
          ],
          correctOptionIndex: 0,
          explanation:
            "Intercepting network or validating saved file ensures correct content despite service workers.",
        },
        {
          id: "q-11-492",
          text: "Scenario: You must test an iframe that is added dynamically via JavaScript. How do you wait for it?",
          options: [
            "Use page.waitForSelector('iframe#id') then const frame = await page.frame({ name: 'id' })",
            "Use sleep",
            "Use xpath forever",
            "Assume frame exists",
          ],
          correctOptionIndex: 0,
          explanation:
            "Wait for the iframe element to appear, then access its Frame object for interactions.",
        },
        {
          id: "q-11-493",
          text: "Scenario: A popup shows an authentication code which the opener must read. How can opener access it?",
          options: [
            "Popup can communicate via window.opener.postMessage and opener listens for message to capture code",
            "Opener reads popup DOM directly always",
            "Use cookies to pass code",
            "Use server-side polling",
          ],
          correctOptionIndex: 0,
          explanation:
            "PostMessage is the typical secure way popups communicate back to the opener window.",
        },
        {
          id: "q-11-494",
          text: "Scenario: You need to test that multiple downloads do not collide in filename on save. What to do?",
          options: [
            "Save each download to unique temp paths and assert filenames or content",
            "Save all to same path and check overwrites",
            "Use fixed names",
            "Rely on browser deduplication",
          ],
          correctOptionIndex: 0,
          explanation:
            "Assign unique temporary paths per download to avoid collisions and allow deterministic assertions.",
        },
        {
          id: "q-11-495",
          text: "Scenario: A frame's origin differs and prevents direct evaluation; you must verify DOM changes. How to proceed?",
          options: [
            "Observe effects in parent (network, UI) or use accessibility-layer locators if provided; avoid direct cross-origin frame DOM access",
            "Use frame.evaluate always",
            "Use XPath to access directly",
            "Use CSS selectors on parent",
          ],
          correctOptionIndex: 0,
          explanation:
            "Cross-origin frames impose DOM access limits; test observable effects instead.",
        },
        {
          id: "q-11-496",
          text: "Scenario: A download link responds with 302 redirect and final file; how do you get final filename?",
          options: [
            "Wait for download event and inspect download.suggestedFilename() after redirect completes",
            "Inspect original link only",
            "Use page.goto on the link directly",
            "Use response.url() of initial request",
          ],
          correctOptionIndex: 0,
          explanation:
            "The Download object reflects final headers after redirects, including suggested filename.",
        },
        {
          id: "q-11-497",
          text: "Scenario: A test must verify that an iframe uses 'allow' attributes (camera, microphone). How to assert?",
          options: [
            "Check iframe.getAttribute('allow') or inspect frame's sandbox/allow attributes via locator",
            "Try to access device directly",
            "Assume permissions exist",
            "Use navigator.permissions API in evaluate always",
          ],
          correctOptionIndex: 0,
          explanation:
            "Inspect iframe attributes to ensure required permissions are declared.",
        },
        {
          id: "q-11-498",
          text: "Scenario: The app opens many short-lived popups; tests must detect failures quickly. How to implement robustly?",
          options: [
            "Listen for context.on('page') and page.on('close') events, collect logs/console for each popup to diagnose fast failures",
            "Ignore popups",
            "Use global timeout",
            "Sleep longer",
          ],
          correctOptionIndex: 0,
          explanation:
            "Track lifecycle events and logs for popups to diagnose transient failures deterministically.",
        },
        {
          id: "q-11-499",
          text: "Scenario: You need to ensure a frame's sandbox attribute blocks forms. How to test?",
          options: [
            "Attempt to submit a form inside the frame and assert expected failure or no navigation",
            "Check attribute only without behavioral test",
            "Use page.evaluate to remove sandbox",
            "Use server-side verification",
          ],
          correctOptionIndex: 0,
          explanation:
            "Test actual behavior by performing form submission and asserting the result matches sandbox restrictions.",
        },
        {
          id: "q-11-500",
          text: "Scenario: A test must perform file upload and then immediately download a generated file. How to chain operations reliably?",
          options: [
            "Await upload completion and server response (via waitForResponse or UI change) then trigger and await download event",
            "Trigger download immediately after setInputFiles without waiting",
            "Use sleep sequence",
            "Upload and download in separate tests",
          ],
          correctOptionIndex: 0,
          explanation:
            "Wait for upload success (network or UI) before initiating and awaiting the download to ensure sequence.",
        },
        {
          id: "q-11-501",
          text: "Scenario: A popup triggers many console.error logs; you must fail the test when any appear. How to implement?",
          options: [
            "Attach popup.on('console') and assert no messages of type 'error' were emitted during test window",
            "Ignore console errors",
            "Use page.waitForEvent('error') only",
            "Use sleep to observe console",
          ],
          correctOptionIndex: 0,
          explanation:
            "Capture console events and fail the test if error-level messages are emitted for better visibility.",
        },
        {
          id: "q-11-502",
          text: "Scenario: A file input in an iframe must be set. How to set files inside the iframe?",
          options: [
            "Acquire the frame, then use frame.locator('input[type=file]').setInputFiles(path)",
            "Use page.setInputFiles with iframe selector",
            "Use main page to set files directly to iframe",
            "File uploads are not allowed inside iframes",
          ],
          correctOptionIndex: 0,
          explanation:
            "Get the Frame instance and use its locator to call setInputFiles on the file input.",
        },
        {
          id: "q-11-503",
          text: "Scenario: A popup is used for OAuth but sometimes the auth provider blocks automation. What workaround is recommended?",
          options: [
            "Mock the auth provider responses via network routing in tests to avoid real provider blocking",
            "Use real credentials always",
            "Use headful mode",
            "Increase timeouts",
          ],
          correctOptionIndex: 0,
          explanation:
            "Mock external auth responses to keep tests deterministic and not depend on third-party blocking.",
        },
        {
          id: "q-11-504",
          text: "Scenario: A test should verify that clicking a link with target='_blank' opens a tab with rel='noopener' — how to check?",
          options: [
            "Inspect the anchor's rel attribute directly via locator.getAttribute('rel')",
            "Open the tab and read rel from newPage",
            "Check context for opener",
            "Assume noopener is applied by default",
          ],
          correctOptionIndex: 0,
          explanation:
            "Read the anchor attribute to verify rel contains 'noopener' before clicking.",
        },
        {
          id: "q-11-505",
          text: "Scenario: A download requires authentication cookie. How do you ensure download request carries cookies?",
          options: [
            "Ensure the page/context has the authentication cookie set and then wait for download event; the browser will send cookies for same-origin requests",
            "Set header manually via download API",
            "Download cannot include cookies",
            "Use unauthenticated endpoints only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Authenticated contexts include cookies for same-origin downloads; ensure login or cookie set beforehand.",
        },
        {
          id: "q-11-506",
          text: "Scenario: A cross-origin iframe triggers a popup; you need to validate popup origin. How to assert?",
          options: [
            "Capture popup Page and assert popup.url() matches expected origin pattern",
            "Try to inspect iframe's DOM",
            "Use parent page.url()",
            "Use console messages only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Get popup Page and assert its URL or origin to validate correct domain.",
        },
        {
          id: "q-11-507",
          text: "Scenario: A popup must be reopened multiple times in a single test. How do you avoid stale references?",
          options: [
            "Await page.waitForEvent('popup') each time you trigger it and reassign the new Page variable",
            "Reuse old popup Page reference",
            "Reuse context.pages()[i]",
            "Rely on cached handles",
          ],
          correctOptionIndex: 0,
          explanation:
            "Each new popup yields a fresh Page; re-acquire via waitForEvent to avoid stale handles.",
        },
        {
          id: "q-11-508",
          text: "Scenario: Some downloads are delivered via data: URLs created dynamically. How to capture the content?",
          options: [
            "Intercept the request or read the data URL from attribute/href and decode base64 to assert contents",
            "Wait for download event (won't fire for data: URLs)",
            "Use page.screenshot to capture content",
            "Use sleep and check folder",
          ],
          correctOptionIndex: 0,
          explanation:
            "Data URLs may not trigger download events; read and decode the href or blob to verify content.",
        },
        {
          id: "q-11-509",
          text: "Scenario: An iframe is sandboxed with 'allow-scripts' but no 'allow-popups'; clicking inside should not open popups. How to assert it?",
          options: [
            "Perform the click and assert no new 'page' events in context occurred",
            "Assume sandbox prevents popups and skip test",
            "Use evaluate to call window.open and expect success",
            "Use OS-level checks",
          ],
          correctOptionIndex: 0,
          explanation:
            "Confirm no new Page objects were created in the context after the action.",
        },
        {
          id: "q-11-510",
          text: "Scenario: A popup opens but is immediately redirected to an external URL and blocked by CSP. How to detect blocked navigation?",
          options: [
            "Wait for popup navigation and catch navigation failure or inspect console errors for CSP violations",
            "Assume popup closed successfully",
            "Use page.goto for external URL",
            "Use sleep then check",
          ],
          correctOptionIndex: 0,
          explanation:
            "Monitor popup navigation and console to detect CSP or other navigation failures.",
        },
        {
          id: "q-11-511",
          text: "Scenario: You must ensure a frame's origin sets specific cookies. How to check from test?",
          options: [
            "Use frame.evaluate to read document.cookie inside frame if same-origin or inspect network requests to ensure cookie sent",
            "Use page.context().cookies() for any frame origin always",
            "Access cookies via parent page only",
            "Cookies can't be inspected",
          ],
          correctOptionIndex: 0,
          explanation:
            "Accessing cookies inside frame works if same-origin; otherwise inspect network requests that include cookies.",
        },
        {
          id: "q-11-512",
          text: "Scenario: A file input has accept attribute restricting file types. How to test rejection of unsupported type?",
          options: [
            "Call setInputFiles with unsupported file and assert UI error or no upload occurred",
            "Rely on browser enforcement only",
            "Use page.evaluate to bypass accept",
            "Use OS dialog",
          ],
          correctOptionIndex: 0,
          explanation:
            "Programmatically set files and assert application shows appropriate rejection behavior.",
        },
        {
          id: "q-11-513",
          text: "Scenario: A popup uses HTTP basic auth requiring credentials in URL; how to open it authenticated?",
          options: [
            "Use context.newPage() then page.goto('https://user:pass@host/...') or set HTTP credentials in context options",
            "Use page.authenticate()",
            "Use prompt dialog",
            "Can't automate basic auth",
          ],
          correctOptionIndex: 0,
          explanation:
            "Provide credentials in URL or use context options to configure httpCredentials for authentication.",
        },
        {
          id: "q-11-514",
          text: "Scenario: You need to emulate a download failing mid-transfer to test retry logic. How to simulate?",
          options: [
            "Intercept request via page.route and abort the response or return a network error, then assert retry behavior",
            "Unplug network cable",
            "Use long timeouts",
            "Rely on flakiness",
          ],
          correctOptionIndex: 0,
          explanation:
            "Use page.route to simulate network errors and validate application retry handling.",
        },
        {
          id: "q-11-515",
          text: "Scenario: A test must block all popup windows during a flow. Which is an approach?",
          options: [
            "Override window.open by page.evaluate to a noop or intercept 'popup' events and close them immediately",
            "Use page.setBlockPopups(true)",
            "Browser blocks popups automatically",
            "Use CSS to hide links",
          ],
          correctOptionIndex: 0,
          explanation:
            "Override window.open or handle popup events to prevent or close them during tests.",
        },
        {
          id: "q-11-516",
          text: "Scenario: A popup contains a form that posts back to the opener. How to test end-to-end?",
          options: [
            "Interact with popup Page, submit form, then assert opener Page received expected change (UI or network) via wait or event",
            "Assume opener works",
            "Submit in popup and close without asserting",
            "Use mock server only",
          ],
          correctOptionIndex: 0,
          explanation:
            "Test cross-window interactions by asserting the observable impact on the opener after popup action.",
        },
        {
          id: "q-11-517",
          text: "Scenario: A download uses Range requests for resuming; how to test resume behavior?",
          options: [
            "Use page.route to simulate partial responses and then validate application resumes download and merges parts",
            "Wait for partial download only",
            "Use download.saveAs multiple times",
            "Range requests are not testable",
          ],
          correctOptionIndex: 0,
          explanation:
            "Simulating partial responses via network routing allows testing resume logic deterministically.",
        },
        {
          id: "q-11-518",
          text: "Scenario: A popup reads window.opener.location and redirects opener — how to verify the redirect happened?",
          options: [
            "After popup action, await expect(openerPage).toHaveURL(/expected/)",
            "Check popup URL only",
            "Check server logs",
            "Use sleep",
          ],
          correctOptionIndex: 0,
          explanation:
            "Assert the opener Page's URL or UI change to confirm redirect triggered by popup.",
        },
        {
          id: "q-11-519",
          text: "Scenario: A test must ensure downloads are quarantined or checked for virus in pipeline; what is recommended?",
          options: [
            "Integrate file validation (checksum/antivirus step) in CI after saving the download before marking test success",
            "Trust downloads implicitly",
            "Use headful mode",
            "Use manual inspection",
          ],
          correctOptionIndex: 0,
          explanation:
            "Add post-download validation (checksum or AV check) to CI flow to ensure files are safe and correct.",
        },
        {
          id: "q-11-520",
          text: "Scenario: You need to test a cross-origin iframe that posts back a JSON payload to parent; how to assert payload correctness?",
          options: [
            "Observe the parent's network requests or UI changes triggered by the payload, or stub the receiving endpoint to assert payload contents",
            "Read message from iframe directly",
            "Use console logs only",
            "Not possible",
          ],
          correctOptionIndex: 0,
          explanation:
            "Verify the parent's observable behavior or intercept the network endpoint to assert payload content.",
        },
        {
          id: "q-11-521",
          text: "Scenario: Final check — which summarizes best practices for popups/frames/downloads/dialogs in tests?",
          options: [
            "Always block popups and avoid testing them",
            "Use event-based waiting (waitForEvent), handle dialogs deterministically, scope interactions to frames, intercept network for downloads, and assert observable outcomes",
            "Rely on fixed timeouts and force actions",
            "Test only in headful mode manually",
          ],
          correctOptionIndex: 1,
          explanation:
            "Best practice: deterministic event-based waits, proper dialog handling, frame scoping, network interception, and observable assertions.",
        },
      ],
    },
  ],
};
