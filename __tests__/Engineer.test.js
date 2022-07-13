const Engineer = require('../lib/Engineer');

test("Set engineer's GitHub username", () => {
	const getUser = 'tydomx';
	const engineer = new Engineer('Michael', 12345, 'test@gmail.com', getUser);

	expect(engineer.gitHub).toBe(getUser);
});

test('Get GitHub account using getGitHub()', () => {
	const getUser = 'tydomx';
	const engineer = new Engineer('Michael', 12345, 'test@gmail.com', getUser);

	expect(engineer.gitHub).toBe(getUser);
});

test('Use getRole() to return "Engineer" as role', () => {
	const role = 'Engineer';
	const engineer = new Engineer('Michael', 12345, 'test@gmail.com', 'tydomx');

	expect(engineer.getRole()).toBe(role);
});