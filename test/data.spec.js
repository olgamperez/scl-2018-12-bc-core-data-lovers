global.window = global;
//global.expect = require ('chai').expect;
global.assert  = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data');
//require('./data.spec.js');

//intentando test

const dataTest = window.POKEMON.pokemon;

describe('pokemon', () => {
  it('Debería ser un objeto', () => {
    assert.equal(typeof window.pokemones, 'object','pokemon es un objeto');
  });
  it('No debería no ser igual a un string', () => {
assert.notEqual(typeof window.pokemones, ('string'));
});

it('Deberia ser un array', () => {
 window.pokemones instanceof Array;
});


//testeo funcion filterData
 describe('pokemon.filterData', () => {
 it('Debería ser una función', () => {
  assert.equal(typeof window.pokemones.filterData,'function','filterData es un función');
 });

it('Debería retornar el primer pokemon de tipo planta', () => {
let pokemonesGrass= window.pokemones.filterData(dataTest,'Grass')[0].name

assert.equal(pokemonesGrass, 'Bulbasaur')
 ;});

 it('Debería retornar el segundo pokemon de tipo Fantasma', () => {
  let pokemonesGhost= window.pokemones.filterData(dataTest,'Ghost')[1].name
  
  assert.equal(pokemonesGhost, 'Haunter')
   ;});
   it('Debería retornar el decimoquinto pokemon de tipo volador', () => {
    let pokemonesGrass= window.pokemones.filterData(dataTest,'Flying')[15].name
    
    assert.equal(pokemonesGrass, 'Articuno')
     ;});
  });
  
//testeo funcion sortData
 describe('pokemon.sortData', () => {
  it('Debería ser una función', () => {
    assert.equal(typeof window.pokemones.sortData,'function','sortData es un función');
  });
  
  it('Debería retornar un arreglo de objetos con los pokemones ordenados por name de forma A-Z', ()   => {

    let orderA_Z = window.pokemones.sortData(dataTest, 'name','az')
    //assert.deepStrictEqual comprueba si dos objetos, y sus objetos secundarios, son iguales utilizando el operador ===
    assert.deepStrictEqual([orderA_Z[0].name, orderA_Z[1].name, orderA_Z[2].name, orderA_Z[3].name, orderA_Z[4].name],['Abra','Aerodactyl','Alakazam','Arbok','Arcanine']);
  });
  it('Debería retornar ok para prev.name > next.name', ()   => {
    assert.ok(window.pokemones.sortData(dataTest, 'higher')[1].name, '>', dataTest[0].name);
    });                        
 it('Debería retornar un arreglo de objetos con los pokemones ordenados por name de forma Z-A', ()   => {

    let orderZ_A = window.pokemones.sortData(dataTest, 'name','za')

    assert.deepStrictEqual([orderZ_A[0].name, orderZ_A[1].name, orderZ_A[2].name, orderZ_A[3].name],['Zubat','Zapdos','Wigglytuff','Weezing']);
  });

  it('Debería retornar ok para prev.name < next.name', ()   => {
    assert.ok(window.pokemones.sortData(dataTest, 'less')[0].name, '<', dataTest[1].name);
    }); 

  it('Debería retornar un arreglo de objetos con los pokemones ordenados por id de big-small', ()   => {

    let numberMayor = window.pokemones.sortData(dataTest, 'num','big-small')

    assert.deepStrictEqual([numberMayor[0].id, numberMayor[1].id, numberMayor[2].id, numberMayor[3].id],[151,150,149,148]);
  });

  it('Debería retornar un arreglo de objetos con los pokemones ordenados por id de small-big', ()   => {

    let numberMenor = window.pokemones.sortData(dataTest, 'num','small-big')

    assert.deepStrictEqual([numberMenor[0].id, numberMenor[1].id, numberMenor[2].id, numberMenor[3].id],[1,2,3,4]);
  });
})
describe('pokemon.computeStats', () => {
  it('Debería ser una función', () => {
   assert.equal(typeof window.pokemones.computeStats,'function');
  });
  
it('Deberia retornar 12 para la cantidad de pokemon de tipo fuego', ()=>{
  let computePokemonFire= window.pokemones.computeStats(dataTest, 'Fire')
    assert.ok(computePokemonFire, 12)
   });
   it('Deberia retornar 14 para la cantidad de pokemon de tipo psiquico', ()=>{
    let computePokemonFire= window.pokemones.computeStats(dataTest, 'Psychic')
      assert.ok(computePokemonFire, 14)
     });  

})})


