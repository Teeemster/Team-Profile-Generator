const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Brad', 100200, 'Brad@yahoo.com', 'github.com/Brad');

    expect(engineer.name).toBe('Brad');
    expect(engineer.ID).toBe(100200);
    expect(engineer.email).toBe('Brad@yahoo.com');
    expect(engineer.github).toBe('github.com/Brad');
    expect(engineer.ID).toEqual(expect.any(Number));
});