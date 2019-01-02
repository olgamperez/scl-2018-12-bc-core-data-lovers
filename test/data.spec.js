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

   it('Debería retornar un arreglo de objetos con los pokemones ordenados por "name" de forma A-Z', ()   => {
     expect(typeof window.pokemones.sortData("az",["Wartortle", "Venasaur", "Bulbasaur", "Pinsir"], ["Bulbasaur", "Pinsir", "Venasaur", "Wartortle"]));
    });

    it('Debería retornar un arreglo de objetos con los pokemones ordenados por "name" de forma Z-A', () => {
      expect(typeof window.pokemones.sortData("az",["Dratini","Mew", "Venasaur", "Bulbasaur", "Tentacruel", "Spearow"], ["Bulbasaur", "Dratini", "Mew", "Spearow", "Tentacruel", "Venasaur"]));
    });

    it('Debería retornar un arreglo de objetos con los pokemones ordenados por "num" de forma menor a mayor', () => {
      expect(typeof window.pokemones.sortData("small-big",[11,150,100,56,24,110], [11,24,56,100,110,150]));
    });

    it('Debería retornar un arreglo de objetos con los pokemones ordenados por "num" de forma mayor a menor', () => {
      expect(typeof window.pokemones.sortData("big-small",[15,1,37,151,132,2,9,92,89], [1,2,9,15,37,89,92,132,151]));
    });




  });
});