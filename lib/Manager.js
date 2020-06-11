// TODO: Write code to define and export the Manager class. HINT: This class is inherited from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    };

    getgitHub() {
        return this.officenumber;
    };

    getRole() {
        return "Manager";
    };
}

module.exports = Manager;