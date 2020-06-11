// TODO: Write code to define and export the Engineer class. HINT: This class is inherited from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getgitHub() {
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
}

module.exports = Engineer;