import { it, expect } from 'vitest'; 
//import { test } from 'vitest'; (the same)
import { add } from './math'; //it is the name of the function inside the file math

it('should summarize all number values in an array', () => {
  // Arrange 
  const numbers = [1,2,3];
  
  // Act 
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);
  expect(result).toBe(expectedResult)
});

it('should yield NaN if at least one invalid number is provided', () => {
  // Arrange
  const inputs = [1,2,"z"];
  // Act 
  const result = add(inputs);
  // Assert
  // const expectedResult = inputs.reduce((acc, curr) => acc + curr, 0);
  // console.log(`Result is: ${result}`)
  expect(result).toBeNaN()
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
  // Arrange
  const numbers = ['1','2'];
  // Act 
  const result = add(numbers);
  // Assert
  const expectedResult = numbers.reduce((acc, curr) => +acc + +curr, 0);
  expect(result).toBe(expectedResult)
});

it('should yield 0 if an empty array is provided', () => {
  // Arrange
  const numbers = [];
  // Act 
  const result = add(numbers);
  // Assert
  const expectedResult = numbers.reduce((acc, curr) => +acc + +curr, 0);
  // console.log(`Result: ${result}`)
  // console.log(`Expected result: ${expectedResult}`)
  expect(result).toBe(expectedResult)
});

it('should throw an error if not value is passed into the function', () => {
  // try {
  //   const result = add();
  // } catch(error) {
  //   expect(error).toBeDefined();
  // }
  const resultFn = () => {
    add();
  };
  // console.log(`Result: ${resultFn}`)
  
    expect(resultFn).toThrow(/is not iterable/); //When we use toThrow like this, expect should receive a function and Vitest will execute this function
     // for us and check whether it froze. So that saves us the hassle of setting up our own try-catch blocks
});

it('sould throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  }
  console.log(resultFn);
  expect(resultFn).toThrow(/is not iterable/);
});
  

