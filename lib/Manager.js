const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		// calls parent Employee class constructor
		super(name, id, email);
		this.officeNumber = officeNumber;
	};

	getOfficeNumber() {
		return this.officeNumber;
	}

	// override to return manager
	getRole() {
		return 'Manager';
	}
};

module.exports = Manager;