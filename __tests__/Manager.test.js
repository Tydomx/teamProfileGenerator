const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test("Creating manager's office number", () => {
	const officeNumber = 111;
	const employee = new Manager('Michael', 12345, 'test@gmail.com', officeNumber);

	expect(employee.officeNumber).toBe(officeNumber);
});

test('Use getRole() to return "Manager" as role', () => {
	const role = 'Manager';
	const employee = new Manager('Michael', 12345, 'test@gmail.com', 111);

	expect(employee.getRole()).toBe(role);
});