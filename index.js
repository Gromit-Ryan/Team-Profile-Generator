const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const cardArray = [];

const companyName = () => {
    return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of your company.'
                },
            ])
            .then(data => {
                const { name } = companyName;
                console.log(companyName);
            })
};

const addManager = () => {
    return inquirer 
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter the manager's name."
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter the manager's id."
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter the manager's email."
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "Please enter the manager's office number."
                },
            ])
            .then(data => {
                const { name, id, email, officeNumber } = data;
                const manager = new Manager(name, id, email, officeNumber);
                cardArray.push(manager);
            })
};

const addEmployee = () => {
    return inquirer 
            .prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: 'Which employee would you like to add?',
                    choices: ['Engineer', 'Intern']
                },
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter the employee's name."
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter the employee's id."
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter the employee's email."
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "Please enter the Engineer's Github.",
                    when: (input) => input.role === 'Engineer'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "Please enter the Intern's School",
                    when: (input) => input.role === 'Intern'
                },
                {
                    type: 'confirm',
                    name: 'confirmAddEmployee',
                    message: 'Would you like to add any more employees?',
                    default: true
                },
            ])
            .then(data => {
                const { role, name, id, email, github, school, confirmAddEmployee } = data;

                switch(role) {
                    case 'Intern':
                        const intern = new Intern(name, id, email, school);
                        cardArray.push(intern);
                        break;
                    case 'Engineer':
                        const engineer = new Engineer(name, id, email, github);
                        cardArray.push(engineer);
                        break;
                }

                if (confirmAddEmployee) {
                    return addEmployee();
                }

                return cardArray;
            })
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('The page for your team has been generated.')
    })
};

const init = () => {
    addManager()
    .then(addEmployee)
    .then(data => {
        return generateHTML(data);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err)
    })
}

init()