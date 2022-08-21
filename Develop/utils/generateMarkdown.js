// TODO: Create a function that returns a license badge based on which license is passed in
  function renderLicenseBadge(license) {
    if (license === "MIT") {
      return "![license](https://img.shields.io/badge/license-MIT-blue)";
    } else if (license === "Apache 2.0") {
      return "![license](https://img.shields.io/badge/Apache%202.0-Apache%202.0-green)";
    } else if (license === "GNU General Public License v3.0") {
      return "![license]((https://img.shields.io/badge/License-GPL%20V3.0-green)]";
    } else {
      return "";
    }
  }

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return "[MIT](http://opensource.org/licenses/MIT)";
    } else if (license === "Apache 2.0") {
      return "[Apache 2.0](http://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GNU General Public License v3.0") {
      return "[GNU General Public License v3.0]((https://opensource.org/licenses/GPL-3.0)";
    } else {
      return "";
    }
  }

// TODO: Create a function that returns the license section of README
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.License)}
  ${renderLicenseLink(data.License)}

## Table of Contents
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## Contributions
${data.contribution}

## Tests
${data.test}

## License
${(data.license)}

## Contact
My Github profile [${data.github}](https://github.com/${data.github})

${data.email}

`;
};

module.exports = generateMarkdown;
