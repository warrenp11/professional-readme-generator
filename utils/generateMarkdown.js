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
  return `# ${data.title}

  ## Description
  ${`description`}

  ## Table of Contents
  ## Installation
  ${`install`}

  ## Usage
  ${`usage`}

  ## Credits
  ${`credit`}

  ## Tests
  ${`tests`}

  ## Contributing
  ${`contribute`}

  ## Questions
  If you have any questions about this project, contact me directly at ${`email`}. You can view more of my projects at ${`github`}.
  
  ## License
  Licensed under the ${`license`} license.
`;
}

module.exports = generateMarkdown;
