const inquirer = require('inquirer')
const Manager =  require('../lib/Manager')
const Engineer =  require('../lib/Engineer')
const Intern =  require('../lib/Intern')

export var team = {
    manager: [],
    engineers:[],
    interns:[]
}

const callMenu = () =>{
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do next?',
            choices: ['Add Engineer', 'Add Intern', 'Inspect Team', 'Finish Team']
        }
      ]).then(menuChoice =>{
          switch(menuChoice.menu){
            case 'Add Engineer':
                promptEngineer();
                break;
            case 'Add Intern':
                promptIntern()
                break;
            case 'Inspect Team':
                inspectTeam();
                break;
            case 'Finish Team':
                return
          }

      }) 
}


const promptManager = () => {
    console.log(`
=================
Add a Manager
=================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your manager's name? (Required)",
        validate: managerNameInput => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter your manager's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "Provide manager's ID number. (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your manager's ID number!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Provide manager's email address. (Required)",
        validate: emailInput => {
          if (emailInput) {
            if(!emailInput.includes('@')){
                console.log('Please enter a valid email address.')
                return false
            }
            return true;
          } else {
            console.log('Please enter an email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "Provide manager's office number. (Required)",
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter manager's office number!");
            return false;
          }
        }
      }
    ])
    .then(managerData => {
        team.manager.push(new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber));
        callMenu();
    });
};

const promptEngineer = () => {
    console.log(`
=================
Add an Engineer
=================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name? (Required)",
        validate: engineerNameInput => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("Please enter your engineer's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "Provide engineer's ID number. (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your manager's ID number!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Provide engineer's email address. (Required)",
        validate: emailInput => {
          if (emailInput) {
            if(!emailInput.includes('@')){
                console.log('Please enter a valid email address.')
                return false
            }
            return true;
          } else {
            console.log('Please enter an email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: "Provide engineer's Github account. (Required)",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter engineer's Github account!");
            return false;
          }
        }
      }
    ])
    .then(engineerData => {
        team.engineers.push(new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github));
        callMenu();
    });
};

const promptIntern = () => {
    console.log(`
=================
Add an Intern
=================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your intern's name? (Required)",
        validate: internNameInput => {
          if (internNameInput) {
            return true;
          } else {
            console.log("Please enter your intern's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "Provide intern's ID number. (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your intern's ID number!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Provide intern's email address. (Required)",
        validate: emailInput => {
          if (emailInput) {
            if(!emailInput.includes('@')){
                console.log('Please enter a valid email address.')
                return false
            }
            return true;
          } else {
            console.log('Please enter an email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: "Provide intern's school. (Required)",
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter intern's school!");
            return false;
          }
        }
      }
    ])
    .then(internData => {
        team.interns.push(new Intern(internData.name, internData.id, internData.email, internData.officeNumber));
        callMenu();
    });
};

const inspectTeam = () => {
    manager = team.manager[0];
    console.log(`
=================
Manager
=================
Name: ${manager.getName()}
ID: ${manager.getId()}
Email: ${manager.getEmail()}
Office Number: ${manager.getOfficeNumber()}
    `);
    if(!(team.engineers.length===0)){
        console.log(`
=================
Engineers
=================`
        )
        for(i=0; i<team.engineers.length; i++){
            engineer = team.engineers[i];
            console.log(`
Name: ${engineer.getName()}
ID: ${engineer.getId()}
Email: ${engineer.getEmail()}
Github Account: ${engineer.getGithub()}
=================
            `);

        }
    }
    if(!(team.interns.length===0)){
        console.log(`
=================
Interns
=================`
        )
        for(i=0; i< team.interns.length; i++){
            intern = team.interns[i];
            console.log(`
Name: ${intern.name}
ID: ${intern.id}
Email: ${intern.email}
School: ${intern.school}
=================
            `);

        }
    }
    return callMenu();
}
module.exports = {promptManager, promptEngineer, promptIntern,inspectTeam, callMenu, team}
