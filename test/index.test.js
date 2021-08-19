const { neutralizeThreat } = require('../src/index');

describe('GIVEN the neutralizeThreat function', () => {
  describe('WHEN a input that is not a string is passed', () => {
    test('THEN an error should be thrown', () => {
      expect(() => {
        neutralizeThreat(123);
      }).toThrow();
    });
  });
});
