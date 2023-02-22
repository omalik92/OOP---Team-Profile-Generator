const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Prompt for the team manager's information
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the team manager’s name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the team manager’s employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the team manager’s email address:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the team manager’s office number:",
    },
  ])
  .then((managerAnswers) => {
    // destructuring obect from inquirer
    const { name, id, email, officeNumber } = managerAnswers;
    //creates a new manager object from the manager class
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);

    // Create an empty array to store the team members
    const teamMembers = [manager];

    // Call a function to prompt the user for the next action
    promptNextAction(teamMembers);
  });

// Prompt for the next action
function promptNextAction(teamMembers) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "nextAction",
        message: "What would you like to do next?",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building the team",
        ],
      },
    ])
    .then((nextActionAnswer) => {
      // Call the appropriate function based on the user's choice
      if (nextActionAnswer.nextAction === "Add an engineer") {
        promptEngineer(teamMembers);
      } else if (nextActionAnswer.nextAction === "Add an intern") {
        promptIntern(teamMembers);
      } else {
        // The user chose to finish building the team, so we can do something with the teamMembers array here
        console.log("Team building complete.");
      }
    });
}

// Prompt for the engineer's information
function promptEngineer(teamMembers) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer’s name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer’s employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer’s email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer’s GitHub username:",
      },
    ])
    .then((engineerAnswers) => {
      const { name, id, email, officeNumber } = engineerAnswers;
      //creates a new Engineer object from the Engineer class
      const engineer = new Engineer(name, id, email, officeNumber);

      // pushes the engineer employee to the team meembers array
      teamMembers.push(engineer);

      // Call a function to prompt the user for the next action
      promptNextAction(teamMembers);
    });
}

// Prompt for the engineer's information
function promptIntern(teamMembers) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer’s name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer’s employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer’s email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer’s GitHub username:",
      },
    ])
    .then((internAnswers) => {
      const { name, id, email, officeNumber } = internAnswers;
      //creates a new Engineer object from the Engineer class
      const intern = new Intern(name, id, email, officeNumber);

      // pushes the engineer employee to the team meembers array
      teamMembers.push(intern);

      // Call a function to prompt the user for the next action
      promptNextAction(teamMembers);
    });
}
