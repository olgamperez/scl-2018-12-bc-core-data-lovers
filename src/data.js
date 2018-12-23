
//window.example= example;
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*const example = () => {
 return ‘example’;
};*/

window.POKEMON= {
  sortData: (data, sortBy, sortOrder) => {

  const dataPokemon = data

  if (sortBy === "name" && sortOrder === "az"){
    dataPokemon.sort((prev, next)=> {
 
      if (prev.name > next.name) {
        return 1;
      }
      if (prev.name < next.name) {
        return -1;
      }
      return 0;
    })
  }
  if (sortBy === "name" && sortOrder === "za"){
    dataPokemon.sort((prev, next)=> {
 
      if (prev.name < next.name) {
        return 1;
      }
      if (prev.name > next.name) {
        return -1;
      }
      return 0;
    })
  }
  if (sortBy === "num" && sortOrder === "small-big"){
    dataPokemon.sort((prev, next)=> {
 
      if (prev.num > next.num) {
        return 1;
      }
      if (prev.num < next.num) {
        return -1;
      }
      return 0;
    })
  }
  if (sortBy === "num" && sortOrder === "big-small"){
    dataPokemon.sort((prev, next)=> {
 
      if (prev.num < next.num) {
        return 1;
      }
      if (prev.num > next.num) {
        return -1;
      }
      return 0;
    })
  }
  return dataPokemon
}
} 
 
/*
  sortData(dataPokemon,namesPokemon, sortOrder)=> {
  let namesPokemon = []
  for (let i=0; i<dataPokemon.length; i++) {
  namesPokemon.push(dataPokemon[i].name)
};
resultado(namesPokemon.sort())
}
return resultado;

  

//Aqui se declara la variable para Ordenar de Z-A
//const dataPokemonReverse = POKEMON.pokemon;
//  let namesPokemonReverse = []
//  for (let i=0; i<dataPokemonReverse.length; i++) {
//  namesPokemonReverse.push(dataPokemon[i].name)
//};
//console.log(namesPokemonReverse.sort().reverse());
//
//
//}




/*const dataPokemon = POKEMON.pokemon;
  let namesPokemon = []
  for (let i=0; i<dataPokemon.length; i++) {
  namesPokemon.push(dataPokemon[i].name)
};
//console.log(namesPokemon);

let result = namesPokemon.onchange(Bulbasaur1 => Bulbasaur1 === "Pikachu");
console.log(String(result));*/

  //console.log(nombres) me arroja un array con los nombres*/
  // Para acceder a la imagen  POKEMON.pokemon[1].img

 /* const dataPokemon = POKEMON.pokemon;
  let namesPokemon = []
  for (let i=0; i<dataPokemon.length; i++){
  namesPokemon.push(dataPokemon[i].name)
}
document.write(namesPokemon)*/