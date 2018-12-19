// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

const pokemonTypeGrass = POKEMON.filter(function(POKEMON){
  return POKEMON.type === "Grass";
})
console.log(pokemonTypeGrass);