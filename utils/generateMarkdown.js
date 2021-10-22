// returns a license badge based on which license is passed in
const renderLicenseBadge = function(data) {
  let licenseType = data.license;
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  return licenseString
  };

//generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.project}

  ![Code badge](https://img.shields.io/github/languages/top/${data.github}/${data.repo}) ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)</br>
  * [Usage](#usage)</br>
  * [Tests](#tests)</br>
  * [Credits](#credits)</br>
  * [Contributing](#contributing)</br>
  * [Questions](#questions)</br>
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
  If you have any questions about this project contact me directly at ${data.email}. You can view more of my projects at https://www.github.com/${data.github}.
  
  ## License
  Licensed under the ${data.license} license.
`;
};

module.exports = generateMarkdown;