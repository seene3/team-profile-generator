const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

const team = [];

function startApp() {
    addMember()
}

function addMember() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is their name?'
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is their id?'
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is their email?'
            },
            {
                type: 'list',
                name: 'role',
                message: 'Select their role?',
                choices: [
                    'Manager',
                    'Engineer',
                    'Intern'
                ]
            },
        ])
        .then(function({name, id, email, role}) {
            let roleInfo = ''
            if (role === 'Manager') {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'roleInfo',
                        message: 'What is their Office Number?'
                    })
            }
            else if (role === 'Engineer') {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'roleInfo',
                        message: 'What is their Github?'
                })
            }
            else {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'roleInfo',
                        message: 'What is their School?'
                    })
            }
        })
        .then(function({roleInfo}) {
            let newMember;
            if (role === 'Manager') {
                newMember = new Manager(name, id, email, roleInfo)
                console.log(newMember)
            }
            else if (role === 'Engineer') {
                newMember = new Engineer(name, id, email, roleInfo)
                console.log(newMember)
            }
            else if (role === 'Intern') {
                newMember = new Intern(name, id, email, roleInfo)
                console.log(newMember)
            }
        })
}

startApp();