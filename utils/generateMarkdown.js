// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.project}

  ## Description
  ${data.description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Tests](#tests)
    * [Credits](#credits)
    * [Contributing](#contributing)
    * [Questions](#questions)
    * [License](#license)
    
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.tests}
  
  ## Credits
  ${data.credit}

  ## Contributing
  ${data.contribute}

  ## Questions
  If you have any questions about this project, contact me directly at ${data.email}. You can view more of my projects at https://www.github.com/${data.github}.
  
  ## License
  Licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
