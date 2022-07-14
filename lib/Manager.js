const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		// calls parent Employee class constructor
		super(name, id, email);
		this.officeNumber = officeNumber;
		this.role = 'Manager';
	};

	getOfficeNumber() {
		return this.officeNumber;
	}

	// override to return manager
	getRole() {
		return this.role;
	}
};

module.exports = Manager;