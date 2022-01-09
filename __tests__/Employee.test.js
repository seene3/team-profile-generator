const Employee = require('../lib/Employee.js')

test('check for employee object', () => {
    const employee = new Employee('Sean');
    employee.id = 'seene3'
    employee.email = 'Sean@gmail.com'

    expect(employee.name).toBe('Sean');
    expect(employee.id).toBe('seene3');
    expect(employee.email).toBe('Sean@gmail.com');
});
