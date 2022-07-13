// choices to prompt user
module.exports = [
	{
		type: 'list',
		name: 'listChoices',
		message: 'Please choose an option below:',
		choices: ['Add an Engineer', 'Add an Intern', 'Done Generating Profiles'],
		validate: listChoices => {
			if (listChoices === "Add an Engineer" || listChoices === "Add an Intern") {
				return true;
			}
			else if (listChoices === "Done Generating Profiles") {
				return true;
			}
			else {
				console.log("Please choose an option below:");
				return false;
			};
		}
	}];