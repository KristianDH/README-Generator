const fs = require('fs');
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    console.log('start asking all the Qs with inquirer')


    var inquirer = require('inquirer');
    inquirer
      .prompt([
        /* Pass questions in here */
        {
            name: 'title',
            type: 'input',
            message: ' What is the title of the application?'
        },
        {
            name: 'description',
            type: 'input',
            message: ' What is the description of the application?'
        },
        {
            name: 'installation',
            type: 'input',
            message: ' What installations are needed for the project?'
        },
        {
            name: 'usage',
            type: 'input',
            message: ' What will this application be used for?'
        },
        {
            name: 'license',
            type: 'list',
            message: 'Which License ?',
            choices: ['MIT', 'Mozilla', 'Creative']
        },
        {
            name: 'contributing',
            type: 'input',
            message: ' What is the method of contributing code for this application?'
        },
        {
            name: 'tests',
            type: 'input',
            message: ' What tests are you running on this application?'
        },
        {
            name: 'questionOne',
            type: 'input',
            message: ' What is your Github username?'
        },
        {
            name: 'questionTwo',
            type: 'input',
            message: ' What is your Email address?'
        },
      ])
      .then(function(answers) {
          console.log("answers", answers)
        // User feedback
        var license= ""
         // if else answers.lisence === 'MIT'
         if(answers.license === "MIT") {
             license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
         }

         
        // license = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

        var weirdReadMe = `
# Title : ${answers.title}

## Description : ${answers.description}

## Installation : ${answers.installation}

## Usage : ${answers.usage}

${license}

## Contributing : ${answers.contributing}

## Tests : ${answers.tests}

# Questions : ${answers.questionOne} ${answers.questionTwo}
        `

        console.log('read me string ?',weirdReadMe)
        

        fs.writeFile("kristian.md", weirdReadMe, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("Saved successfully!");
        })
      })

}

// function call to initialize program
init();
