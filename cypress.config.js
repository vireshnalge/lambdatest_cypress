const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7g21dx',
  videoCompression: 15,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});

