const Employee = require('../lib/Engineer');

test("Set engineer's GitHub username", () => {
	const getGit = 'tydomx';
	const engineer = new Engineer('Michael', 12345, 'test@gmail.com', getGit);

	expect(engineer.gitHubUser).toBe(getGit);
});

test('Get GitHub account using getGitHub()', () => {
	const getGit = 'tydomx';
	const engineer = new Engineer('Michael', 12345, 'test@gmail.com', getGit);

	expect(engineer.getGitHub).tobe(getGit);
});

test('Use getRole() to return "Engineer" as role', () => {
	const role = 'Engineer';
	const engineer = new Engineer('Michael', 12345, 'test@gmail.com');

	expect(engineer.getRole()).toBe(role);
});