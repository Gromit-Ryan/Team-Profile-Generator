const Engineer = require('../lib/engineer');

const testName = 'Gromit';
const testID = 3;
const testEmail = 'email@email.com';
const testGithub = 'githubUser';

test('Create the engineer object', () => {
    const employee = new Engineer(testName, testID, testEmail, testGithub);

    expect(employee.name).toEqual('Gromit');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual('email@email.com');
    expect(employee.github).toEqual('githubUser')
});

test('Retrieve the name', () => {
    const employee = new Engineer(testName, testID, testEmail, testGithub);

    expect(employee.getName()).toEqual(testName);
});

test('Retrieve the id', () => {
    const employee = new Engineer(testName, testID, testEmail, testGithub);

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Retrieve the email', () => {
    const employee = new Engineer(testName, testID, testEmail, testGithub);

    expect(employee.getEmail()).toEqual(testEmail);
});

test('Retrieve the github', () => {
    const employee = new Engineer(testName, testID, testEmail, testGithub);

    expect(employee.getGithub()).toEqual(testGithub)
})

test('Retrieve the role', () => {
    const employee = new Engineer(testName, testID, testEmail, testGithub);

    expect(employee.getRole()).toEqual('Engineer');
});