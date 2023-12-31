const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utilities/generateMarkdown");


const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a short description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What is required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your project?",
  },
  {
    type: "input",
    name: "credits",
    message: "List any collaborators on your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose license for project.",
    choices: ["MIT", "Apache 2.0", "GNU GPL v3", "None"],
  },
  {
    type: "input",
    name: "badges",
    message: "List badges for project.",
  },
  {
    type: "input",
    name: "features",
    message: "List features for project.",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How can your project be tested?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README generated");
  });
}


function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent);
  });
}


init();
