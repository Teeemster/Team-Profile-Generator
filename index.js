const mainHTML = require('./src/mainHTML');
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
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
                    name: 'name',
                    message: "What is the team member's name?",
                },
                {
                    type: 'input',
                    name: 'ID',
                    message: "What is the team member's ID?",
                },
                {
                    type: 'input',
                    name: 'email',
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
                const employee = new Employee(answers.name, answers.ID, answers.email)
                output.push(employee);
                if (answers.askAgain) {
                    ask();
                } else {
                    getHTML(output);
                }
            })
    }

    function managerFun() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the team member's name?",
                },
                {
                    type: 'input',
                    name: 'ID',
                    message: "What is the team member's ID?",
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the team member's email address?",
                },
                {
                    type: 'input',
                    name: 'office',
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
                const manager = new Manager(answers.name, answers.ID, answers.email, answers.office)
                output.push(manager);
                if (answers.askAgain) {
                    ask();
                } else {
                    getHTML(output);
                }
            })
    };

    function internFun() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the team member's name?",
                },
                {
                    type: 'input',
                    name: 'ID',
                    message: "What is the team member's ID?",
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the team member's email address?",
                },
                {
                    type: 'input',
                    name: 'school',
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
                const intern = new Intern(answers.name, answers.ID, answers.email, answers.school)
                output.push(intern);
                if (answers.askAgain) {
                    ask();
                } else {
                    getHTML(output);
                }
            })
    };

    function engineerFun() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the team member's name?",
                },
                {
                    type: 'input',
                    name: 'ID',
                    message: "What is the team member's ID?",
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the team member's email address?",
                },
                {
                    type: 'input',
                    name: 'github',
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
                const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github)
                output.push(engineer);
                if (answers.askAgain) {
                    ask();
                } else {
                    getHTML(output);
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

const getHTML = output => {
    const htmlData = mainHTML(output)

    fs.writeFile('./dist/index.html', htmlData, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The profile has been formed.")
        }
    })
};

    

    

     

   




