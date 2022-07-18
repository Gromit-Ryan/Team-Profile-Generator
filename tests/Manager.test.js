const Manager = require('../lib/employee')

const testEmail = 'email@email.com';
const testID = 03;
const testName = 'Gromit';
const testOffice = 12;

test('Create the Manager object', () => {
    const employee = new Manager(testName, testID, testEmail, testOffice);

    expect(employee.name).toEqual('Gromit');
    expect(employee.id).toEqual(03);
    expect(employee.email).toEqual('email@email.com');
    expect(employee.school).toEqual(12)
});

test('Retrieve the name', () => {
    const employee = new Manager(testName, testID, testEmail, testOffice);

    expect(employee.getName()).toEqual(testName);
});

test('Retrieve the id', () => {
    const employee = new Manager(testName, testID, testEmail, testOffice);

    expect(employee.getId()).toEqual(testID);
});

test('Retrieve the email', () => {
    const employee = new Manager(testName, testID, testEmail, testOffice);

    expect(employee.getEmail()).toEqual(testEmail);
});

test('Retrieve the github', () => {
    const employee = new Manager(testName, testID, testEmail, testOffice);

    expect(employee.getschool()).toEqual(testOffice)
})

test('Retrieve the role', () => {
    const employee = new Manager(testName, testID, testEmail, testOffice);

    expect(employee.getRole()).toEqual('Manager');
});