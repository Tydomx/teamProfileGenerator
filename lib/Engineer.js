// import employee
const Employee = require('./Employee');

class Engineer extends Employee {
	constructor(name, id, email, gitHub) {
		// call parent Employee class constructor
		super(name, id, email);

		this.gitHub = gitHub;
		this.role = 'Engineer';
	};

	getGitHub() {
		return this.github;
	}

	getRole() {
		return this.role;
	}
}

module.exports = Engineer;