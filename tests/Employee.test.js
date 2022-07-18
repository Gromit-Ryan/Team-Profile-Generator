const Employee = require('../lib/employee')

const testEmail = 'email@email.com';
const testID = 03;
const testName = 'Gromit'

test('Create the employee object', () => {
    const employee = new Employee(testName, testID, testEmail);

    expect(employee.name).toEqual('Gromit');
    expect(employee.id).toEqual('03');
    expect(employee.email).toEqual('email@email.com');
});

test('Retrieve the name', () => {
    const employee = new Employee(testName, testID, testEmail);

    expect(employee.getName()).toEqual(testName);
});

test('Retrieve the id', () => {
    const employee = new Employee(testName, testID, testEmail);

    expect(employee.getId()).toEqual(testID);
});

test('Retrieve the email', () => {
    const employee = new Employee(testName, testID, testEmail);

    expect(employee.getEmail()).toEqual(testEmail);
});

test('Retrieve the role', () => {
    const employee = new Employee(testName, testID, testEmail);

    expect(employee.getRole()).toEqual('Employee');
});