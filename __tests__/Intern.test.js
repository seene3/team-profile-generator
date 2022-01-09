const Intern = require('../lib/intern.js')

test('check for intern school', () => {
    const intern = new Intern('greg');
    intern.school = 'rutgers';

    expect(intern.school).toBe('rutgers');
});