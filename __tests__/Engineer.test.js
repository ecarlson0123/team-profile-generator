const Engineer = require("../lib/Engineer");

test('creates engineer object', () => {
    const engineer = new Engineer('Ric', '0717','test@test.com', 'test0123');

    expect(engineer.name).toBe('Ric');
    expect(engineer.id).toBe('0717');
    expect(engineer.email).toBe('test@test.com');
});

test('gets engineer name',() =>{
    const engineer = new Engineer('Ric', '0717','test@test.com', 'test0123');

    expect(engineer.getName()).toBe('Ric');
});

test('gets engineer id',() =>{
    const engineer = new Engineer('Ric', '0717','test@test.com', 'test0123');

    expect(engineer.getId()).toBe('0717');
});

test('gets engineer email',() =>{
    const engineer = new Engineer('Ric', '0717','test@test.com', 'test0123');

    expect(engineer.getEmail()).toBe('test@test.com');
});

test('gets engineer role',() =>{
    const engineer = new Engineer('Ric', '0717','test@test.com', 'test0123');

    expect(engineer.getRole()).toBe('Engineer');
});

test('gets engineer github',() =>{
    const engineer = new Engineer('Ric', '0717','test@test.com', 'test0123');

    expect(engineer.getGithub()).toBe('test0123');
})