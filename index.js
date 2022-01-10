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
            console.log(role)
            let newMember;
            let roleInfo = ''
            if (role === 'Manager') {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'roleInfo',
                        message: 'What is their Office Number?'
                    })
                    .then(function({roleInfo}) {
                        newMember = new Manager(name, id, email, roleInfo)
                        //console.log(newMember)
                        team.push(newMember);
                        anotherMember()
                        console.log(team)
                    })
            }
            else if (role === 'Engineer') {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'roleInfo',
                        message: 'What is their Github?'
                    })
                    .then(function({roleInfo}) {
                        newMember = new Engineer(name, id, email, roleInfo)
                        //console.log(newMember)
                        team.push(newMember);
                        anotherMember()
                        console.log(team)
                    })
            }
            else {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'roleInfo',
                        message: 'What is their School?'
                    })
                    .then(function({roleInfo}) {
                        newMember = new Intern(name, id, email, roleInfo)
                        //console.log(newMember)
                        team.push(newMember);
                        anotherMember()
                        console.log(team)
                    })
            }
        })
}

function anotherMember() {
    inquirer
        .prompt({
            type: 'list',
            name: 'anotherMember',
            message: 'Would you like to add another member?',
            choices: [
                'Yes',
                'No'
            ]
        })
        .then(function({anotherMember}) {
            if (anotherMember === 'Yes') {
                addMember()
            }
        })
}

startApp();