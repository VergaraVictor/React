import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';

describe('add', () => {
    test('shoul add two positives numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;
        // ! 2. Act
        const result = add(a, b);
        // ! 3. Assert
        console.log({ result });
        expect(result).toBe(a + b);
    });
});

describe('subtract', () => {
    test('shoul substract two positive numbers', () => {
        const a = 2;
        const b = 4;
        const result = subtract(a, b);
        console.log({ result });
        expect(result).toBe(a - b);
    });
    test('shoul substract two negative numbers', () => {
        const a = -2;
        const b = -4;
        const result = subtract(a, b);
        console.log({ result });
        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {
    test('shoul multiply two positive numbers', () => {
        const a = 2;
        const b = 4;
        const result = multiply(a, b);
        console.log({ result });
        expect(result).toBe(a * b);
    });
    test('shoul multiply two negative numbers', () => {
        const a = -2;
        const b = -4;
        const result = multiply(a, b);
        console.log({ result });
        expect(result).toBe(a * b);
    });
});

describe('divide', () => {
    test('shoul divide two positive numbers', () => {
        const a = 2;
        const b = 4;
        const result = divide(a, b);
        console.log({ result });
        expect(result).toBe(a / b);
    });
});




