const Employee = require('../lib/Employee');

test('Create an employee object', () => {
	const employee = new Employee('Michael', 1234, 'tydom@gmail.com');

	expect(employee.name).toEqual(expect.any(String));
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
});

test('Check to see if can getName()', () => {
	const name = 'Michael';
	const employee = new Employee(name);

	expect(employee.getName()).toBe(name);
});

test('Check to see if can getId()', () => {
	const id = 1234;
	const employee = new Employee('Michael', id);

	expect(employee.getId()).toBe(id);
});

test('check to see if can getEmail()', () => {
	const email = 'test@gmail.com';
	const employee = new Employee('Michael', 12354, email);

	expect(employee.getEmail()).toBe(email);
});

test('Use getRole() to return "Employee" as role', () => {
	const role = 'Employee';
	const employee = new Employee('Michael', 12345, 'test@gmail.com');

	expect(employee.getRole()).toBe(role);
});