const { sum, nativeNull } = require('./intro');

describe('Function sum', () => {
    test('should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4);
        expect(sum(2, 3)).toEqual(5);
    });

    test('should return value correctly comparing to other values', () => {
        expect(sum(2, 3)).toBeGreaterThan(4);
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
        expect(sum(2, 3)).toBeLessThan(10);
        expect(sum(2, 3)).toBeLessThanOrEqual(5);
    });

    test('should 2 float values correct', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

describe('Native Null Function:', () => {
    test('should return false value null', () => {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull;
        expect(nativeNull()).toBeNaN;
        expect(nativeNull()).toBeFalsy();
        expect(nativeNull()).not.toBeTruthy();
        expect(nativeNull()).toBeDefined();
        expect(nativeNull()).not.toBeUndefined();
    });
});
