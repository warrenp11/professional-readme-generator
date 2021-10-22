// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Prompt inquirer with an array of questions for user input
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
        name: 'repo',
        message: 'what is name of the github repository for your project? (required)',
        validate: username => {
            if(username) {
                return true;
            } else {
                console.log('you must enter the github repository name!');
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
        message: 'what command should be run for tests?'
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
          choices: ['MIT', 'GNU General Public License 2.0', 'Apache License 2.0', 'GNU General Public License 3.0']
      }
    ]);
};

// write README file
const writeToFile = data => {
    fs.writeFile('temp.README.md', data, err => {
        if (err) throw err;
        console.log('check out your new README.md!');
    });
};

// initialize app
questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(data => {
        return writeToFile(data)
    })
    .catch(err => {console.log(err)});