const Manager = require('../lib/Manager.js')

test('check for manager office', () => {
    const manager = new Manager('Bullwinkle');
    manager.officeNumber = '420';

    expect(manager.officeNumber).toBe('420');
});