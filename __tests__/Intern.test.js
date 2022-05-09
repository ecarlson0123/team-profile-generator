const Intern = require("../lib/Intern");

test('creates intern object', () => {
    const intern = new Intern('Ric', '0717','test@test.com', 'UofM');

    expect(intern.name).toBe('Ric');
    expect(intern.id).toBe('0717');
    expect(intern.email).toBe('test@test.com');
    expect(intern.school).toBe('UofM')
});

test('gets intern name',() =>{
    const intern = new Intern('Ric', '0717','test@test.com', 'UofM');

    expect(intern.getName()).toBe('Ric');
});

test('gets intern id',() =>{
    const intern = new Intern('Ric', '0717','test@test.com', 'UofM');

    expect(intern.getId()).toBe('0717');
});

test('gets intern email',() =>{
    const intern = new Intern('Ric', '0717','test@test.com', 'UofM');

    expect(intern.getEmail()).toBe('test@test.com');
});

test('gets intern role',() =>{
    const intern = new Intern('Ric', '0717','test@test.com', 'UofM');

    expect(intern.getRole()).toBe('Intern');
});

test('gets intern office number',() =>{
    const intern = new Intern('Ric', '0717','test@test.com', 'UofM');

    expect(intern.getSchool()).toBe('UofM');
})