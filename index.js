// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
    .prompt([
      {
          type: 'input',
          name: 'github',
          message: 'what is your github username? (required)',
          validate: username => {
              if(username) {
                  return true;
              } else {
                  console.log('you must enter a github username!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: 'what is your email address? (required)',
          validate: email => {
              if(email.includes('@')) {
                  return true;
              } else {
                  console.log('you must enter an email address!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'project',
          message: 'what is your project name? (required)',
          validate: project => {
              if(project) {
                  return true;
              } else {
                  console.log('you must enter a project name!');
                  return false;
              }
          }
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
        name: 'tests',
        message: 'what command should be run for tests?',
        // default: 'npm index'
      },
      {
          type: 'input',
          name: 'credit',
          message: 'list collaborators and third-party assets, if any'
      },
      {
          type: 'input',
          name: 'contribute',
          message: 'what do users need to know about contributing to repo?'
      },
      {
          type: 'list',
          name: 'license',
          message: 'what licenses does your project have?',
          choices: ['MIT', 'Apache', 'GPL', 'BSD', 'Unlicensed', 'Other']
      }
    ]);
};

// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) throw err;
        console.log('check out your new README.md!');
    });
};



// // TODO: Create a function to initialize app,
questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(data => {
        return writeToFile(data)
    })
    .catch(err => {console.log(err)});