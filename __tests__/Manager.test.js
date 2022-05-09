const Manager = require("../lib/Manager");

test('creates manager object', () => {
    const manager = new Manager('Ric', '0717','test@test.com', '101A');

    expect(manager.name).toBe('Ric');
    expect(manager.id).toBe('0717');
    expect(manager.email).toBe('test@test.com');
    expect(manager.officeNumber).toBe('101A')
});

test('gets manager name',() =>{
    const manager = new Manager('Ric', '0717','test@test.com', '101A');

    expect(manager.getName()).toBe('Ric');
});

test('gets manager id',() =>{
    const manager = new Manager('Ric', '0717','test@test.com', '101A');

    expect(manager.getId()).toBe('0717');
});

test('gets manager email',() =>{
    const manager = new Manager('Ric', '0717','test@test.com', '101A');

    expect(manager.getEmail()).toBe('test@test.com');
});

test('gets manager role',() =>{
    const manager = new Manager('Ric', '0717','test@test.com', '101A');

    expect(manager.getRole()).toBe('Manager');
});

test('gets manager office number',() =>{
    const manager = new Manager('Ric', '0717','test@test.com', '101A');

    expect(manager.getOfficeNumber()).toBe('101A');
})