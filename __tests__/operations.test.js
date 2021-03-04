import {
    AddOperation,
    SubtractOperation,
    DivideOperation,
    MultiplyOperation
  } from '../components/operations';


// Operations + , - , / and *
test('tests if sum operation sums correctly', () => {
    expect(AddOperation({ firstNumber: 2, secondNumber: 3 })).toBe(5);
  })
  
  test('tests if subtract operation subtracts correctly', () => {
    expect(SubtractOperation({ firstNumber: 12, secondNumber: 2 })).toBe(10);
  })
  
  test('tests if divide operation divides correctly', () => {
    expect(DivideOperation({ firstNumber: 24, secondNumber: 12 })).toBe(2);
  })
  
  test('tests if multiplie operation multiplies correctly', () => {
    expect(MultiplyOperation({ firstNumber: 2, secondNumber: 2 })).toBe(4);
  })