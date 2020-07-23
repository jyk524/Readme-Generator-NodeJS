// Dependencies

// Generate Markdown
const generateMarkdown = require("./utils/generateMarkdown");
// inquirer - for terminal prompts
var inquirer = require("inquirer");
// fs - for file working
var fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please describe your idea",
    name: "description",
  },
  {
    type: "input",
    message: "Please describe how to install this",
    name: "installation",
  },
  {
    type: "input",
    message: "Please describe how would like this to be used",
    name: "usage",
  },
  {
    type: "list",
    message: "What type of license?",
    choices: ["MIT", "ISC", "Zlib", "Apache", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "How can others contribute?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How would you like to test this?",
    name: "test",
  },
  {
    type: "input",
    message: "What is your Github profile?",
    name: "github",
  },
  {
    type: "input",
    message: "What is my email address?",
    name: "email",
  },
  {
    type: "input",
    message: "Do you have any furthur questions",
    name: "questions",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}
// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    var markdownData = generateMarkdown(response);
    writeToFile("README.md", markdownData);
  });
}

// function call to initialize program
init();
