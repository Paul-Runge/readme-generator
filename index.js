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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
