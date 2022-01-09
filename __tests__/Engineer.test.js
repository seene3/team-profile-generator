const Engineer = require('../lib/Engineer.js')

test('check for engineer github', () => {
    const engineer = new Engineer('Stan');
    engineer.github = 'github';

    expect(engineer.github).toBe('github');
});