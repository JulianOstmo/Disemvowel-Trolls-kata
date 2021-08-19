const { neutralizeThreat } = require('../src/index');

describe('GIVEN the neutralizeThreat function', () => {
  describe('WHEN a input that is not a string is passed', () => {
    test('THEN an error should be thrown', () => {
      expect(() => {
        neutralizeThreat(123);
      }).toThrow();
    });
  });

  describe('WHEN a empty string is passed', () => {
    test('THEN an empty string should be returned', () => {
      expect(neutralizeThreat('')).toBe('');
    });
  });

  describe('WHEN the input is a valid string', () => {
    test('THEN "LL" should be returned when "LOL" is passed', () => {
      expect(neutralizeThreat('LOL')).toBe('LL');
    });

    test('THEN "ll" should be returned when "lol" is passed', () => {
      expect(neutralizeThreat('lol')).toBe('ll');
    });

    test('THEN "lsrs LL" should be returned when "losers LOL" passed', () => {
      expect(neutralizeThreat('losers LOL')).toBe('lsrs LL');
    });
  });
});
