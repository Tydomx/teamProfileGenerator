const Intern = require('../lib/Intern');

test('Set intern school', () => {
	const school = 'UT-Austin';
	const intern = new Intern('Michael', 12345, 'test@gmail.com', school);

	expect(intern.school).toBe(school);
});

test('Set school using getSchool()', () => {
	const school = 'UT-Austin';
	const intern = new Intern('Michael', 12345, 'test@gmai.com', school);

	expect(intern.getSchool()).toBe(school);
});

test('Use getRole() to return "Intern" as role', () => {
	const role = 'Intern';
	const intern = new Intern('Michael', 12345, 'test@gmail.com', 'UT-Austin');

	expect(intern.getRole()).toBe(role);
});