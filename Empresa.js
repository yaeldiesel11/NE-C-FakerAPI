const { faker } = require('@faker-js/faker');
class Empresa {
    constructor() {
        this.carnet = faker.string.uuid();
        this.name = faker.company.name();
        this.location = {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        };
    }
}

module.exports = Empresa;