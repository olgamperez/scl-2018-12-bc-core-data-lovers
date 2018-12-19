/*Todo lo que es filtrar ,
esta es una función de ejemplo
puedes ver como agregamos la función a nuestro objeto global window;*/
//window.example= example;

const dataPokemon = POKEMON.pokemon;
  let namesPokemon = []
  for (let i=0; i<dataPokemon.length; i++) {
  namesPokemon.push(dataPokemon[i].name)
};
//console.log(namesPokemon);

let result = namesPokemon.filter(Bulbasaur1 => Bulbasaur1 === "Pikachu");
console.log(String(result));



  //console.log(nombres) me arroja un array con los nombres*/
  // Para acceder a la imagen  POKEMON.pokemon[1].img

 /* const dataPokemon = POKEMON.pokemon;
  let namesPokemon = []
  for (let i=0; i<dataPokemon.length; i++){
  namesPokemon.push(dataPokemon[i].name)
}
document.write(namesPokemon)*/