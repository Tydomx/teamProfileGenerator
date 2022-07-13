// prompts for intern
module.exports = [
	{
		type: 'input',
		name: 'internName',
		message: "Input your intern's name",
		validate: internNameInput => {
			if (internNameInput && internNameInput.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your intern's name");
				return false;
			};
		}
	},
	{
		type: 'input',
		name: 'internId',
		message: "Input your intern's employee ID:",
		validate: internID => {
			if (internID && internID.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your intern's ID:");
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'internEmail',
		message: "Input your intern's email address:",
		validate: internEmail => {
			if (internEmail && internEmail.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your intern's email address:");
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'internSchool',
		message: "Input your intern's school name",
		validate: internSchool => {
			if (internSchool && internSchool.trim().length > 0) {
				return true;
			}
			else {
				console.log("Input your intern's school name");
				return false;
			}
		}
	}
];