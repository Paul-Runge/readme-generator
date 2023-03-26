// TODO: Include packages needed for this application
// inquire, fs
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of this project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please give instructions to install this project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please describe the usage of this project:',
  },  
  {
    type: 'input',
    name: 'contributing',
    message: 'How can someone contribute to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can someone test this project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for this project:',
    choices: ['Apache-2.0', 'Boost-1.0', 'BSD-3-Clause', 'MIT', 'Unlicense'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  } 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file generated!');
    }
  });
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const { title, description, installation, usage, contributing, tests, license, githubUsername, email } = answers;

    const licenseBadge = `![License](https://img.shields.io/badge/License-${license}-green.svg)`;

    const data = `# ${title}
    ${licenseBadge}
    
    ## Description

    ${description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
    
    ## Installation
    
    ${installation}
    
    ## Usage
    
    ${usage}
    
    ## Contributing
    
    ${contributing}
    
    ## Tests
    
    ${tests}
    
    ## License
    
    This project is licensed under the ${license} license.
    
    ## Questions
    
    If you have any questions, please contact ${githubUsername} at ${email}.`;

    writeToFile('README.md', data);
  });
}


// Function call to initialize app
init();
