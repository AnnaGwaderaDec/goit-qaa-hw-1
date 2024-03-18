// checkAge.test.js
  const isAdult = require('../checkAge');
  
  describe('Check Age', () => {
    it('Verifies that the person at 20 is an adult', () => {
    expect(isAdult(20)).toBe(true);
  });
  
    it('Verifies that the person at 16 is an adult', () => {
    expect(isAdult(16)).toBe(false);
  });
  
    it('Verifies that the person at 18 is an adult', () => {
    expect(isAdult(18)).toBe(true);
  });
});