import { expect, test } from 'vitest';
import { add } from './math.helper';



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



