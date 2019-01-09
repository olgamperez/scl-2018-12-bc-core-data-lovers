global.window = global;
//global.expect = require ('chai').expect;
global.assert  = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data');
require('./data.spec.js');

//intentando test

const dataTest = window.POKEMON.pokemon;

describe('pokemon', () => {
  it('Debería ser un objeto', () => {
    assert.equal(typeof window.pokemones, 'object','pokemon es un objeto');
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
  
 it('Debería retornar un arreglo de objetos con los pokemones ordenados por name de forma Z-A', ()   => {

    let orderZ_A = window.pokemones.sortData(dataTest, 'name','za')

    assert.deepStrictEqual([orderZ_A[0].name, orderZ_A[1].name, orderZ_A[2].name, orderZ_A[3].name],['Zubat','Zapdos','Wigglytuff','Weezing']);
  });

  it('Debería retornar un arreglo de objetos con los pokemones ordenados por id de big-small', ()   => {

    let numberMayor = window.pokemones.sortData(dataTest, 'num','big-small')

    assert.deepStrictEqual([numberMayor[0].id, numberMayor[1].id, numberMayor[2].id, numberMayor[3].id],[151,150,149,148]);
  });

  it('Debería retornar un arreglo de objetos con los pokemones ordenados por id de small-big', ()   => {

    let numberMenor = window.pokemones.sortData(dataTest, 'num','small-big')

    assert.deepStrictEqual([numberMenor[0].id, numberMenor[1].id, numberMenor[2].id, numberMenor[3].id],[1,2,3,4]);
  });})

 // describe('pokemon.computeStats', () => {
 //   it('Debería ser una función', () => {
 //    assert.equal(typeof window.pokemones.computeStats,'function');
 //   });
 //   
 // it('Deberia retornar 3 para la cantidad de pokemon de tipo fuego', ()=>{
 //   let computePokemonFire= window.pokemones.computeStats(dataTest)
 //     assert.lengthOf(computePokemonFire.type, 12,'Hay 12 pokemones de fuego')
 //    })

})//})
//guardando
//const dataOrderTest = [
// {
//     "id": 1,
//     "num": "001",
//     "name": "Bulbasaur",
//     "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
//     "type": [
//       "Grass",
//       "Poison"
//     ],
//     "height": "0.71 m",
//     "weight": "6.9 kg",
//     "candy": "Bulbasaur Candy",
//     "candy_count": 25,
//     "egg": "2 km",
//     "spawn_chance": 0.69,
//     "avg_spawns": 69,
//     "spawn_time": "20:00",
//     "multipliers": [1.58],
//     "weaknesses": [
//       "Fire",
//       "Ice",
//       "Flying",
//       "Psychic"
//     ],
//     "next_evolution": [{
//       "num": "002",
//       "name": "Ivysaur"
//     }, {
//       "num": "003",
//       "name": "Venusaur"
//     }]
//   }, {
//     "id": 2,
//     "num": "002",
//     "name": "Ivysaur",
//     "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
//     "type": [
//       "Grass",
//       "Poison"
//     ],
//     "height": "0.99 m",
//     "weight": "13.0 kg",
//     "candy": "Bulbasaur Candy",
//     "candy_count": 100,
//     "egg": "Not in Eggs",
//     "spawn_chance": 0.042,
//     "avg_spawns": 4.2,
//     "spawn_time": "07:00",
//     "multipliers": [
//       1.2,
//       1.6
//     ],
//     "weaknesses": [
//       "Fire",
//       "Ice",
//       "Flying",
//       "Psychic"
//     ],
//     "prev_evolution": [{
//       "num": "001",
//       "name": "Bulbasaur"
//     }],
//     "next_evolution": [{
//       "num": "003",
//       "name": "Venusaur"
//     }]
//   }, {
//     "id": 3,
//     "num": "003",
//     "name": "Venusaur",
//     "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
//     "type": [
//       "Grass",
//       "Poison"
//     ],
//     "height": "2.01 m",
//     "weight": "100.0 kg",
//     "candy": "Bulbasaur Candy",
//     "egg": "Not in Eggs",
//     "spawn_chance": 0.017,
//     "avg_spawns": 1.7,
//     "spawn_time": "11:30",
//     "multipliers": null,
//     "weaknesses": [
//       "Fire",
//       "Ice",
//       "Flying",
//       "Psychic"
//     ],
//     "prev_evolution": [{
//       "num": "001",
//       "name": "Bulbasaur"
//     }, {
//       "num": "002",
//       "name": "Ivysaur"
//     }]
//   }, {
//     "id": 4,
//     "num": "004",
//     "name": "Charmander",
//     "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
//     "type": [
//       "Fire"
//     ],
//     "height": "0.61 m",
//     "weight": "8.5 kg",
//     "candy": "Charmander Candy",
//     "candy_count": 25,
//     "egg": "2 km",
//     "spawn_chance": 0.253,
//     "avg_spawns": 25.3,
//     "spawn_time": "08:45",
//     "multipliers": [1.65],
//     "weaknesses": [
//       "Water",
//       "Ground",
//       "Rock"
//     ],
//     "next_evolution": [{
//       "num": "005",
//       "name": "Armeleon"
//     }, {
//       "num": "006",
//       "name": "Charizard"
//     }]
//   }
// ]
//


//    it('Debería retornar un arreglo de objetos con los pokemones ordenados por //"name" de forma Z-A', () => {
//      assert.equal(window.pokemones.sortData('az',['Dratini','Mew', 'Venasaur', //'Bulbasaur', 'Tentacruel', 'Spearow'],['Bulbasaur', 'Dratini', 'Mew', //'Spearow', 'Tentacruel', 'Venasaur']));})
//    

//    it('Debería retornar un arreglo de objetos con los pokemones ordenados por num //de forma menor a mayor', () => {
//      assert.equal(window.pokemones.sortData('small-big',[11,150,100,56,24,110],//[11,24,56,100,110,150]));
//    });
//
//  it('Debería retornar un arreglo de objetos con los pokemones ordenados por num de ////forma mayor a menor', () => {
//    assert.equal(window.pokemones.sortData('big-small',[15,1,37,151,132,2,9,92,89], //[1,2,9,15,37,89,92,132,151])); }); });                   
//    });
  // });



/*
describe('pokemon.filterData', () => {
  it('Debería ser una función', () => {
  expect(typeof window.pokemones.filterData).toBe('function');
  });
  
  it('Debería retornar un array de objetos con los pokemones que sean de tipo Planta', () => {
  let pokemonesGrass = [];
  for (let i=0; i<window.pokemones.filterData(window.POKEMON.pokemon,'Grass').length; i++) {
  pokemonesGrass.push(window.pokemones.filterData(window.POKEMON.pokemon,'Grass')[i])
  return pokemonesGrass;}
  
  expect(pokemonesGrass).toEqual(['Bulbasaur', 'Ivysaur', 'Venusaur','Oddish', 'Gloom', 'Vileplume', 'Paras','Parasect', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Exeggcute', 'Exeggutor','Tangela'])
  })
  });
  //testeo funcion sortData
  describe('pokemon.sortData', () => {
  it('Debería ser una función', () => {
  expect(typeof window.pokemones.sortData).toBe('function');
  });});
  })

  [2,8,126,0]
  */

