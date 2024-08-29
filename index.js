// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs  from 'fs';
import path from "path";
import {generateMarkdown} from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: 'Please enter your project title:',
  },
  {
    type: "input",
    name: "description",
    message: 'Please enter your description:',
  },
  {
    type: "input",
    name: "install",
    message: 'Please enter installation instructions:',
  },
  {
    type: "input",
    name: "usage",
    message: 'Please enter usage information',
  },
  {
    type: "input",
    name: "contributions",
    message: 'Please enter contribution guidlines:',
  },
  {
    type: "input",
    name: "testing",
    message: 'Please enter testing instructions:',
  },
  {
    type: "checkbox",
    name: "license",
    message: 'Choose your license:',
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "github",
    message: 'Please enter your GitHub username:',
  },
  {
    type: "input",
    name: "email",
    message: 'Please enter your email:'
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('genREADME.md', )

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
