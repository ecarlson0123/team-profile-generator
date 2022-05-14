
const fs = require('fs')
const inquirer = require('inquirer')
const Manager =  require('../lib/Manager')
const Engineer =  require('../lib/Engineer')
const Intern =  require('../lib/Intern')

var team = {
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
                const fileContent = generateHTML();
                writeHTMLFile(fileContent);
                console.log('New team file created. (In "dist" folder)')
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
        team.interns.push(new Intern(internData.name, internData.id, internData.email, internData.school));
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

const generateHTML = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>My Team</title>
    </head>
    
    <body>
    
      <header class="d-flex flex-row bg-dark mb-10 justify-content-center align-items-center">
          <h1 class="text-center text-light display-2 font-weight-bolder p-5">My Team</h1>
      </header>
    
      <div class="justify-content-around d-flex flex-wrap">
    <! ------------------------------------ TEAM CARDS GO HERE---------------------------- >
            ${team.manager.map((employee) => generateCard(employee))}
            ${team.engineers.map((employee) => generateCard(employee))}
            ${team.interns.map((employee) => generateCard(employee))}
        </div>
    
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    
    </html>
    `
};
    
const generateCard = (employee) => {
    var role = employee.getRole();
    var name = employee.getName();
    var id = employee.getId();
    var email = employee.getEmail();
    if(role === 'Manager'){
        officeNumber = employee.getOfficeNumber();
        return `
        <div class="card m-4 col-3 bg-light border-primary ">
            <div class="card-title mt-2 font-weight-bold h4"> ${name}</div>
            <div class="card-subtitle border-bottom border-primary pb-2 ">${role}</div>
            <div class="card-body pl-0">
            <p class="card-text"><span class="font-weight-bold">Email: </span> <a href="mailto:${email}">${email}</a></p>
            <p class="card-text"><span class="font-weight-bold">ID: </span>${id}</p>
            <p class="card-text"><span class="font-weight-bold">Office Number: </span>${officeNumber}</p>
            </div>
        </div>
        `
    }
    else if(role === 'Engineer'){
        var github = employee.getGithub();
        return `
        <div class="card m-4 col-3 bg-light border-primary ">
            <div class="card-title mt-2 font-weight-bold h4"> ${name}</div>
            <div class="card-subtitle border-bottom border-primary pb-2 ">${role}</div>
            <div class="card-body pl-0">
            <p class="card-text"><span class="font-weight-bold">Email: </span> <a href="mailto:${email}">${email}</a></p>
            <p class="card-text"><span class="font-weight-bold">ID: </span>${id}</p>
            <p class="card-text"><span class="font-weight-bold">Github Username: </span><a href="https://github.com/${github}" target="_blank">${github}</a></p>
            </div>
        </div>
        `
    }
    else if(role === 'Intern'){
        var school = employee.getSchool();
        return `
        <div class="card m-4 col-3 bg-light border-primary ">
            <div class="card-title mt-2 font-weight-bold h4"> ${name}</div>
            <div class="card-subtitle border-bottom border-primary pb-2 ">${role}</div>
            <div class="card-body pl-0">
            <p class="card-text"><span class="font-weight-bold">Email: </span> <a href="mailto:${email}">${email}</a></p>
            <p class="card-text"><span class="font-weight-bold">ID: </span>${id}</p>
            <p class="card-text"><span class="font-weight-bold">School: </span>${school}</p>
            </div>
        </div>
        `
    }
};

const writeHTMLFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }
    
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
            ok: true,
            message: 'File created!'
        });
        });
    });
};
module.exports = {promptManager, promptEngineer, promptIntern,inspectTeam, callMenu, team}
