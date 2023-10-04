// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utilities/generateMarkdown");

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    name: "Title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Give a short description of your project.",
  },
  {
    type: "input",
    name: "Installation",
    message: "What is required to install your project?",
  },
  {
    type: "input",
    name: "Usage",
    message: "How do you use your project?",
  },
  {
    type: "input",
    name: "Credits",
    message: "List any collaborators on your project.",
  },
  {
    type: "input",
    name: "License",
    message: "Choose license for project.",
  },
  {
    type: "input",
    name: "Badges",
    message: "List badges for project.",
  },
  {
    type: "input",
    name: "Features",
    message: "List features for project.",
  },
  {
    type: "input",
    name: "Contributing",
    message: "How can others contribute to your project?",
  },
  {
    type: "input",
    name: "Tets",
    message: "How can your project be tested?",
  },
  {
    type: "input",
    name: "GitHub",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
