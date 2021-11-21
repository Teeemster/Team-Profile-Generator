const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Sandy', 100300, 'Sandy@yahoo.com', 'ASU');

    expect(intern.name).toBe('Sandy');
    expect(intern.ID).toBe(100300);
    expect(intern.email).toBe('Sandy@yahoo.com');
    expect(intern.school).toBe('ASU');
    expect(intern.ID).toEqual(expect.any(Number));
});