require('../src/data.js');

//intentando test
describe('pokemon', () => {
  it('Debería ser un objeto', () => {
  expect(typeof window.pokemones).toBe('object');
  });
  
    
  describe('pokemon.filterData', () => {
    it('Debería ser una función', () => {
    expect(typeof window.pokemones.filterData).toBe('function');
    });
  

  });

  describe('pokemon.sortData', () => {
    it('Debería ser una función', () => {
    expect(typeof window.pokemones.sortData).toBe('function');
    });

   it('Debería retornar un arreglo de objetos con los pokemones ordenados por "name" de forma A-Z', () => {
     expect(typeof window.pokemones.sortData("az",["Wartortle", "Venasaur", "Bulbasaur", "Pinsir"], ["Bulbasaur", "Pinsir", "Venasaur", "Wartortle"]));
    });
  });
});