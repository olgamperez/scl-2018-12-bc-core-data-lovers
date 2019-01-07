require('../src/data.js');


describe('example', () => {
  
  it('is a function', () => {
    expect(typeof exmaple).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
