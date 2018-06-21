const functions = require('./functions');

//returnTwo tests
test('returnTwo should return the number 2', () => {
    let result = functions.returnTwo();
    expect(result).toBe(2);
})

//greeting tests
test('greeting("james") should return "Hello, James"', () => {
    let result = functions.greeting("James");
    expect(result).toBe('Hello, James');
})

test('greeting("Jill") to return "Hello, Jill', () => {
    let result = functions.greeting("Jill");
    expect(result).toBe('Hello, Jill');
})

//add tests
test("add(1, 2) should return 3", () => {
    let result = functions.add(1, 2);
    expect(result).toBe(3);
})

test("add(5, 9) should return 14", () => {
    let result = functions.add(5, 9);
    expect(result).toBe(14);
})

//multiple tests
test("multiply(3, 3) should return 9", () => {
    let result = functions.multiply(3, 3);
    expect(result).toBe(9);
})

//divide tests
test("divide(12, 4) should return 3", () => {
    let result = functions.divide(12, 4);
    expect(result).toBe(3);
})

//subract tests
test("subtract(10, 7) should return 3", () => {
    let result = functions.subtract(10, 7);
    expect(result).toBe(3);
})