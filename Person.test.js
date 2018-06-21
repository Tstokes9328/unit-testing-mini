let Person = require('./Person');

describe('All my person tests', () => {

    test('nancy is a millenial', () => {
        // arrange
        let nancy = new Person(1984);
        // act
        let result = nancy.isMillenial();
        // assert
        expect(result).toBeTruthy();
    });

    test('harold is a retired', () => {
        // arrange
        let harold = new Person(1908);
        // act
        let result = harold.isRetired();
        // assert
        expect(result).toBeTruthy();
    })
})