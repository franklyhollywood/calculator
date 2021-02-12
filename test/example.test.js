// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add, subtract, multiply, divide } from '../utilities.js';

const test = QUnit.test;

test('time to test add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 5;
    const sum = 9;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});

test('time to test subtraction', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 10;
    const y = 5;
    const sum = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = subtract(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});

test('time to test multiplication', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 10;
    const y = 5;
    const sum = 50;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = multiply(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});

test('time to test dividing', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 10;
    const y = 5;
    const sum = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});