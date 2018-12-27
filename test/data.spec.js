require('../src/data.js');


describe('pokemones', () => {
  
  it('is a function', () => {
    expect(typeof pokemones).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
//describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => { 
    assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG"); //assert.equal(actual, expected)
    });
    it('debería retornar "0123456789" para "1234567890" con offest 9',() => { 
      assert.equal(cipher.encode(9,"1234567890"), "0123456789");
      });