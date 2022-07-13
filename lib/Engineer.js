// import employee
const Employee = require('./Employee');

class Engineer extends Employee {
	constructor(name, id, email, gitHub) {
		// call parent Employee class constructor
		super(name, id, email);

		this.gitHub = gitHub;
	};

	getGitHub() {
		return this.github;
	}

	getRole() {
		return 'Engineer';
	}
}

module.exports = Engineer;