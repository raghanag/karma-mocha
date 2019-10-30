module.exports = function(config) {
    config.set({

        frameworks: ["mocha", "karma-typescript"],

        files: [
            { pattern: "node_modules/expect.js/index.js" },
            { pattern: "src/**/*.ts" }
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        karmaTypescriptConfig: {
            reports: {
                html: {
                    directory: 'reports/unit-tests',
                }
            }
        },

        reporters: ["mocha", "karma-typescript"],

        browsers: ["ChromeHeadless"],

        singleRun: true,

        logLevel: config.LOG_DEBUG,
    });
};
