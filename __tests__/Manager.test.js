const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Josh', 100400, 'Josh@yahoo.com', 4);

    expect(manager.name).toBe('Josh');
    expect(manager.ID).toBe(100400);
    expect(manager.email).toBe('Josh@yahoo.com');
    expect(manager.office).toBe(4);
    expect(manager.ID).toEqual(expect.any(Number));
    expect(manager.office).toEqual(expect.any(Number));
});