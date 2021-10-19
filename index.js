// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
    },
    {
        type: 'input',
        name: 'project',
        message: 'what is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'provide a description for your project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'what are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples for use'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'list collaborators and third-party assets, if any'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'what command should be run for tests?',
        // default: 'npm index'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'what do users need to know about contributing to repo?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'what licenses does your project have?'
    },
    ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
