const { faker } = require('@faker-js/faker');
class Usuario {
    constructor() {
        this.carnet = faker.string.uuid();
        this.firstname = faker.person.firstName();
        this.lastname = faker.person.lastName();
        this.phone = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

module.exports = Usuario;