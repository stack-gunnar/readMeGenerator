
const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

console.log()

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how you will use this application.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What are the testing instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for project.',
        choices: [
            'MIT',
            'jquery',
            'BootStrap - MIT',
            'Apache 2.0',
            'Eclipse Public 1.0',
            'Mozilla Public 2.0',
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is you GitHub username?',
    }
    {
        type: 'input',
        name: 'email',
        message: 'What is you email address?',
    }
])

