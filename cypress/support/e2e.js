// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
//Import cypress-mocha-awesome reporter 
import 'cypress-mochawesome-reporter/register';
//Using Cypress Xpath
require('cypress-xpath');
//Using Cypress Grep for executing specific test cases like sanity,Regresstion test cases
require('cypress-grep')()
//Cypress iframe
require ('cypress-iframe')

import managersPageObjects from '../support/PageObjects/BankManagerPageObjects.cy.js';
import addCustomerPageObjects from '../support/PageObjects/AddCustomerPageObjects.cy.js';
import openAccountAddPageObjects from '../support/PageObjects/OpenAccountPageObjects.cy.js';
import demoWebshopHomepageObjects from '../support/DemoShopPageObjects/DemoshopHomePageObjects.cy.js';
import demoshopRegisterPageObjects from '../support/DemoShopPageObjects/DemoshopRegisterPageObjects.cy.js';
import demoshopRegisterResult from '../support/DemoShopPageObjects/DemoshopRegisterResult.cy.js';



// Alternatively you can use CommonJS syntax:
// require('./commands')

/*// Hide fetch/XHR requests calls on Cypress test runner
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}*/

/*//For Read data from excel file
const xlsx = require('node-xlsx').default;
const fs = require('fs');//for file
const path = require('path')//for file path
module.exports = (on, config) => {
   on('task',{ parseXlsx({filePath})
        { return new Promise((resolve, reject) =>
            {try
                    { 
                        const jsonData = xlsx.parse(fs.readFileSync(filePath));
	                        resolve(jsonData);
                    } catch (e)
  	                {
                            reject(e);

                    } 
            });
        }
    }); 
}*/

