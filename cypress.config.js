const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //To generate cypress Report
 // reporter: 'cypress-mochawesome-reporter',
 reporter: 'mochawesome',
 //To Stop Auto Rerun in test runner after saving the test use the below command
 //watchForFileChanges: false,
  numTestsKeptInMemory: 50,
  e2e: {
    setupNodeEvents(on, config) {
      /*cypressGrepPlugin(config)

      on('task', {
        grep (config) {
          return cypressGrepPlugin(config)
        },
      })

      return config*/
      ////
      // implement node event listeners here
      //Launch Chrome browser in incognito mode
      on("before:browser:launch", (browser={}, launchOptions) => {
       if (browser.family === 'chromium' && browser.name !== "electron") {
         launchOptions.args.push("--incognito");

         }
        return launchOptions
      });
      ////
    
      // implement node event listeners here
      //To generate cypress report
      //require('cypress-mochawesome-reporter/plugin')(on);
    },
    //For recording  actions will use below command
    //experimentalStudio:true
  },
});
