const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamMembers = [];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function createManager() {
       return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
            }
        ]);
    };

    function createEngineer() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's GitHub username?",
            }
        ]);
    };

    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's  ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
            },
            {
                type: "input",
                name: "school",
                message: "What school is the intern studying at?",
            }
        ]);
    };


function createNext() {
    return inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Which team member would you like to add?",
            choices: ['Intern', 'Engineer', 'I do not need to add anymore team members.']
        }
    ]);
};
// need to fix
function employee() {
    createNext().then(function (res) {
        if (res.addEmployee === 'Intern') {
            createIntern().then(function (res) {
                const intern = new Intern(res.name, res.id, res.email, res.school);
                teamMembers.push(intern);
                employee();
            });
        } else if (res.addEmployee === 'Enineer') {
            createEngineer().then(function (res) {
                const engineer = new Engineer(res.name, res.id, res.email, res.github);
                teamMembers.push(engineer);
                employee();
            });
        } else {
            //console.log("Team members up to date.");
            var teamHTML = render(teamMembers);
            writeToFile(OUTPUT_DIR, outputPath, HTML);
        };
    });
};

createManager().then(function (res) {
    const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
    teamMembers.push(manager);
    employee();
});

function writeToFile(directory, fileName, data) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);

    };
    fs.writeFile(fileName, data, function(err){
        if(err) {
            return console.log(error);
        };
        
    });
};





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
