// import dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// import objects
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import question prompts
const employeeQuestions = require('./lib/Employee-questions');
const managerQuestions = require('./lib/Manager-questions');
const engineerQuestions = require('./lib/Engineer-questions');
const internQuestions = require('./lib/Intern-questions');
const htmlTemp = require('./lib/html-template');

// array to hold team members
let teamProfileArr = [];

// function writes output HTML file
const writeToFile = (htmlTempArr) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(`./dist/team-profile.html`, htmlTempArr.join(''), function (err) {
			// if there's an error, reject promise and send error to promise's '.catch()' method
			if (err) {
				reject(err);
				// return out of function to make sure Promise doesn't execute resolve func as well
				return;
			};

			// then resolve promise and send successful data to `.then()` method
			resolve({
				ok: true,
				message: 'File created! Output HTML file is located in the "dist" folder.'
			});
		});
	});
};

// generate HTML file
function generateHtml() {
	const htmlTempArr = htmlTemp.generateHtml(teamProfileArr);
	writeToFile(htmlTempArr);
};

// add intern profile function
function addIntern() {
	inquirer
		.prompt(internQuestions)
		.then(function (data) {
			const internName = data.internName;
			const internId = data.internId;
			const internEmail = data.internEmail;
			const internSchool = data.internSchool;
			const teamMember = new Intern(internName, internId, internEmail, internSchool);

			teamProfileArr.push(teamMember);

			addTeamMember();
		});
};

// add engineer profile function
function addEngineer() {
	inquirer
		.prompt(engineerQuestions)
		.then(function (data) {
			const engineerName = data.engineerName;
			const engineerId = data.engineerId;
			const engineerEmail = data.engineerEmail;
			const engineerGitHub = data.engineerGitHub;
			const teamMember = new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub);

			teamProfileArr.push(teamMember);

			addTeamMember();
		});
};

// add team member function
function addTeamMember() {
	inquirer
		.prompt(employeeQuestions)
		.then(function (data) {
			switch (data.listChoices) {
				case 'Add Engineer Profile':
					addEngineer();
					break;
				case 'Add Intern Profile':
					addIntern();
					break;
				case 'Done Generating Profiles':
					generateHtml();
					break;
			};
		});
};

// add Manager profile function
function addManager() {
	inquirer
		.prompt(managerQuestions)
		.then(function (data) {
			const managerName = data.managerName;
			const managerId = data.managerId;
			const managerEmail = data.managerEmail;
			const managerOfficeNum = data.managerOfficeNum;
			const teamMember = new Manager(managerName, managerId, managerEmail, managerOfficeNum);

			teamProfileArr.push(teamMember);

			addTeamMember();
		});
};

// initializing application
function init() {
	inquirer
		.prompt([{
			message: 'Welcome to Team Profile Generator! Add your team name:',
			name: 'teamName'
		}
		])
		.then(function (data) {
			const teamName = data.teamName;
			teamProfileArr.push(teamName);
			addManager();
		});
};

// call to initialize app
init();