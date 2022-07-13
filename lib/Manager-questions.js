// prompts for manager
module.exports = [
	{
		type: 'input',
		name: 'managerName',
		message: "Input your manager's name",
		validate: managerName => {
			if (managerName && managerName.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your manager's name");
				return false;
			};
		}
	},
	{
		type: 'input',
		name: 'managerId',
		message: "Input your manager's employee ID:",
		validate: managerID => {
			if (managerID && managerID.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your manager's ID:");
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'managerEmail',
		message: "Input your manager's email address:",
		validate: managerEmail => {
			if (managerEmail && managerEmail.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your manager's email address:");
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'managerOfficeNumber',
		message: "Input your manager's office number:",
		validate: managerOfficeNum => {
			if (managerOfficeNum && managerOfficeNum.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your manager's office number:");
				return false;
			}
		}
	}
];