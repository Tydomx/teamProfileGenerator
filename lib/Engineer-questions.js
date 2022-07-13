// prompts for engineer
module.exports = [
	{
		type: 'input',
		name: 'engineerName',
		message: "Input your engineer's name",
		validate: engineerNameInput => {
			if (engineerNameInput && engineerNameInput.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your engineer's name:");
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'engineerId',
		message: "Input your engineer's employee ID:",
		validate: engineerIdInput => {
			if (engineerIdInput && engineerIdInput.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your engineer's employee ID:");
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'engineerEmail',
		message: "Input your engineer's email address:",
		validate: engineerEmailInput => {
			if (engineerEmailInput && engineerEmailInput.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your engineer's employee ID:");
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'engineerGitHubUser',
		message: "Input your engineer's GitHub Username:",
		validate: engineerGitHubInput => {
			if (engineerGitHubInput && engineerGitHubInput.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your engineer's GitHub Username:");
				return false;
			};
		}
	}
];