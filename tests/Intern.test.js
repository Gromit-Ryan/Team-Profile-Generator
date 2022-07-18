const Intern = require('../lib/employee')

const testEmail = 'email@email.com';
const testID = 3;
const testName = 'Gromit';
const testSchool = 'School';

test('Create the intern object', () => {
    const employee = new Intern(testName, testID, testEmail, testSchool);

    expect(employee.name).toEqual('Gromit');
    expect(employee.id).toEqual(3);
    expect(employee.email).toEqual('email@email.com');
    expect(employee.school).toEqual('School')
});

test('Retrieve the name', () => {
    const employee = new Intern(testName, testID, testEmail, testSchool);

    expect(employee.getName()).toEqual(testName);
});

test('Retrieve the id', () => {
    const employee = new Intern(testName, testID, testEmail, testSchool);

    expect(employee.getId()).toEqual(testID);
});

test('Retrieve the email', () => {
    const employee = new Intern(testName, testID, testEmail, testSchool);

    expect(employee.getEmail()).toEqual(testEmail);
});

test('Retrieve the github', () => {
    const employee = new Intern(testName, testID, testEmail, testSchool);

    expect(employee.getschool()).toEqual(testSchool)
})

test('Retrieve the role', () => {
    const employee = new Intern(testName, testID, testEmail, testSchool);

    expect(employee.getRole()).toEqual('Intern');
});