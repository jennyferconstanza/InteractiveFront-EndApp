// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateReadMe = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project.",
  },
  {
    type: "input",
    name: "install",
    message: "Please provide installation instructions for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the use of your project?",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "What guidelines must others follow in order to contribute to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "How do you test this project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project use?",
    choices: [
      "MIT License",
      "Apache 2.0",
      "GNU General Public License v3.0",
      "None",
    ],
  },
  {
    type: "input",
    name: "github",
    message:
      "What is your Github username for others to contact you in regards to your project?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     return fs.writeFile(fileName, data, (error) => {
       if (error) throw error;
       console.log("success!");
     });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
        // we call genMark and are passing the answers-and the function that contains the
        const markDown = generateReadMe(data);
        writeToFile("./README.md", markDown);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
}

// Function call to initialize app
init();
