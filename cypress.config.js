const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: [
      'cypress/e2e/**/*.spec.js',
      'cypress/e2e/**/**/*.spec.js',
    ],
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        log(message) {
          console.log(message);
          return null;
        }
      });
    }
  }
});
