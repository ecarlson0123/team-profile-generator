const Employee = require("../lib/Employee");

test('creates employee object', () => {
    const employee = new Employee('Ric', '0717','test@test.com');

    expect(employee.name).toBe('Ric');
    expect(employee.id).toBe('0717');
    expect(employee.email).toBe('test@test.com');
});

test('gets employee name',() =>{
    const employee = new Employee('Ric', '0717','test@test.com');

    expect(employee.getName()).toBe('Ric');
});

test('gets employee id',() =>{
    const employee = new Employee('Ric', '0717','test@test.com');

    expect(employee.getId()).toBe('0717');
});

test('gets employee email',() =>{
    const employee = new Employee('Ric', '0717','test@test.com');

    expect(employee.getEmail()).toBe('test@test.com');
});

test('gets employee role',() =>{
    const employee = new Employee('Ric', '0717','test@test.com');

    expect(employee.getRole()).toBe('Employee');
});