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
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;




const questions = [  
  { type: 'input',    
    name: 'title',    
    message: 'What is the title of this project?',  
  },  
  { type: 'input',    
    name: 'description',    
    message: 'Please provide a short description of this project:',  
  },  
  { type: 'input',    
    name: 'installation',    
    message: 'Please give instructions to install this project:',   
  },  
  { type: 'input',    
    name: 'usage',    
    message: 'Please describe the usage of this project:',  
  },    
  { type: 'input',    
    name: 'contributing',    
    message: 'How can someone contribute to this project?',   
  },  
  { type: 'input',    
    name: 'tests',    
    message: 'How can someone test this project?',  
  },  
  { type: 'list',    
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