'use strict';
const inquirer = require('inquirer');
const output = [];

const startQuestion = [
    {
        type: 'list',
        name: 'position_name',
        message: "What is the team member's position?",
        choices: ['Employee', 'Engineer', 'Intern', 'Manager']
    },
];

function employeeFun() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'real_name',
                message: "What is the team member's name?",
            },
            {
                type: 'input',
                name: 'id_info',
                message: "What is the team member's ID?",
            },
            {
                type: 'input',
                name: 'email_address',
                message: "What is the team member's email address?",
            },
            {
                type: 'confirm',
                name: 'askAgain',
                message: 'Want to enter another team member (just hit enter for YES)?',
                default: true,
            }
        ])
        .then((answers) => {
            output.push(answers);
            if (answers.askAgain) {
                ask();
            } else {
                console.log(output.join(', '));
            }
        })
}

function managerFun() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'real_name',
                message: "What is the team member's name?",
            },
            {
                type: 'input',
                name: 'id_info',
                message: "What is the team member's ID?",
            },
            {
                type: 'input',
                name: 'email_address',
                message: "What is the team member's email address?",
            },
            {
                type: 'input',
                name: 'office_number',
                message: "What is the manager's office number?",
            },
            {
                type: 'confirm',
                name: 'askAgain',
                message: 'Want to enter another team member (just hit enter for YES)?',
                default: true,
            }
        ])
        .then((answers) => {
            output.push(answers);
            if (answers.askAgain) {
                ask();
            } else {
                console.log(output.join(', '));
            }
        })
};

function internFun() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'real_name',
                message: "What is the team member's name?",
            },
            {
                type: 'input',
                name: 'id_info',
                message: "What is the team member's ID?",
            },
            {
                type: 'input',
                name: 'email_address',
                message: "What is the team member's email address?",
            },
            {
                type: 'input',
                name: 'intern_school',
                message: "What is the intern's school?",
            },
            {
                type: 'confirm',
                name: 'askAgain',
                message: 'Want to enter another team member (just hit enter for YES)?',
                default: true,
            },
        ])
        .then((answers) => {
            output.push(answers);
            if (answers.askAgain) {
                ask();
            } else {
                console.log(output.join(', '));
            }
        })
};

function engineerFun() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'real_name',
                message: "What is the team member's name?",
            },
            {
                type: 'input',
                name: 'id_info',
                message: "What is the team member's ID?",
            },
            {
                type: 'input',
                name: 'email_address',
                message: "What is the team member's email address?",
            },
            {
                type: 'input',
                name: 'engineer_github',
                message: "What is the engineer's github?",
            },
            {
                type: 'confirm',
                name: 'askAgain',
                message: 'Want to enter another team member (just hit enter for YES)?',
                default: true,
            }
        ])
        .then((answers) => {
            output.push(answers);
            if (answers.askAgain) {
                ask();
            } else {
                console.log(output.join(', '));
            }
        })
};

function ask() {
    inquirer.prompt(startQuestion).then((answers) => {
        if (answers.position_name === 'Manager') {
            managerFun();
        } else if (answers.position_name === 'Engineer') {
            engineerFun();
        } else if (answers.position_name === 'Intern') {
            internFun();
        } else {
            employeeFun();
        }
    });
}

ask()

