const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Jay', 100100, 'Jay@yahoo.com');

    expect(employee.name).toBe('Jay');
    expect(employee.ID).toBe(100100);
    expect(employee.email).toBe('Jay@yahoo.com');
    expect(employee.ID).toEqual(expect.any(Number));
});