// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'BSD-3-Clause':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    case 'Boost-1.0':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
    case 'Apache-2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    default:
      return '';
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return license;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

  This project is licensed under the ${renderLicenseLink(license)} license.

  ${renderLicenseBadge(license)}`;
    } else {
      return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

You can find me on GitHub at [https://github.com/${data.githubUsername}](https://github.com/${data.githubUsername}).

If you have any questions, please contact me via email at ${data.email}.
`;
}

module.exports = generateMarkdown;